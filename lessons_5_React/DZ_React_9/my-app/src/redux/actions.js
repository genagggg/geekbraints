import * as types from "./actionTypes";

export const registerStart = () => ({
    type: types.LOADING_REGISTER
})

export const registerError = (e) => ({
    type: types.ERROR_REGISTER,
    payload: e.toString()
})

export const registerSuccess = (user) => ({
    type: types.SUCCESS_REGISTER,
    payload: user
})

export const loginStart = () => ({
    type: types.LOADING_LOGIN
})

export const loginSuccess = (user) => ({
    type: types.LOADING_SUCCESS,
    payload: user
})

export const loginError = (e) => ({
    type: types.LOADING_ERROR,
    payload: e.toString()
})

export const logoutStart = () => ({
    type: types.LOGOUT_START
})

export const logoutError = (e) => ({
    type: types.LOGOUT_ERROR,
    payload: e.toString()
})

export const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCES
})