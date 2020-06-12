import React,{Fragment} from 'react';
import Moment from 'react-moment';
import './styles/booking.scss';


const EventBooking = (props) => {
    const {
        Item:{
            _id,
            event,
            user
        }
    } = props;


    return (
        <Fragment>
             <div className="booking__container__item">
                     <div className="booking__container__item__box">
                       <h4>{event.title}</h4>
                       <h6><Moment format='MMMM Do YYYY, h:mm a'>{event.date}</Moment> </h6>
                     </div>
                     {/* <button className="link__btn">View Details</button>  */}
            </div>
        </Fragment>
    );
}



export default EventBooking;
  
