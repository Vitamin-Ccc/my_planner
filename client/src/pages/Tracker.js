import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button } from "semantic-ui-react";
import TrackerDelete from "../components/TrackerDelete";
import { AuthContext } from "../providers/AuthProvider";

const ExpenseTracker = () => {
  const auth = useContext(AuthContext);
  const params = useParams();
  const navigate = useNavigate();
  const [tracker, setTracker] = useState("");
  const [expense, setExpense] = useState("");
  

  useEffect(()=>{
    getData()
  },[])
  
  const getData = async () => {
    let res = await axios.get(`/api/trackers/${params.id}`)
    // console.log(res.data)
    setTracker(res.data)
  }

  const deleteTracker = async () => {
    await axios.delete(`/api/trackers/${params.id}`)
    navigate("/expensetracker")
  }

  return (
    <div>
      <h1 style={{display: 'flex',  justifyContent:'center'}}>{tracker.name}</h1>
      <Button>

      <TrackerDelete {...tracker} deleteTracker={deleteTracker} />
      </Button>
      <p>{JSON.stringify(tracker)}</p>
    </div>
  )
}

export default ExpenseTracker;