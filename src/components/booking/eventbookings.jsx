import React,{Fragment,useState} from 'react';
import MyEventBooking from './myeventsbooking';
import './styles/booking.scss';
import { useEffect } from 'react';


const EventBookings = (props) => {
    const {
        bookings
    } = props;

    var userEvents = [];
    const [userFlag,setUserFlag] = useState(false);

    useEffect(() => {
        if(bookings.length > 0 ) {
            //Check for events creaed by user
            bookings.map((bookingItem,index) => {
                if(bookingItem.event.creator._id === localStorage.userId) {
                    userEvents.push(bookingItem)
                }
                return null;
            });
            //Check if user events has bookings
            if(userEvents.length > 0) {
                setUserFlag(true);
            }else {
                setUserFlag(false);
            }
       }
     },[bookings,userEvents]);

    return (
        <Fragment> 
              { userFlag ? 
               bookings.map((bookingItem,index) => {
                    if(bookingItem.event.creator._id === localStorage.userId) {
                       return <MyEventBooking key={index} Item={bookingItem}  />
                    } 
                    return null;
                }) : 
               <h2 className="info">You have no bookings yet</h2> 
             }
        </Fragment>
    );
}



export default EventBookings;
  
