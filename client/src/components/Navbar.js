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
          <Container>
            <Grid textAlign='center' columns={4}>
              <Grid.Row>
                <Grid.Column>
                  <Menu fluid vertical>
                    <Link to="/dashboard"><Menu.Item className='dashboard'>Dashboard</Menu.Item></Link>
                  </Menu>
                </Grid.Column>
                <Grid.Column>
                  <Menu fluid vertical>
                    <Link to="/trips"><Menu.Item className='trips'>My Trips</Menu.Item></Link>
                  </Menu>
                </Grid.Column>
                <Grid.Column>
                  <Menu fluid vertical>
                    <Link to="/expensetracker"><Menu.Item className='expense'>Expense Tracker</Menu.Item></Link>
                  </Menu>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </>
      )
    }
    return (
      <Grid style={styles.navbar}>
        <Grid.Column floated="left">
            <Link to="/">Logo</Link>
        </Grid.Column>
        <Grid.Column floated="right">
          <StyledLink to='/register'>Register</StyledLink>
          <StyledLink to='/login'>Login</StyledLink>
        </Grid.Column>
      </Grid>
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