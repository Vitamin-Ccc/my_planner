import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../providers/AuthProvider"
import { Button, Container, Grid, Menu } from 'semantic-ui-react'
import styled from 'styled-components';

const Navbar = () => {
  let nav = useNavigate();
  const { authenticated, handleLogout } = useContext(AuthContext);
  const renderAuthLinks = () => {
    if (authenticated) {
      return (
        <>
          <Grid style={styles.navbar}>
            <Grid.Column floated="left">
              <Button
                style={styles.button}
              >
                <Link to="/">Logo</Link>
              </Button>
            </Grid.Column>
            <Grid.Column floated="right">
              <Button
                style={styles.button}
                onClick={() => handleLogout(nav)}>
                Logout
              </Button>
            </Grid.Column>
          </Grid>
          {/* <div class="ui centered grid">
            <div class="center aligned column">
              <div class="ui compact menu">
                <Link to="/dashboard">
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
          </div> */}
          <Container>
            <Grid textAlign='center' columns={4}>
              <Grid.Row>
                <Grid.Column>
                  <Menu size="medium" fluid vertical>
                    <Menu.Item className='dashboard'> Dashboard</Menu.Item>
                  </Menu>
                </Grid.Column>
                <Grid.Column>
                  <Menu fluid vertical>
                    <Menu.Item className='trips'>My Trips</Menu.Item>
                  </Menu>
                </Grid.Column>
                <Grid.Column>
                  <Menu fluid vertical>
                    <Menu.Item className='expense'>Expense Tracker</Menu.Item>
                  </Menu>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </>
      )
    }
    return (
      <div text style={styles.navbar}>
        <Button
          style={styles.button}
        >
          <Link to="/">Logo</Link>
        </Button>
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
    padding: " 10px 100px 0px 100px",
    backgroundColor: "#E9E1E1",
    fontSize: "20px",
    color: "#373737",
  },

  button: {
    backgroundColor: "#E9E1E1",
    fontSize: "20px",
    padding: "5px",
    margin: "auto",
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