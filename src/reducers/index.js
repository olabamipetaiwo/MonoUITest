import  {combineReducers} from 'redux';
import bookingReducer from './bookingReducer';
import eventReducer from './eventReducer';
import authReducer from './authReducer';

export default combineReducers({
    event:eventReducer,
    booking:bookingReducer,
    auth:authReducer
});
