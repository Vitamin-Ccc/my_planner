import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const ExpenseTracker = () => {
  const auth = useContext(AuthContext);
  const params = useParams();
  const navigate = useNavigate();
  const [tracker, setTracker] = useState(null);

  useEffect(()=>{
    getData()
  },[])
  
  const getData = async () => {
    let res = await axios.get(`/api/trackers/${params.id}`)
    console.log(res.data)
    setTracker(res.data)
  }

  const deleteTracker = async () => {
    await axios.delete(`/api/trackers/${params.id}`)
    navigate("/expensetracker")
  }

  return (
    <div>
      <h1></h1>
      <p>email: {auth.email}</p>
      <p>{JSON.stringify(auth)}</p>
      <button onClick={()=>deleteTracker(params.id)}>Delete this Tracker</button>
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>ERROR SHOULD NOT BE HERE</p>}
    </div>
  )
}

export default ExpenseTracker;