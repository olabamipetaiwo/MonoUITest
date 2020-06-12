import React,{Fragment} from 'react';
import { Link }  from 'react-router-dom';
import  { connect } from 'react-redux';
import {logoutUser} from '../../actions/authAction';


const authLinks =(props) => {

  const {
     logoutUser
  } = props;

  const handleLogout =(e) => {
    
  e.preventDefault();
    logoutUser();
  }
  return (
    <Fragment>
        <Link className="nav__list-link" to="/dashboard">Dashboard</Link>
        <Link className="nav__list-link" to="/bookings">Bookings</Link>
        <Link className="nav__list-link"  onClick={handleLogout}>Logout</Link>
        {/* <button className="nav__list-link" onClick={handleLogout}>Logout</button> */}
    </Fragment>
  );
}

export default connect(null,{logoutUser})(authLinks);
