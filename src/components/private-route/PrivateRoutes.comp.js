import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

// this functional component with the ternary is our login authentication
 const PrivateRoutes = () => {
    let auth = {'token' :true}
    return(
        auth.token ? <Outlet /> : <Navigate to='/' />
    )
        
}

export default PrivateRoutes