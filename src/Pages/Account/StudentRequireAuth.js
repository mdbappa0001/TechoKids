import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from "../../Firebase/Firebase.init";
import Loading from "../../Components/Loading";

const StudentRequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/studentLogin" state={{ from: location }} replace></Navigate>
    }
    return children;
};

export default StudentRequireAuth;