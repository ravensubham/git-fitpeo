import React from 'react';
import { Home, BarChart, ShoppingCart, People, Layers } from '@material-ui/icons';

function Sidebar() {
  return (
    <div className="sidebar">
      <Home className="icon" />
      <BarChart className="icon" />
      <ShoppingCart className="icon" />
      <People className="icon" />
      <Layers className="icon" />
    </div>
  );
}

export default Sidebar;
