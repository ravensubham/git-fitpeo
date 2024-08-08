
import React from 'react';

function RecentOrders() {

  
  const orders = [
    { image:<img  src='https://randomuser.me/api/portraits/men/57.jpg' />, customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
    { image:<img  src='https://randomuser.me/api/portraits/men/61.jpg'/>, customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.00', status: 'Delivered' },
    { image:<img  src='https://randomuser.me/api/portraits/men/64.jpg'/>, customer: 'Guy Hawkins', orderNo: '78958215', amount: '$45.88', status: 'Cancelled' },
    { image:<img  src='https://randomuser.me/api/portraits/men/66.jpg'/>, customer: 'Kristin Watson', orderNo: '20965732', amount: '$96.00', status: 'Pending' },
    { image:<img  src='https://randomuser.me/api/portraits/men/70.jpg'/>, customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
    { image:<img  src='https://randomuser.me/api/portraits/men/72.jpg'/>, customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' },
  ];

  return (
    <div className="recent-orders">
      <h3>Recent Orders</h3>
      <ul>
        <li>
        <span>Customer</span>
        <span>orderNo</span>
        <span>Amount</span>
        <span>Status</span>
        </li>
        {orders.map((order, index) => (
          <li key={index}>
            <div className='image-design'>
            <span>{order.image}</span>
            </div>
           
            <span>{order.customer}</span>
            <span>{order.orderNo}</span>
            <span>{order.amount}</span>
            <span className={order.status.toLowerCase()}>{order.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentOrders;
