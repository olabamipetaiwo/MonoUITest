import React,{Fragment,useState,useEffect} from 'react';
import './styles/booking.scss';
import PropTypes from 'prop-types';
import Chart from './chart';
import EventBookings from './eventbookings';
import BookingItem from './bookingitem';
import Loader from '../layout/loader';
import  { connect } from 'react-redux';
import {fetchBookings,cancelBooking } from '../../actions/bookingAction';
import { fetchUser } from "../../actions/authAction";


const Booking = (props) => {

    const {
        booking:{bookings,loadingBookings},
        fetchBookings,
        fetchUser
     } = props;

    const [display,setDisplay] = useState('list');

    useEffect(() => {
        fetchUser(localStorage.userId);
         //eslint-disable-next-line
    }, []);

    useEffect(() => {
        fetchBookings();
          //eslint-disable-next-line
    }, []);

    const changeDisplay =(curr) => {
        setDisplay(curr);
    };

    const showBookings = (
        <Fragment>
            { display === 'list' && <BookingItem bookings={bookings} />  }
            { display === 'chart' && <Chart bookings={bookings} />  }
            { display === 'myevents' && <EventBookings bookings={bookings} /> }
        </Fragment>
    );

    return (
        <Fragment> 
            <section className="booking">
                <div className="booking__buttons">
                    <button 
                            onClick={changeDisplay.bind(this,'list')} 
                            className={`link__btn ${display === 'list' ? 'active' :''} `}>Bookings</button> 
                    <button 
                            onClick={changeDisplay.bind(this,'chart')} 
                            className={`link__btn ${display === 'chart' ? 'active' :''} `}>Chart Bookings</button>
                    <button 
                            onClick={changeDisplay.bind(this,'myevents')}
                            className={`link__btn ${display === 'myevents' ? 'active' :''} `}>My Event Bookings</button>  
                </div>

                <div className="booking__container">
                    {loadingBookings === true ? <Loader/> : showBookings}
                </div> 
            </section>
        </Fragment>
    )
}

Event.propTypes = {
    bookEvent:PropTypes.func.isRequired,
    cancelBooking:PropTypes.func.isRequired,
    fetchUser:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth,
    booking:state.booking
 });


export default connect(mapStateToProps,{
    fetchBookings,cancelBooking,fetchUser
})(Booking);
  
