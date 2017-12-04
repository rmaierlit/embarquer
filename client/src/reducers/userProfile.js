import {UPDATE_FIELD, CHECK_PROFILE, CHECK_INFO, CHECK_ADDRESS} from "../constants/ActionTypes"
import axios from "axios"

const initialState = {
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
    telephone: '',
    street_address: '',
    city: '',
    state: '',
    zip_code: '55555',
    profileComplete: false,
    personalComplete: false,
    addressComplete: false,
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
            let {first_name, last_name, telephone} = state
            if (state.username && [first_name, last_name, telephone].every(value => value !== '')) {
                console.log('updating')
                updateProfile(state.username, {first_name, last_name, telephone})
                return Object.assign({}, state, {personalComplete: true})
            } else {
                return state
            }
        case CHECK_ADDRESS:
            let {street_address, city, zip_code} = state
            let geoState = state.state //avoids homonym of (Geographical) state and (application) state
            if (!state.username && [street_address, city, geoState, zip_code].every(value => value !== '')) {
                console.log('updating:', street_address, city, geoState, zip_code)
                return Object.assign({}, state, {addressComplete: true})
            } else {
                return state
            }
        default:
            return state
    }
}