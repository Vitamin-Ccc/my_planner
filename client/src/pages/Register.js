import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Button, Form } from "semantic-ui-react";
import { AuthContext } from "../providers/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const {handleRegister} = useContext(AuthContext);
  const [email, setEmail] = useState("testing@test.com")
  const [password, setPassword] = useState("123456")
  const [passwordConfirmation, setPasswordConfirmation] = useState("123456")
  const handleSubmit = (e) => {
    // if not using semantic, need to have this to prevent default
    // e.preventDefault();
    if(password !== passwordConfirmation){
      //let user know these don't match
      alert("passwords do not match");
      // quit this function here
      return;
    }
    // console.log({ email, password });
    handleRegister({ email, password }, navigate);
  }
  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <p>Email</p>
        <input
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <p>Password</p>
        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }} />
        <p>Password Confirmation</p>
        <input
          value={passwordConfirmation}
          onChange={(e) => {
            setPasswordConfirmation(e.target.value)
          }} />
        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};

export default Register;