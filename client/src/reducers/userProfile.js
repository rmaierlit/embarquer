import {UPDATE_FIELD} from "../constants/ActionTypes"

const initialState = {
    username: '',
    password: '',
    email: '',
}

export default function userProfile (state = initialState, action) {
    switch (action.type) {
        case UPDATE_FIELD:
            return Object.assign({}, state, {[action.field]: action.text})
        default:
            return state
    }
}