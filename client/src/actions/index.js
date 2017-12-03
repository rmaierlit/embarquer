import {UPDATE_FIELD} from '../constants/ActionTypes.js'

export const updateField = (field, text) => ({type: UPDATE_FIELD, field, text})