import {
    CREATE_USER ,
    AUTH_ERROR ,
    SET_CURRENT,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT ,
    SET_LOADING,
    CLEAR_LOADING 
} from '../actions/types';

const initialState = {
    token:localStorage.getItem('token'),
    user:null,
    isAuthenticated:false,
    isRegistered:false,
    expTime:null,
    error:null,
    errFlag:false,
    loading:false
}

export default (state=initialState,action) => {
    switch(action.type) {
        case CREATE_USER:
            return {
                ...state,
                isRegistered: true
            }
        case LOGIN_SUCCESS:
            localStorage.setItem("token",action.payload.token);
            localStorage.setItem("userId",action.payload.userId);
            return {
                ...state,
                isAuthenticated:true,
                user:action.payload.email,
                error:null,
                errFlag:false,
                loading:false
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            return {
                ...state,
                user:null,
                isAuthenticated:false,
                isRegistered:false,
                expTime:null,
                error:action.payload,
                errFlag:true,
                loading:false
            }
        case SET_CURRENT:
            return {
                ...state,
                isAuthenticated:true,
                user:action.payload.email
            }
        case LOGOUT:
            localStorage.removeItem('token');
            localStorage.removeItem('userId');
            return {
                ...state,
                user:null,
                isAuthenticated:false,
                isRegistered:false,
                expTime:null,
                error:null,
                errFlag:false,
                loading:false
            }
        case SET_LOADING:
            return {
                ...state,
                loading:true
            }
        case CLEAR_LOADING:
            return {
                ...state,
                loading:false
            }
        default:
            return state;
    }
}