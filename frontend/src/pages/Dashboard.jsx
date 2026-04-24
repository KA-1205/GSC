import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Activity, ShieldAlert, FileText, UploadCloud, ArrowRight } from 'lucide-react';
import DomainRiskBadge from '../components/DomainRiskBadge';

const Dashboard = () => {
  const [stats, setStats] = useState({ total: 142, flagged: 12, bundles: 5 });
  const [recentScans, setRecentScans] = useState([
    { id: 'scan-1', asset: 'Election_Coverage_Main.mp4', domains: 5, highestRisk: 80, time: '2 hours ago' },
    { id: 'scan-2', asset: 'Editorial_OpEd_Image.png', domains: 2, highestRisk: 45, time: '5 hours ago' },
    { id: 'scan-3', asset: 'Market_Report_Q3.pdf', domains: 0, highestRisk: 0, time: '1 day ago' },
  ]);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '8px', color: 'var(--text-primary)' }}>Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)', margin: 0 }}>Overview of your registered assets and propagation alerts.</p>
        </div>
        <Link to="/register" className="btn btn-primary">
          <UploadCloud size={18} /> Register New Asset
        </Link>
      </div>

      <div className="dashboard-grid">
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '16px', borderRadius: '16px' }}>
            <FileText size={32} color="var(--accent-primary)" />
          </div>
          <div>
            <p style={{ margin: '0 0 4px 0', color: 'var(--text-secondary)', fontWeight: 500 }}>Total Assets</p>
            <h2 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-primary)' }}>{stats.total}</h2>
          </div>
        </div>
        
        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px', borderColor: 'rgba(239, 68, 68, 0.2)' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', padding: '16px', borderRadius: '16px' }}>
            <Activity size={32} color="var(--danger)" />
          </div>
          <div>
            <p style={{ margin: '0 0 4px 0', color: 'var(--danger)', fontWeight: 500 }}>Active Alerts</p>
            <h2 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-primary)' }}>{stats.flagged}</h2>
          </div>
        </div>

        <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '16px', borderRadius: '16px' }}>
            <ShieldAlert size={32} color="var(--success)" />
          </div>
          <div>
            <p style={{ margin: '0 0 4px 0', color: 'var(--success)', fontWeight: 500 }}>Evidence Bundles</p>
            <h2 style={{ margin: 0, fontSize: '2rem', color: 'var(--text-primary)' }}>{stats.bundles}</h2>
          </div>
        </div>
      </div>

      <h2 style={{ fontSize: '1.4rem', marginBottom: '16px', color: 'var(--text-primary)' }}>Recent Scan Activity</h2>
      <div className="table-container glass-panel">
        <table>
          <thead>
            <tr>
              <th>Asset Name</th>
              <th>Domains Detected</th>
              <th>Highest Risk</th>
              <th>Last Scan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {recentScans.map((scan) => (
              <tr key={scan.id}>
                <td style={{ fontWeight: 500 }}>{scan.asset}</td>
                <td>{scan.domains} matches</td>
                <td><DomainRiskBadge riskScore={scan.highestRisk} /></td>
                <td style={{ color: 'var(--text-secondary)' }}>{scan.time}</td>
                <td>
                  <Link to={`/asset/demo-123`} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: 600 }}>
                    View Report <ArrowRight size={14} />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
