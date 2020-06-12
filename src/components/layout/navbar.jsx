import React from 'react';
import GuestLinks from './guestLinks.jsx';
import AuthLinks from './authLinks.jsx';
import  { connect } from 'react-redux';
import './styles/layout.scss';

const Navbar = (props) => {
  const {
    auth: {isAuthenticated,token }
 } = props;

    return (
      <nav className="nav">
          <h2 className="nav__logo">Event Booker</h2>
          <ul className="nav__list">
            { !token && !isAuthenticated ? <GuestLinks />  : <AuthLinks /> }
          </ul>
      </nav>
    );
  }
  
const mapStateToProps = state => ({
    auth:state.auth
 });

  export default connect(mapStateToProps)(Navbar);
  