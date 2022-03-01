import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Expenses = () => {
  const auth = useContext(AuthContext);
  return (
    <div>
      <h1>Expense Tracker</h1>
      <p>email: {auth.email}</p>
      <p>{JSON.stringify(auth)}</p>
      {auth.authenticated && <p>is logged in</p>}
      {!auth.authenticated && <p>ERROR SHOULD NOT BE HERE</p>}
    </div>
  )
}

export default Expenses;