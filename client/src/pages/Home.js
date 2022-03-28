import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Home = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      {JSON.stringify(auth)}
      <Link to ="/expensetracker">Expense Tracker</Link>
      <Link to ="/trips">My Trips</Link>
      <p onClick = {()=>navigate('/trips')}>navigate to trips</p>
    </div>
  )
}

export default Home;