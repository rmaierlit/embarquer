import {UPDATE_FIELD, CHECK_PROFILE, CHECK_INFO, CHECK_ADDRESS} from '../constants/ActionTypes.js'

export const updateField = (field, text) => ({type: UPDATE_FIELD, field, text})
export const checkProfile = () => ({type: CHECK_PROFILE})
export const checkInfo = () => ({type: CHECK_INFO})
export const checkAddress = () => ({type: CHECK_ADDRESS})