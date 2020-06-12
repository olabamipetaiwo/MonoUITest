import React,{Fragment,useEffect,useState} from 'react';
import Item from './item';
import './styles/booking.scss';


const BookingItem = (props) => {
    const {
        bookings
    } = props;

    var userEvents = [];
    const [eventFlag,setEventFlag] = useState(false);

    useEffect(() => {
        if(bookings.length > 0 ) {
            bookings.map((bookingItem,index) => {
                if(bookingItem.user._id === localStorage.userId) {
                    userEvents.push(bookingItem);
                } 
                return null;
            });


            if(userEvents.length > 0) {
                setEventFlag(true);
            }else {
                setEventFlag(false);
            }
       }
     },[bookings,userEvents]);

    return (
        <Fragment> 
                {   eventFlag ?
                    bookings.filter(bookingItem => bookingItem.user._id === localStorage.userId)
                    .map((bookingItem,index) => (
                         <Item key={index} Item={bookingItem}  />
                    )):
                    <h2 className="info">You have not booked any event yet</h2>
                 }
        </Fragment>
    );
}



export default BookingItem;
  
