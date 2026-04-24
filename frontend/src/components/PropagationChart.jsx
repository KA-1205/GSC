import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PropagationChart = ({ data }) => {
  // data expected: [{ name: 'YouTube', value: 45 }, { name: 'ShareChat', value: 30 }, ...]
  const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b', '#10b981'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-panel" style={{ padding: '12px 16px', border: '1px solid var(--border-glow)' }}>
          <p style={{ margin: 0, fontWeight: 600, color: 'var(--text-primary)' }}>{payload[0].name}</p>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
            <span style={{ color: payload[0].payload.fill, fontWeight: 'bold' }}>{payload[0].value}%</span> of detected propagation
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            stroke="none"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36} 
            iconType="circle"
            wrapperStyle={{ paddingTop: '20px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PropagationChart;
