import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1>Home</h1>
                <Link className='btn btn-primary' to="/admin-login">Login</Link>
            </div>
        </div>
    )
}

export default Home