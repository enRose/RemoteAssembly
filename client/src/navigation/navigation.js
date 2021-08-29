import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import brain from './brain.svg'
import { Switch, Route, NavLink } from 'react-router-dom'
import { Row, NavItem, Container } from 'react-bootstrap'
import Register from '../register'
import { Listings } from '../listings'
import { ListingDetail } from '../listing-detail'
import css from './nav-style.module.css'

//Attribution icon
//<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

function Navigation() {
  return (
    <>
      <Navbar expand="xl" bg="light" variant="light" sticky="top">
        <Container fluid='lg'>
          <Navbar.Brand as={NavLink} to='/'>
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
              <NavItem eventkey={1} href="/listings">
                <Nav.Link as={NavLink} to="/Listings" >listings</Nav.Link>
              </NavItem>
              <NavItem eventkey={2} href="/register">
                <Nav.Link as={NavLink} to="/register" >Register</Nav.Link>
              </NavItem>
            </Nav>
            <Navbar.Text className={css['navbar-text-margin-right']}>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
            <Form inline className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="search"
                aria-describedby="search"
                className="mr-2"
              />
              <Button variant="outline-primary" id="search-button">
                Button
              </Button>
            </Form>
          </Navbar.Collapse>

        </Container>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Listings} />
        <Route path="/register" component={Register} />
        <Route path="/listings/:id" component={ListingDetail} />
        <Route path="/listings" component={Listings} />
      </Switch>
    </>
  );
}

export default Navigation