import React from 'react';
import { Link, ExternalLink, CheckCircle } from 'lucide-react';

const IPFSVerifier = ({ cid }) => {
  if (!cid) return null;

  return (
    <div className="glass-panel" style={{ padding: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ background: 'var(--success-glow)', padding: '10px', borderRadius: '50%' }}>
          <CheckCircle size={20} color="var(--success)" />
        </div>
        <div>
          <h4 style={{ margin: '0 0 4px 0', fontSize: '1rem', color: 'var(--text-primary)' }}>Verified on IPFS</h4>
          <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Link size={14} /> CID: <span style={{ fontFamily: 'monospace', background: 'rgba(0,0,0,0.3)', padding: '2px 6px', borderRadius: '4px' }}>{cid.substring(0, 8)}...{cid.substring(cid.length - 8)}</span>
          </p>
        </div>
      </div>
      <a 
        href={`https://gateway.pinata.cloud/ipfs/${cid}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn btn-secondary"
        style={{ fontSize: '0.85rem', padding: '8px 16px' }}
      >
        View on Gateway <ExternalLink size={14} />
      </a>
    </div>
  );
};

export default IPFSVerifier;
