import axios from "axios";
import { useContext, useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router"
import { AuthContext } from "../providers/AuthProvider"

const RequireAuth = () => {
  const [checkingAuthStatus, setCheckingAuthStatus] = useState(true)
  const auth = useContext(AuthContext)

  useEffect(()=>{
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    // if we are authenticated or we do not have a token
    if(auth.authenticated  || !localStorage.getItem("access-token")){
      setCheckingAuthStatus(false);
      return;
    }
    try{
      const res = await axios.get("/api/auth/validate_token");
      auth.setUser(res.data.data);
    } catch(err){
      console.log('unable to validate token')
    } finally {
      setCheckingAuthStatus(false);
    }
  };

  if(checkingAuthStatus) {
    return <p>Checking if logged in or not</p>
  };

  if (!auth.authenticated) {
    return <Navigate to='/login' />;
  }

  return (
    <div>
      {/* <h1>Hello {auth.email}</h1> */}
      <Outlet />
    </div>
  )
};

export default RequireAuth;