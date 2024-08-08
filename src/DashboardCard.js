import React from 'react';

function DashboardCard({ title, value, icon, change }) {
  return (
    <div className="dashboard-card">
      <div className="card-icon">{icon}</div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{value}</p>
        <span className={change.includes('+') ? 'positive' : 'negative'}>{change}</span>
      </div>
    </div>
  );
}

export default DashboardCard;


