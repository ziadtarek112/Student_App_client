import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom';

const RequireAuth = () => {
    const auth = useSelector(state => state['auth']['isLoggedIn']);
    const location = useLocation();
    const defaultRoute = '/Announcements';
    const routeName = location.pathname.substring(1);
    return (
    <>
        {auth && <Navigate to={routeName == '' ? defaultRoute : routeName}/>}
        {!auth && <Navigate to="/"/>}

    </>
    )
}

export default RequireAuth
