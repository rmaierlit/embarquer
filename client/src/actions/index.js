import {UPDATE_FIELD, CHECK_PROFILE} from '../constants/ActionTypes.js'

export const updateField = (field, text) => ({type: UPDATE_FIELD, field, text})
export const checkProfile = () => ({type: CHECK_PROFILE})