import React from 'react';
import { Bell, Search, User } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', width: '100%', maxWidth: '600px' }}>
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
          <Search size={20} color="var(--text-muted)" style={{ position: 'absolute', marginLeft: '16px' }} />
          <input 
            type="text" 
            placeholder="Search registered assets, CIDs, or flagged domains..." 
            className="form-control"
            style={{ paddingLeft: '48px', borderRadius: '24px', width: '100%' }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <div style={{ position: 'relative', cursor: 'pointer' }}>
          <Bell size={20} color="var(--text-secondary)" />
          <span style={{ position: 'absolute', top: '-4px', right: '-4px', width: '8px', height: '8px', background: 'var(--danger)', borderRadius: '50%' }}></span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Indian Express</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Publisher Portal</div>
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <User size={20} color="white" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
