import {UPDATE_FIELD, CHECK_PROFILE} from "../constants/ActionTypes"

const initialState = {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    telephone: '',
    profileComplete: false,
}

export default function userProfile (state = initialState, action) {
    switch (action.type) {
        case UPDATE_FIELD:
            return Object.assign({}, state, {[action.field]: action.text})
        case CHECK_PROFILE:
            return Object.assign({}, state, {profileComplete: [state.username, state.password, state.email].every(value => value !== '')})
        default:
            return state
    }
}