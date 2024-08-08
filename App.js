import React from "react";

import { Home, BarChart, ShoppingCart, People, Layers } from '@material-ui/icons';
import { FaBell, FaEnvelope, FaUserCircle , FaFonticonsFi} from 'react-icons/fa';


import ReactDOM from "react-dom/client";

import DashboardCard from './src/DashboardCard';
import ActivityChart from './src/ActivityChart';
import RecentOrders from './src/RecentOrders';
import CustomerFeedback from './src/CustomerFeedback.js';


function Sidebar() {
  return (
    <div className="sidebar">
     
      <BarChart className="icon" />
      
      
      
    </div>
  );
}






const AppLayout = () => {
  return (
    

<div className="app">
      <div className="sidebar">
        <div className="logo">📊</div>
        <div className="menu">
          <div className="menu-item"> <Home className="icon" /></div>
          <div className="menu-item"><ShoppingCart className="icon" /></div>
          <div className="menu-item"><People className="icon" /></div>
          <div className="menu-item"><Layers className="icon" /></div>
        </div>
      </div>
      <div className="dashboard">
        <div className="dashboard-header">
          <input type="text" className="search-bar" placeholder="Search..." />
          <div className="user-icons">
            <FaEnvelope className="icon" />
            <FaBell className="icon" />
            <FaUserCircle className="icon" />
            <img src="https://randomuser.me/api/portraits/men/59.jpg" />
          </div>
        </div>
        <div className="top">
          <DashboardCard title="Total Orders" value="75" icon="📦" change="+3%" />
          <DashboardCard title="Total Delivered" value="70" icon="🚚" change="-3%" />
          <DashboardCard title="Total Cancelled" value="5" icon="❌" change="-2%" />
          <DashboardCard title="Net Profit" value="$6759.25" icon="💰" change="+3%" />
        </div>
        <ActivityChart />
        <div className="bottom">
          <RecentOrders />
          <CustomerFeedback />
   
      </div>
    </div>
    </div>
  );

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)


