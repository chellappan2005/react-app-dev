import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Cell } from 'recharts';
import "./AdminDashboard.css";

const salesData = [
  { name: 'Jan', sales: 4000, profit: 2400 },
  { name: 'Feb', sales: 3000, profit: 1398 },
  { name: 'Mar', sales: 2000, profit: 9800 },
  { name: 'Apr', sales: 2780, profit: 3908 },
  { name: 'May', sales: 1890, profit: 4800 },
  { name: 'Jun', sales: 2390, profit: 3800 },
  { name: 'Jul', sales: 3490, profit: 4300 },
];

const userData = [
  { name: 'Active', value: 400 },
  { name: 'Inactive', value: 300 },
  { name: 'New', value: 300 },
  { name: 'Returning', value: 200 },
];

const inventoryData = [
  { name: 'Jan', stock: 400, sold: 240 },
  { name: 'Feb', stock: 300, sold: 456 },
  { name: 'Mar', stock: 200, sold: 139 },
  { name: 'Apr', stock: 278, sold: 980 },
  { name: 'May', stock: 189, sold: 390 },
  { name: 'Jun', stock: 239, sold: 480 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <div className="chart-container">
        <div className="chart-item">
          <h3>Sales Data</h3>
          <LineChart width={400} height={300} data={salesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
            <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
          </LineChart>
        </div>
        <div className="chart-item">
          <h3>User Activity</h3>
          <PieChart width={400} height={300}>
            <Pie
              data={userData}
              cx={200}
              cy={150}
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {userData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
        <div className="chart-item">
          <h3>Inventory Status</h3>
          <BarChart width={400} height={300} data={inventoryData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="stock" fill="#8884d8" />
            <Bar dataKey="sold" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;

  