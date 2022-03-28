import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Icon } from "semantic-ui-react";

const ExpenseTrackers = () => {
  const [showNewForm, setShowNewForm] = useState(false);
  const [name, setName] = useState("")
  const [trackers, setTrackers] = useState([]);

  useEffect(() => {
    getExpenses()
  }, [])

  const getExpenses = async () => {
    try {
      let res = await axios.get("/api/expenses")
      setTrackers(res.data)
      console.log(res.data)
    } catch (err) {
      alert("error getting expenses")
    }
  }

  const toggleNewForm = () => {
    setShowNewForm(!showNewForm);
  };

  const addExpenseTracker = (tracker) => {
    setTrackers([tracker, ...trackers]);
  };

  const handleSubmit = async (e) => {
    const newExpenseTracker = { name }
    let res = await axios.post("/api/expenses", newExpenseTracker)
    addExpenseTracker(res.data)
    setName("")
    setShowNewForm(false)
  }

  const renderExpenses = () => {
    if (trackers.length === 0) {
      return (
        <div style={{ textAlign: "center", fontSize: "16px" }}>
          <p>You don't have any expense trackers</p>
        </div>
      )
    }
    return(
      trackers.map((tracker) => (
        <h2>{tracker.name}</h2>
      ))
    )
  }
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 >Expense Tracker</h1>
        <Button onClick={toggleNewForm}>{showNewForm ? "Cancel" : "New Tracker"}</Button>
        {showNewForm && <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
            required
              value={name}
              placeholder='Name of expense tracker'
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Field>
          <Button
            color='green'
            type="submit"
          >
            <Icon name='checkmark' /> Add
          </Button>
        </Form>}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
      </div>
      {renderExpenses()}
    </>
  )
}

export default ExpenseTrackers;