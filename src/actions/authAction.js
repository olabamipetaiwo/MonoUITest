import {
    // GET_USER,
    CREATE_USER ,
    // REGISTER_FAIL,
    AUTH_ERROR ,
    SET_CURRENT,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT ,
    SET_LOADING,
    CLEAR_LOADING
} from './types';

import Axios from 'axios';
import setAuthToken from '../utils/setAuthToken';



export const setLoading = () => async (dispatch) => { 
    dispatch({
        type:SET_LOADING
     });
}

export const clearLoading = () => async (dispatch) => { 
    dispatch({
        type:CLEAR_LOADING
     });
}



export const createUser = (user) => async (dispatch) => {
    await dispatch(setLoading());
    try {
        const res = await Axios({
            url:'http://localhost:5000/graphql',
            method:'post',
            data: {
                 query:`
                        mutation{
                            createUser(userInput:{email:"${user.email}",password:"${user.password}"}) {
                                email
                                password
                            }
                        }
                    `
            }
        });
           if(res.data.errors) {
               const error = await res.data.errors[0].message;
                dispatch({
                    type:AUTH_ERROR,
                    payload:error
                });
           }else {
                dispatch({
                    type:CREATE_USER
                });
           }
    }catch(err) {
        dispatch({
            type:AUTH_ERROR,
            payload:err.response.data.errors[0].message
        });
    }
    await dispatch(clearLoading());
}

export const loginUser = (user) => async (dispatch) => {
    await dispatch(setLoading());
    try{
        const res = await Axios({
            url:'http://localhost:5000/graphql',
            method:'post',
            data: {
                 query:`
                        query{
                            login(email:"${user.email}",password:"${user.password}") {
                               userId
                               token
                               email
                            }
                        }
                    `
            }
        });
        if(res.data.errors) {
            const error = await res.data.errors[0].message;
             dispatch({
                 type:LOGIN_FAIL,
                 payload:error
             });
        }else {
            const data = await res.data.data.login;
            const token = data.token;
            await setAuthToken(token);
             dispatch({
                 type: LOGIN_SUCCESS,
                 payload:data
             });
             await dispatch(fetchUser(data.userId));
        }
    }catch(err) {
        dispatch({
            type:LOGIN_FAIL,
            payload:err.response.data.errors[0].message
        });
    }
    await dispatch(clearLoading());
}

export const fetchUser = (userId) => async (dispatch) => {
    await setAuthToken(localStorage.token);
    try{
        const res = await Axios({
            url:'http://localhost:5000/graphql',
            method:'post',
            data: {
                 query:`
                        query{
                            fetchUser(userId:"${userId}") {
                               email
                            }
                        }
                    `
            }
        });
            const data = await res.data.data.fetchUser;
             dispatch({
                 type:SET_CURRENT,
                 payload:data
             });
    }catch(err) {
        console.log("error is", err)
        dispatch({
            type:LOGIN_FAIL,
            payload:err.response.data.errors[0].message
        });
    }
}

export const logoutUser = (user) => async (dispatch) => {
             dispatch({
                 type:LOGOUT
             });
        
}

