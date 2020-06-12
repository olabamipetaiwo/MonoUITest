import React,{Fragment} from 'react';
import PropTypes from 'prop-types';
import  { connect } from 'react-redux';
import Moment from 'react-moment';
import './styles/booking.scss';
import {cancelBooking} from '../../actions/bookingAction';


const EventBooking = (props) => {
    const {
        Item:{
            _id,
            event: {date,title}
        },
        cancelBooking
    } = props;

    return (
        <Fragment>
             <div className="booking__container__item">
                     <div className="booking__container__item__box">
                       <h4>{title}</h4>
                       <h6><Moment format='MMMM Do YYYY, h:mm a'>{date}</Moment> </h6>
                     </div>
                     <button onClick={() => cancelBooking(_id)} className="link__btn">Cancel Booking</button> 
            </div>
        </Fragment>
    );
}

EventBooking.propTypes = {
    cancelBooking:PropTypes.func.isRequired
}

export default connect(null,{
    cancelBooking
})(EventBooking);
  
