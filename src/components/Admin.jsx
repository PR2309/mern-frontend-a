import React from 'react';
import {Outlet,Link} from 'react-router-dom';
const Admin = () => {
    return (
        <>
            <div>
                <Link to="/admin/users">Users</Link>
                <Link to="/admin/products">Products</Link>
                <Link to="/admin/orders">Orders</Link>
                <p>Admin</p>
            </div>
            <div>
                <Outlet/>
            </div>
        </>
    );
};

export default Admin;
