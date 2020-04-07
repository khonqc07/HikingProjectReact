import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label, 
    Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { NavLink} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state= {
            isNavOpen: false,
            dropdownOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
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
                                        <DropdownItem className="nav-link" to="/"> Easy Trails</DropdownItem>
                                        <DropdownItem className="nav-link" to="/"> Intermediate Trails</DropdownItem>
                                        <DropdownItem className="nav-link" to="/"> Difficult Trails</DropdownItem>
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
                                <Button className="btn btn-success">Login</Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header; 