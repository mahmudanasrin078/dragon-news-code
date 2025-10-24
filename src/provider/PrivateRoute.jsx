import React, { use } from "react";
import { AuthContexts } from "./AuthProvider";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";
import { useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
    const {user,  loading}=use(AuthContexts)
    //console.log(user)

    //location er jonn
    const location=useLocation()
    //console.log(location)

    if (loading){
        return <Loading></Loading>
    }
    //if user thake return children
    if(user && user?.email){

        return children
    }
 
  // na thakle navigate -->login
  return <Navigate state={location.pathname} to='/auth/login'></Navigate>
};

export default PrivateRoute;
