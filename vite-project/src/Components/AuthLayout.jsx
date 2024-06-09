import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


export const AuthLayout = ({ children, authentication = true }) => {

    const authStatus = useSelector((state) => state.auth.IsloggedIn);
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    useEffect(() => {
        if (authentication && authStatus) {
            setLoader(true);
        }
        else if (!authentication) {
            setLoader(false);
        }
        else {
            navigate('/signin');
        }
    }, [authStatus, authentication, navigate])

    return loader ? <><h1>...loading</h1></> : <>{children}</>;

}

export default AuthLayout