import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import brain from './brain.svg'
import { Switch, Route, Link, NavLink } from 'react-router-dom'
import { InputGroup, NavItem } from 'react-bootstrap'
import Signup from '../signup'
import { Listings } from '../listing'

//Attribution icon
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

function Navigation() {
  return (
    <>
      <Navbar expand="md" bg="light" variant="light" sticky="top">
        <Navbar.Brand as={Link} to='/' href="#home">
          <img
            alt=""
            src={brain}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          remoteassembly
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <NavItem eventkey={2} href="/">
              <Nav.Link as={NavLink} to="/signup" >Sign up</Nav.Link>
            </NavItem>
          </Nav>
          <Form inline>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search"
                aria-label="search"
                aria-describedby="search"
              />
              <Button variant="outline-primary" id="search-button">
                Button
              </Button>
            </InputGroup>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/' component={Listings} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </>
  );
}

export default Navigation
