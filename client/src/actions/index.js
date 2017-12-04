import {UPDATE_FIELD, CHECK_PROFILE, CHECK_INFO} from '../constants/ActionTypes.js'

export const updateField = (field, text) => ({type: UPDATE_FIELD, field, text})
export const checkProfile = () => ({type: CHECK_PROFILE})
export const checkInfo = () => ({type: CHECK_INFO})