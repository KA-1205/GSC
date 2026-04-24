#!/bin/bash
# PROVCHAIN Deployment Script
# This script deploys the FastAPI backend and Scanner jobs to Google Cloud Run.

# Ensure we're failing on error
set -e

# Load environment variables (assumes .env exists)
if [ -f .env ]; then
  export $(cat .env | grep -v '#' | awk '/=/ {print $1}')
fi

PROJECT_ID=${GOOGLE_CLOUD_PROJECT:-"your-gcp-project-id"}
REGION="asia-south1"

echo "Deploying PROVCHAIN to Google Cloud Project: $PROJECT_ID ($REGION)"

echo "-----------------------------------"
echo "1. Deploying FastAPI Backend..."
echo "-----------------------------------"
gcloud run deploy provchain-api \
  --source ./api \
  --region $REGION \
  --project $PROJECT_ID \
  --allow-unauthenticated \
  --set-env-vars="GOOGLE_CLOUD_PROJECT=$PROJECT_ID,ENVIRONMENT=production"

echo "-----------------------------------"
echo "2. Deploying Scan Jobs to Cloud Run..."
echo "-----------------------------------"
gcloud run jobs deploy provchain-scanner \
  --source ./jobs \
  --region $REGION \
  --project $PROJECT_ID \
  --set-env-vars="GOOGLE_CLOUD_PROJECT=$PROJECT_ID,ENVIRONMENT=production"

echo "-----------------------------------"
echo "3. Creating Cloud Scheduler Trigger..."
echo "-----------------------------------"
# This creates a scheduler to run every 6 hours hitting the scanner endpoint.
# Make sure your API's /api/v1/scan endpoint is secured if you deploy this!
# For a Job, we trigger the job execution directly:
gcloud scheduler jobs create http provchain-scan-t6h \
  --schedule="0 */6 * * *" \
  --uri="https://${REGION}-run.googleapis.com/apis/run.googleapis.com/v1/namespaces/${PROJECT_ID}/jobs/provchain-scanner:run" \
  --http-method=POST \
  --oauth-service-account-email="provchain-scanner-sa@${PROJECT_ID}.iam.gserviceaccount.com" \
  --location=$REGION \
  || echo "Scheduler job might already exist. Skipping creation."

echo "-----------------------------------"
echo "Deployment Complete!"
echo "-----------------------------------"
echo "Note regarding Frontend:"
echo "To deploy the frontend to Vercel:"
echo "1. cd frontend"
echo "2. npm run build"
echo "3. npx vercel --prod"
echo "Or for Firebase Hosting:"
echo "1. cd frontend && npm run build"
echo "2. firebase init hosting"
echo "3. firebase deploy --only hosting"
