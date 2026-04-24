import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Search, ShieldAlert, ArrowRight, Clock } from 'lucide-react';
import DomainRiskBadge from '../components/DomainRiskBadge';
import PropagationChart from '../components/PropagationChart';

const AssetDetail = () => {
  const { id } = useParams();
  const [scanning, setScanning] = useState(false);
  const [scanComplete, setScanComplete] = useState(false);

  const mockChartData = [
    { name: 'YouTube', value: 45 },
    { name: 'Dailyhunt', value: 25 },
    { name: 'ShareChat', value: 20 },
    { name: 'Other', value: 10 },
  ];

  const handleManualScan = async () => {
    setScanning(true);
    // Mocking API call to /api/v1/scan/{id}
    await new Promise(r => setTimeout(r, 2500));
    setScanning(false);
    setScanComplete(true);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
            <h1 style={{ fontSize: '2rem', margin: 0, color: 'var(--text-primary)' }}>Election_Coverage_Main.mp4</h1>
            <span className="badge badge-warning">High Risk</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', padding: '4px 8px', borderRadius: '4px', display: 'inline-block' }}>
            ID: {id || 'demo-123'} • Reg: April 24, 2026
          </p>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={handleManualScan}
          disabled={scanning}
        >
          {scanning ? (
            <><div className="loader" style={{ width: '16px', height: '16px', borderWidth: '2px' }}></div> Scanning Web...</>
          ) : (
            <><Search size={18} /> Trigger Manual Scan</>
          )}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        <div className="glass-panel" style={{ padding: '24px' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShieldAlert size={20} color="var(--warning)" /> Propagation Distribution
          </h3>
          <PropagationChart data={mockChartData} />
        </div>

        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column' }}>
          <h3 style={{ color: 'var(--text-primary)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Clock size={20} color="var(--accent-primary)" /> Scan Intelligence
          </h3>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Match Confidence (Gemini)</span>
              <span style={{ color: 'var(--success)', fontWeight: 600 }}>0.94 (HIGH_CONFIDENCE)</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid var(--border-light)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Propagation Velocity</span>
              <span style={{ color: 'var(--warning)', fontWeight: 600 }}>14 sites / 24hrs</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Attribution Gap</span>
              <span style={{ color: 'var(--danger)', fontWeight: 600 }}>Detected (No Credit)</span>
            </div>
          </div>
          <Link to={`/evidence/${id || 'demo-123'}`} className="btn btn-secondary" style={{ marginTop: '24px', width: '100%' }}>
            Generate Evidence Bundle <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Detected Instances</h2>
      <div className="table-container glass-panel">
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Platform</th>
              <th>Domain Risk</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ fontFamily: 'monospace', color: 'var(--accent-primary)' }}>https://dailyhunt.in/news/123...</td>
              <td>Dailyhunt</td>
              <td><DomainRiskBadge riskScore={45} /></td>
              <td style={{ color: 'var(--text-secondary)' }}>2026-04-24 10:15</td>
            </tr>
            <tr>
              <td style={{ fontFamily: 'monospace', color: 'var(--accent-primary)' }}>https://sharechat.com/post/xyz...</td>
              <td>ShareChat</td>
              <td><DomainRiskBadge riskScore={30} /></td>
              <td style={{ color: 'var(--text-secondary)' }}>2026-04-24 11:30</td>
            </tr>
            <tr>
              <td style={{ fontFamily: 'monospace', color: 'var(--accent-primary)' }}>http://sketchy-news-hub.net/v...</td>
              <td>Unknown</td>
              <td><DomainRiskBadge riskScore={85} /></td>
              <td style={{ color: 'var(--text-secondary)' }}>2026-04-24 14:00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssetDetail;
