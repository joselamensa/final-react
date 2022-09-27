import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse,
} from 'mdb-react-ui-kit';



export default function NavBar() {
const [showNavSecond, setShowNavSecond] = useState(false);

    return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>REVKT@R BEBIDA5</MDBNavbarBrand>
        <MDBNavbarToggler
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavSecond(!showNavSecond)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={showNavSecond}>
          <MDBNavbarNav>
            <MDBNavbarLink active aria-current='page'>
              <NavLink to="/">Data Productos</NavLink>
            </MDBNavbarLink>
            <MDBNavbarLink >
              <NavLink to="/categoria/sinalcohol">Productos sin alcohol</NavLink>
            </MDBNavbarLink>
            <MDBNavbarLink>
              <NavLink to="/categoria/conalcohol">Productos Con alcohol</NavLink>
            </MDBNavbarLink>
          </MDBNavbarNav>
        </MDBCollapse>
            <MDBNavbarLink href='/cart'>
                <MDBIcon><CartWidget /></MDBIcon>
            </MDBNavbarLink>
      </MDBContainer>
    </MDBNavbar>
  );
}