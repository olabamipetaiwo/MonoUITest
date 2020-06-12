import React,{Fragment} from 'react';
import { Link }  from 'react-router-dom';


const GuestLinks =() => {
  return (
    <Fragment>
        <Link className="nav__list-link" to="/register">Register</Link>
        <Link className="nav__list-link" to="/">Login</Link>
    </Fragment>
  );
}

export default GuestLinks;
