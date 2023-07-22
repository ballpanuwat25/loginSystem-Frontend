import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AdminRegister() {
  const [values, setValues] = useState({
    Admin_Name: "",
    Admin_Username: "",
    Admin_Password: "",
    Admin_Tel: "",
  });

  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/admin-register", values).then((response) => {
      if (response.data.Error) {
        alert(response.data.Error);
      } else {
        navigate("/admin-login");
      }
    });
  };

  return (
    <div className='container'>
      <h1>Admin Signup</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            placeholder='name'
            onChange={(e) => setValues({ ...values, Admin_Name: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            placeholder='username'
            onChange={(e) => setValues({ ...values, Admin_Username: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder='password'
            onChange={(e) => setValues({ ...values, Admin_Password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tel" className="form-label">Tel</label>
          <input
            type="text"
            className="form-control"
            placeholder='tel'
            onChange={(e) => setValues({ ...values, Admin_Tel: e.target.value })}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mb-3">Create Account</button>
        <div className="btn-group w-100" role="group">
          <Link to="/admin-login" className='btn btn-outline-success w-100'>Login</Link>
        </div>
      </form>
    </div>
  )
}

export default AdminRegister
