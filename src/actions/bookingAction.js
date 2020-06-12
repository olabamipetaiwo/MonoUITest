import {
   GET_BOOKINGS,
   BOOK_EVENT,
   CANCEL_BOOKING,
   BOOKING_ERROR
 } from './types';
 
 import Axios from 'axios';

 export const fetchBookings = (userId) => async (dispatch) => {
    try{
        const res = await Axios({
            url:'http://localhost:5000/graphql',
            method:'post',
            data: {
                 query:`
                        query{
                            bookings {
                               _id
                               user {
                                  _id
                               }
                               event {
                                   _id
                                   title
                                   date
                                   price
                                   creator {
                                       _id
                                   }
                               }
                            }
                        }
                    `
            }
        });
            const data = await res.data.data.bookings;
             dispatch({
                 type: GET_BOOKINGS,
                 payload:data
             });
    }catch(err) {
        dispatch({
            type:BOOKING_ERROR,
            payload:err.response.data.errors[0].message
        });
    }
}
 
 export const bookEvent = (eventId) => async (dispatch) => {
     try{
         const res = await Axios({
             url:'http://localhost:5000/graphql',
             method:'post',
             data: {
                  query:`
                         mutation{
                             bookEvent(eventId:"${eventId}") {
                                _id
                                user {
                                    _id
                                } 
                                event {
                                    _id
                                    title
                                    creator {
                                       _id
                                    }
                                }
                             }
                         }
                  `
             }
         });
             const data = await res.data.data.bookEvent;
              dispatch({
                  type: BOOK_EVENT,
                  payload:data
              });
     }catch(err) {
         dispatch({
             type:BOOKING_ERROR,
             payload:err.response.data.errors[0].message
         });
     }
 }

export const cancelBooking = (bookingId) => async (dispatch) => {
    try {
         await Axios({
            url:'http://localhost:5000/graphql',
            method:'post',
            data: {
                 query:`
                        mutation{
                            cancelBooking(bookingId:"${bookingId}") {
                                _id
                            }
                        }
                    `
            }
        });
        dispatch({
                  type: CANCEL_BOOKING,
                  payload:bookingId
        });
    }catch(err) {
        dispatch({
            type: BOOKING_ERROR,
            payload:err.response.data.errors[0].message
        });
    }
}