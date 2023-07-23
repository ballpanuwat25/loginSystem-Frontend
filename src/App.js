import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

import AdminLogin from './components/admin/adminLogin/AdminLogin.js';
import AdminRegister from './components/admin/adminLogin/AdminRegister.js';
import AdminForgetPassword from './components/admin/adminLogin/AdminForgetPassword.js';
import AdminDashboard from './components/admin/AdminDashboard.js';
import AdminProfile from './components/admin/adminLogin/AdminProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/> } />
        <Route path="/admin-login" element={<AdminLogin/> } />
        <Route path="/admin-register" element={<AdminRegister/> } />
        <Route path="/admin-forget-password" element={<AdminForgetPassword/> } />
        <Route path="/admin-dashboard" element={<AdminDashboard/> } />
        <Route path="/admin-profile" element={<AdminProfile/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;