import {
   GET_EVENTS,
   CREATE_EVENT,
   EVENT_ERROR,
   SET_EVENT,
   CLEAR_CURRENT
} from './types';

import Axios from 'axios';

export const test = () => async (dispatch) => {
    console.log("thos event ran in event action ");
}

export const clearCurrent = () => async (dispatch) => {
    dispatch({
        type:CLEAR_CURRENT
    });
}

export const fetchEvents = (userId) => async (dispatch) => {
    try{
        const res = await Axios({
            // url:'http://localhost:5000/graphql',
            url:'https://eventbookerapi.herokuapp.com/graphql',
            method:'post',
            data: {
                 query:`
                        query{
                            events {
                                _id
                               title
                               description
                               price
                               date
                               creator {
                                   _id
                               }
                            }
                        }
                    `
            }
        });
             const data = await res.data.data.events;
             dispatch({
                 type: GET_EVENTS,
                 payload:data
             });
    }catch(err) {
        dispatch({
            type:EVENT_ERROR,
            payload:err.response.data.errors[0].message
        });
    }
}

export const createEvent = (event) => async (dispatch) => {
    const {title,description,price,evdate} = event;
    try {
        const res = await Axios({
            // url:'http://localhost:5000/graphql',
            url:'https://eventbookerapi.herokuapp.com/graphql',
            method:'post',
            data: {
                 query:`
                        mutation{
                            createEvent(eventInput:{title:"${title}",description:"${description}",price:"${price}",date:"${evdate}"}) {
                                _id
                               title
                               description
                               price
                               date
                               creator {
                                   _id
                               }
                            }
                        }
                    `
            }
        });
        const data = await res.data.data.createEvent;
        dispatch({
            type:CREATE_EVENT,
            payload:data
        });
    }catch(err) {
        dispatch({
            type:EVENT_ERROR,
            payload:err.response.data.errors[0].message
        });
    }
}

export const setEvent = (eventId) => async (dispatch) => {
             dispatch({
                 type: SET_EVENT,
                 payload:eventId
             });
}
