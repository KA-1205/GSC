import React from 'react';
import { NavLink } from 'react-router-dom';
import { Shield, Home, Upload, FileText, Layers, Menu } from 'lucide-react';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside className="sidebar">
      <div style={{ padding: isSidebarOpen ? '24px' : '24px 0', borderBottom: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: isSidebarOpen ? 'flex-start' : 'center', gap: '10px' }}>
        <button onClick={toggleSidebar} style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', color: 'var(--text-primary)', padding: isSidebarOpen ? '0' : '8px' }}>
          <Menu size={24} />
        </button>
        {isSidebarOpen && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '8px', height: '8px', background: 'var(--accent-primary)', borderRadius: '50%' }}></div>
            <h2 style={{ fontFamily: 'var(--font-head)', fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)', letterSpacing: '0.04em' }}>PROVCHAIN</h2>
          </div>
        )}
      </div>
      
      <nav style={{ padding: isSidebarOpen ? '24px 16px' : '24px 8px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <NavLink 
          to="/" 
          style={({isActive}) => ({
            display: 'flex', alignItems: 'center', gap: '12px', padding: isSidebarOpen ? '12px 16px' : '12px', justifyContent: isSidebarOpen ? 'flex-start' : 'center',
            borderRadius: 'var(--border-radius-sm)',
            color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
            border: isActive ? '1px solid var(--border-light)' : '1px solid transparent',
          })}
        >
          <Home size={20} style={{ flexShrink: 0 }} />
          {isSidebarOpen && <span style={{ fontWeight: 500 }}>Dashboard</span>}
        </NavLink>
        
        <NavLink 
          to="/register" 
          style={({isActive}) => ({
            display: 'flex', alignItems: 'center', gap: '12px', padding: isSidebarOpen ? '12px 16px' : '12px', justifyContent: isSidebarOpen ? 'flex-start' : 'center',
            borderRadius: 'var(--border-radius-sm)',
            color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
            border: isActive ? '1px solid var(--border-light)' : '1px solid transparent',
          })}
        >
          <Upload size={20} style={{ flexShrink: 0 }} />
          {isSidebarOpen && <span style={{ fontWeight: 500 }}>Register Asset</span>}
        </NavLink>

        {isSidebarOpen && (
          <p style={{ color: 'var(--text-secondary)', margin: '14px 12px 2px', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>
            Evidence Management
          </p>
        )}
        {!isSidebarOpen && <div style={{ height: '24px' }}></div>}

        <NavLink
          to="/scans"
          style={({isActive}) => ({
            display: 'flex', alignItems: 'center', gap: '12px', padding: isSidebarOpen ? '12px 16px' : '12px', justifyContent: isSidebarOpen ? 'flex-start' : 'center',
            borderRadius: 'var(--border-radius-sm)',
            color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
            border: isActive ? '1px solid var(--border-light)' : '1px solid transparent',
          })}
        >
          <Layers size={20} style={{ flexShrink: 0 }} />
          {isSidebarOpen && <span style={{ fontWeight: 500 }}>Asset Scans</span>}
        </NavLink>

        <NavLink
          to="/bundles"
          style={({isActive}) => ({
            display: 'flex', alignItems: 'center', gap: '12px', padding: isSidebarOpen ? '12px 16px' : '12px', justifyContent: isSidebarOpen ? 'flex-start' : 'center',
            borderRadius: 'var(--border-radius-sm)',
            color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            background: isActive ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
            border: isActive ? '1px solid var(--border-light)' : '1px solid transparent',
          })}
        >
          <FileText size={20} style={{ flexShrink: 0 }} />
          {isSidebarOpen && <span style={{ fontWeight: 500 }}>Evidence Bundles</span>}
        </NavLink>
      </nav>
      
      <div style={{ marginTop: 'auto', padding: isSidebarOpen ? '24px' : '24px 8px' }}>
        {isSidebarOpen ? (
          <div className="glass-panel" style={{ padding: '16px', textAlign: 'center' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>
              Anchored on Bitcoin via OpenTimestamps.
            </p>
            <div className="badge badge-success">Trust Layer Active</div>
          </div>
        ) : (
          <div className="glass-panel" style={{ padding: '12px', textAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <Shield size={20} color="var(--success)" />
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
