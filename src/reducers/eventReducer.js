import {
   GET_EVENTS,
   EVENT_ERROR,
   CREATE_EVENT,
   SET_EVENT,
   CLEAR_CURRENT
} from '../actions/types';

const initialState = {
   events:null,
   loadingEvent:true,
   currentEvent:null,
   currentSet:false,
   evError:null,
   evFlag:false
}

export default (state=initialState,action) => {
    switch(action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events:action.payload,
                loadingEvent:false
            }
        case CREATE_EVENT:
            return {
                ...state,
                events:[...state.events,action.payload],
                evError:null,
                evFlag:false
            }
        case SET_EVENT:
            let selectedEvent =  state.events.filter((item) => {
                return item._id === action.payload
            });
            return {
                ...state,
                currentEvent:selectedEvent[0],
                currentSet:true
            }
        case CLEAR_CURRENT:
            return {
                ...state,
                currentEvent:null,
                currentSet:false
            }
        case EVENT_ERROR:
            return {
                ...state,
                evError:action.payload,
                evFlag:true
            }
        default:
            return state;
    }
}