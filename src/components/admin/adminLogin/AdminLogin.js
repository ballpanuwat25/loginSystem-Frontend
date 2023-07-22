import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function AdminLogin() {
    const [valeus, setValues] = useState({
        Admin_Username: "",
        Admin_Password: "",
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/admin-login", valeus).then((response) => {
            if (response.data.Error) {
                alert(response.data.Error);
            } else {
                navigate("/admin-dashboard");
            }
        });
    };

    return (
        <div className='container'>
            <h1>Admin Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='username'
                        onChange={(e) => setValues({ ...valeus, Admin_Username: e.target.value })}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder='password'
                        onChange={(e) => setValues({ ...valeus, Admin_Password: e.target.value })}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
                <div className="btn-group w-100" role="group">
                    <Link to="/admin-register" className='btn btn-outline-success w-100 me-2'>Create Account</Link>
                    <Link to="/admin-forgot-password" className='btn btn-outline-warning w-100'>Forgot password</Link>
                </div>
            </form>
        </div>
    )
}

export default AdminLogin