import React from 'react';
import PropTypes from 'prop-types';
import {Route,Redirect} from "react-router-dom"
import  { connect } from 'react-redux';

const PrivateRoute = (props) => {
    const {component: Component,auth:{token,isAuthenticated}, ...rest} = props;

    return (
        <Route {...rest} render = {
            props => !token && !isAuthenticated ? (
                <Redirect to={{
                    pathname:'/login',
                    state: {from:props.location}
                }}  />
           ) : (
              <Component {...props} />
        )} />
    );

}

PrivateRoute.propTypes = {
    auth:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    auth:state.auth
 });

export default connect(
    mapStateToProps,{}
)(PrivateRoute);