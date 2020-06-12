import React,{Fragment} from 'react';
import './styles/notification.scss';
// import PropTypes from 'prop-types';


const Notification = (props) => {

    return (
        <Fragment>
            <section className="notification">
                <h4>
                     Notification
                </h4>
                <div className="notification__content">
                    <div className="notification__content-item">
                        <h6>
                            <span>Olive Natty</span>
                            Added a new Project
                        </h6>
                        <p>A few Seconds ago</p>
                    </div>

                    <div className="notification__content-item">
                        <h6>
                            <span>Bells Tarid</span>
                            Added a new Project
                        </h6>
                        <p>4 days ago</p>
                    </div>

                </div>
            </section>  
        </Fragment>
    )
}

export default Notification;
