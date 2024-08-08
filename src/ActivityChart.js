import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '5', uv: 4000 },
  { name: '9', uv: 3000 },
  { name: '11', uv: 2000 },
  { name: '13', uv: 2780 },
  { name: '15', uv: 1890 },
  { name: '17', uv: 2390 },
  { name: '19', uv: 3490 },
  { name: '21', uv: 2000 },
];

function ActivityChart() {
  return (
    <div className="activity-chart">
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default ActivityChart;
