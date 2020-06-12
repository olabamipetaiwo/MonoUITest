import React,{Fragment,useState,useRef, useEffect} from 'react';
import './styles/auth.scss';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { loginUser } from "../../actions/authAction";
// import Loader from '../layout/loader';


const Login = (props) => {
    const {
        auth: {isAuthenticated,
         error,
         errFlag,
         loading },
         loginUser,
         history
     } = props;

    const [user,setUser] = useState({
        email:'',
        password:''
    });

    const {email,password} = user;
    const loginBtn = useRef();
    const {from} = props.location.state || {from: {pathname:'/dashboard'}}


    useEffect(() => {
        if(errFlag) {
                loginBtn.current.innerText = "Authenticating Credentials";
                //show error
        }
        //eslint-disable-next-line
    },[errFlag,error]);

    useEffect(() => {
        if(isAuthenticated) {
            history.push(from.pathname);
        }  
        //eslint-disable-next-line
    },[isAuthenticated]);
    
    const handleChange = (e) => {
        setUser({
            ...user,
             [e.target.name]:e.target.value
        });
    }

 

    const handleSubmit = (e) => {
        e.preventDefault();
        if( email === '' || password === '') {
            
        }else {
           loginUser(user);
        }
     }

     const errLine = (
        <Fragment>
            <h6 className="error">{error}</h6> 
        </Fragment>
      );
    

    return (
        <Fragment>
            <section className="auth">
                <div className="auth__intro">
                <h2>Event Booker</h2>
                    <h4>Manage your events in an automated manner</h4>
                </div>
                <div className="auth__content">
                     <h4>Login to Your Account</h4>
                     <form className="auth__content__login"  onSubmit={handleSubmit}>
                                    { errFlag && errLine }
                                    <div className="form-group">
                                        <label className="form-group__label" htmlFor="email">Email</label>
                                        <input type="email"
                                               className="form-group__email"
                                               placeholder="Your email here" 
                                               name="email"
                                               id="email"
                                               required
                                               onChange={handleChange}></input>
                                    </div>   

                                     <div  className="form-group">
                                        <label className="form-group__label" htmlFor="password">Password</label>
                                        <input type="password"
                                               className="form-group__password"
                                               placeholder="Your password here"
                                               name="password"
                                                id="password"
                                               required
                                               onChange={handleChange}
                                               autoComplete="on"></input>
                                    </div>                                  
                                    <button type="submit"
                                            className="btn btn-primary"
                                            ref={loginBtn}
                                            onClick={handleSubmit}>
                                                 {loading ?  <span className="spinner"></span> : <span>Login</span> }    
                                            </button>
                    </form>
                </div>
            </section>  
        </Fragment>
    )
}

Login.propTypes = {
    loginUser:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
 });
 

export default connect(
    mapStateToProps,
  { loginUser}
)(Login);

