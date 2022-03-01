import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Dashboard = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      {JSON.stringify(auth)}
      <Link to ="/expense">Expense Tracker</Link>
      <Link to ="/trips">My Trips</Link>
      <p onClick = {()=>navigate('/trips')}>navigate to trips</p>
    </div>
  )
}

export default Dashboard;