import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"
import { Button, Menu } from 'semantic-ui-react'
import styled from 'styled-components';

const Navbar = () => {
  let nav = useNavigate();
  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return (
        <>
          <div style={styles.navbar}>
            <Button
              style={styles.button}
              onClick={() => handleLogout(nav)}>
              Logout
            </Button>
          </div>
          <div class="ui centered grid">
            <div class="center aligned column">
              <div class="ui compact menu">
                <Link to="/">
                  Dashboard
                </Link>
                <Link to="/trips">
                  My Trips
                </Link>
                <Link to="/expense">
                  Expense Tracker
                </Link>
              </div>
            </div>
          </div>
        </>
      )
    }
    return (
      <div text style={styles.navbar}>
        <Button style={styles.button}><StyledLink to='/register'>Register</StyledLink></Button>
        <Button style={styles.button}><StyledLink to='/login'>Login</StyledLink></Button>
      </div>
    )
  }
  return (
    renderAuthLinks()
  )
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
    padding: " 5px 50px 5px 0px",
    backgroundColor: "#E9E1E1",
    fontSize: "20px",
    color: "#373737",
  },

  button: {
    backgroundColor: "#E9E1E1",
    fontSize: "20px",
    padding: "5px",
  },

}

const StyledLink = styled(Link)`
  color: #373737;
  text-decoration: none;
  &:hover,
  &:focus {
    color: palevioletred;
  }
  &:active {
    color: red;
  }
`


export default Navbar;