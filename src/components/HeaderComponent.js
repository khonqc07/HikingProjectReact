import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, 
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem,
    Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state= {
            isNavOpen: false,
            dropdownOpen: false,
            isModalLoginOpen: false,
            isModalSignupOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleModalLogin = this.toggleModalLogin.bind(this);
        this.toggleModalSignup = this.toggleModalSignup.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleDropdown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    
    toggleModalLogin() {
        this.setState({
            isModalLoginOpen: !this.state.isModalLoginOpen
        });
    }

    toggleModalSignup() {
        this.setState({
            isModalSignupOpen: !this.state.isModalSignupOpen
        });
    }

    handleSignup(event) {
        alert(`An activation email has been sent to ${this.email.value}. Please confirm your account within 24 hours.`);
        this.toggleModal();
        event.preventDefault();
    }

    render() {
        return(
            <React.Fragment>
                <Navbar className="bg-dark" dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="mx-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>
                                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropdown}>
                                    <DropdownToggle caret>Trails</DropdownToggle>
                                    <DropdownMenu className="bg-dark">
                                        <DropdownItem className="nav-link bg-dark"><NavLink to="/easyTrails">Easy Trails</NavLink></DropdownItem>
                                        <DropdownItem className="nav-link bg-dark"><NavLink to="moderateTrails">Moderate Trails</NavLink></DropdownItem>
                                        <DropdownItem className="nav-link bg-dark"><NavLink to="hardTrails">Hard Trails</NavLink></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">Contact Us</NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button onClick={this.toggleModalLogin} className="btn btn-success">Login</Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
                
                <Modal isOpen={this.state.isModalLoginOpen} toggle={this.toggleModalLogin}>
                    <ModalHeader toggle={this.toggleModalLogin}>Login</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="username">User Name</Label>
                                <Input type="text" id="username" name="username" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" /> 
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" color="success">Login</Button> <hr />
                            <span>Need an account?</span> <br />
                            <Button onClick={this.toggleModalSignup} color="success">Sign Up</Button>                                                   
                        </Form>
                    </ModalBody>
                </Modal>

                <Modal isOpen={this.state.isModalSignupOpen} toggle={this.toggleModalSignup}>
                    <ModalHeader toggle={this.toggleModalSignup}>Create Your Account</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSignup}>
                            <FormGroup>
                                <Label htmlFor="firstname">First Name</Label>
                                <Input type="text" id="firstname" name="firstname" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="lastname">Last Name</Label>
                                <Input type="text" id="lastname" name="lastname" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="phonenum">Phone Number</Label>
                                <Input type="tel" id="phonenum" name="phonenum" />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" id="email" name="email"
                                    innerRef={input => this.email = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" />
                            </FormGroup>
                            <Button type="submit" value="submit" color="success">Sign me up</Button>                                                   
                        </Form>
                    </ModalBody>
                </Modal>

                <Card>
                    <CardImg className="cover-photo" src="https://socalhiker.net/wp-content/uploads/2018/10/Colchuck-Lake-Panorama.jpg" alt="Colchuck Lake" />
                    <CardImgOverlay>
                        <CardTitle>
                            <h1>Washington Best Trails!</h1>
                        </CardTitle>
                        <form>
                            <div className="form-row justify-content-center mt-5">
                                <input className="search-container" type="text" placeholder="Find your next adventure here" name="search" />                    
                                <button className="search-button" type="submit"><i className="fa fa-search fa-lg" /></button>
                            </div>                    
                        </form>                       
                    </CardImgOverlay>
                </Card>
            </React.Fragment>
        )
    }
}

export default Header; 