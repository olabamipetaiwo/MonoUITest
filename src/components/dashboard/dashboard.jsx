import React,{Fragment,useEffect} from 'react';
import './styles/dashboard.scss';
import Notification from './notification';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import { fetchUser } from "../../actions/authAction";
import Loader from '../layout/loader';
import Event from '../event/event';


const Dashboard = (props) => {

    const {
        auth: {user},
        fetchUser
     } = props;

     useEffect(() => {
         fetchUser(localStorage.userId);
          //eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            { !user && <Loader />} 
            {  user && 
                    <section className="dashboard">
                        <div className="dashboard__header">
                            <h4>
                                Welcome {user} 
                            </h4>
                        </div>
                        <div className="dashboard__content">
                            <div className="dashboard__content__project">
                                <Event/>
                            </div>
                            <div className="dashboard__content__notification">
                                <Notification />
                            </div>
                        </div>
                    </section>  
            }
        </Fragment>
    )
}

Dashboard.propTypes = {
    fetchUser:PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
    auth:state.auth
 });

export default connect(mapStateToProps, {
    fetchUser
})(Dashboard);
