import {
    GET_BOOKINGS,
    BOOK_EVENT,
    CANCEL_BOOKING,
    BOOKING_ERROR
 } from '../actions/types';
 
 const initialState = {
    bookings:null,
    loadingBookings:true,
    bookingError:null,
    bookingFlag:false
 }
 
 export default (state=initialState,action) => {
     switch(action.type) {
         case GET_BOOKINGS:
             return {
                 ...state,
                 bookings:action.payload,
                 bookingError:null,
                 bookingFlag:false,
                 loadingBookings:false
             }
        case BOOK_EVENT:
             return {
                 ...state,
                 bookings:[...state.bookings,action.payload],
                 bookingError:null,
                 bookingFlag:false
             }
         case CANCEL_BOOKING:
             return {
                 ...state,
                 bookings:state.bookings.filter((booking) => {
                     return booking._id !== action.payload
                  }),
                 bookingError:null,
                 bookingFlag:false
             }
         case BOOKING_ERROR:
             return {
                 ...state,
                 bookingError:action.payload,
                 bookingFlag:true
             }
         default:
             return state;
     }
 }