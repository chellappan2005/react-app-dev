// src/UserDashboard.js
import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import {Link} from 'react-router-dom';
import "./UserDashboard.css";

const lineData = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 2400, amt: 2400 },
  { name: 'Mar', uv: 200, pv: 2400, amt: 2400 },
  { name: 'Apr', uv: 278, pv: 2400, amt: 2400 },
  { name: 'May', uv: 189, pv: 2400, amt: 2400 },
  { name: 'Jun', uv: 239, pv: 2400, amt: 2400 },
  { name: 'Jul', uv: 349, pv: 2400, amt: 2400 },
];

const barData = [
  { name: 'Jan', uv: 400, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 300, pv: 4567, amt: 2400 },
  { name: 'Mar', uv: 200, pv: 1398, amt: 2400 },
  { name: 'Apr', uv: 278, pv: 9800, amt: 2400 },
  { name: 'May', uv: 189, pv: 3908, amt: 2400 },
  { name: 'Jun', uv: 239, pv: 4800, amt: 2400 },
];

const pieData = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const UserDashboard = () => {
  return (
    <div className="dashboard">
      <h2>User Dashboard</h2>
      <div className="chart-container">
        <div className="chart-item">
          <h3>Line Chart</h3>
          <LineChart width={400} height={300} data={lineData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </div>
        <div className="chart-item">
          <h3>Bar Chart</h3>
          <BarChart width={400} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#8884d8" />
            <Bar dataKey="pv" fill="#82ca9d" />
          </BarChart>
        </div>
        <div className="chart-item">
          <h3>Pie Chart</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={pieData}
              cx={200}
              cy={150}
              labelLine={false}
              label={({ name, percent }) => '${name}: ${(percent * 100).toFixed(0)}%'}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              >
              {pieData.map((entry, index) => (
                <Cell key={'cell-${index}'} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
