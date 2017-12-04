import {UPDATE_FIELD, CHECK_USER, CHECK_INFO, CHECK_ADDRESS, RESET} from '../constants/ActionTypes.js'

export const updateField = (field, text) => ({type: UPDATE_FIELD, field, text})
export const checkUser = () => ({type: CHECK_USER})
export const checkInfo = () => ({type: CHECK_INFO})
export const checkAddress = () => ({type: CHECK_ADDRESS})
export const reset = () => ({type: RESET})