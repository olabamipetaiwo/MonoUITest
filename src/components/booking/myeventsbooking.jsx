import React,{Fragment} from 'react';
import Moment from 'react-moment';
import './styles/booking.scss';


const MyEventBooking = (props) => {
    const {
        Item:{
            event: {date,title}
        }
    } = props;


    return (
        <Fragment>
             <div className="booking__container__item">
                     <div className="booking__container__item__box">
                       <h4>{title}</h4>
                       <h6><Moment format='MMMM Do YYYY, h:mm a'>{date}</Moment> </h6>
                     </div>
                     {/* <button className="link__btn">Cancel Booking</button>  */}
            </div>
        </Fragment>
    );
}



export default MyEventBooking;
  
