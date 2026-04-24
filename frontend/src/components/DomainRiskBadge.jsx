import React from 'react';
import { AlertTriangle, ShieldCheck, AlertCircle } from 'lucide-react';

const DomainRiskBadge = ({ riskScore }) => {
  if (riskScore >= 75) {
    return (
      <span className="badge badge-danger" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        <AlertTriangle size={14} /> HIGH RISK
      </span>
    );
  } else if (riskScore >= 40) {
    return (
      <span className="badge badge-warning" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        <AlertCircle size={14} /> MODERATE RISK
      </span>
    );
  } else {
    return (
      <span className="badge badge-success" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
        <ShieldCheck size={14} /> LOW RISK
      </span>
    );
  }
};

export default DomainRiskBadge;
