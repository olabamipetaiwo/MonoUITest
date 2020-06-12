import React,{Fragment,useState,useEffect,useRef} from 'react';
import PropTypes from 'prop-types';
import './styles/auth.scss';
import  { connect } from 'react-redux';
import { createUser } from "../../actions/authAction";

const Register = (props) => {

    const {
      auth: {
       isRegistered,
       isAuthenticated,
       error,
       errFlag,
       loading },
       createUser,
       history
    } = props;

    const [user,setUser] = useState({
        email:'',
        password:'',
        password2:''
    });

    const {email,password,password2} = user;
    
    const [match,setMatch] = useState(false);
    const registerBtn = useRef();

    useEffect(() => {
        if(isAuthenticated) {
            history.push('/dashboard');
        }
         //eslint-disable-next-line
    },[]);

     useEffect(() => {
        if(isRegistered) {
            history.push('/login');
        }

        if(errFlag) {
                registerBtn.current.innerText = "Register";
                //show error
        }
       
        //eslint-disable-next-line
    },[errFlag,error,isRegistered]);

    
    const handleChange = (e) => {
        setUser({
            ...user,
             [e.target.name]:e.target.value
        });
    }

    const confirmPassword = (e) => {
        if(password2 !== password) {
            setMatch(true);
         }else {
            setMatch(false);
         }
    }



 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if( email === '' || password === '') {
            
        }else {
           createUser(user);
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
                     <h4>Register & Get Started</h4>
                     <form className="auth__content__register"  onSubmit={handleSubmit}>
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

                                     <div className="form-group">
                                        <label className="form-group__label" htmlFor="name">Password</label>
                                        <input type="password"
                                               className="form-group__password"
                                               placeholder="Your password here"
                                               name="password"
                                               id="password"
                                               required
                                               onChange={handleChange}
                                               autoComplete="on"></input>
                                    </div>  

                                    <div className="form-group">
                                        <label className="form-group__label" htmlFor="cpassword">Confirm Password</label>
                                        <input type="password"
                                               className="form-group__password"
                                               placeholder="Confirm password here"
                                               name="password2"
                                               id="cpassword"
                                               required
                                               onKeyUp={confirmPassword}
                                               onChange={handleChange}
                                               autoComplete="on"></input>
                                                 {match ? <span style={{
                                                            color:"orangered"
                                                        }}>Password do not match</span> :
                                                 null}
                                    </div>   

                                    <button type="submit"
                                            className="btn btn-primary"
                                            ref={registerBtn}
                                            onClick={handleSubmit}>
                                                {/* {loading ?  <span className="spinner"></span> : <span>Register</span> }  */}
                                                {loading ?  <span className="spinner"></span> : <span>Register</span> }    
                                    </button>
                    </form>
                </div>
            </section>  
        </Fragment>
    )
}

Register.propTypes = {
   createUser:PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    auth:state.auth
});

export default connect(mapStateToProps,{
  createUser
})(Register);
