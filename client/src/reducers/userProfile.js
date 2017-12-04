import {UPDATE_FIELD, CHECK_PROFILE, CHECK_INFO} from "../constants/ActionTypes"
import axios from "axios"

const initialState = {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    telephone: '',
    profileComplete: false,
}

function createProfile(username, password, email) {
    axios.post('/api/profiles', {fields: {username, password, email}})
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error))
}

function updateProfile(username, fields) {
    axios.put(`/api/profiles/${username}`, {fields})
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error))
}

export default function userProfile (state = initialState, action) {
    switch (action.type) {
        case UPDATE_FIELD:
            return Object.assign({}, state, {[action.field]: action.text})
        case CHECK_PROFILE:
            if ([state.username, state.password, state.email].every(value => value !== '')) {
                createProfile(state.username, state.password, state.email)
                return Object.assign({}, state, {profileComplete: true})
            } else {
                return state
            }
        case CHECK_INFO:
            let {username, first_name, last_name, telephone} = state
            if (username && [first_name, last_name, telephone].every(value => value !== '')) {
                console.log('updating')
                updateProfile(username, {first_name, last_name, telephone})
            } else {
                return state
            }
        default:
            return state
    }
}