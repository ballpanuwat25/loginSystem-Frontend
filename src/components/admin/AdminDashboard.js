import axios from 'axios';
import React, { useState, useEffect } from 'react'

function AdminDashboard() {
    const [adminName, setAdminName] = useState("");
    const [adminUsername, setAdminUsername] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [adminTel, setAdminTel] = useState("");

    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get("http://localhost:3001/admin").then((response) => {
            if (response.data.Error) {
                alert(response.data.Error);
            } else {
                setAdminName(response.data.adminName);
                setAdminUsername(response.data.adminUsername);
                setAdminPassword(response.data.adminPassword);
                setAdminTel(response.data.adminTel);
            }
        });
    }, []);

    const handleLogout = () => {
        axios.get("http://localhost:3001/admin-logout").then((response) => {
            if (response.data.Error) {
                alert(response.data.Error);
            } else {
                window.location.href = "/";
            }
        });
    };

    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>Admin Dashboard</h1>
                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div> <hr/>
            
            <h5>AdminName: {adminName}</h5>
            <h5>AdminUsername: {adminUsername}</h5>
            <h5>AdminPassword: {adminPassword}</h5>
            <h5>AdminTel: {adminTel}</h5>
        </div>
    )
}

export default AdminDashboard
