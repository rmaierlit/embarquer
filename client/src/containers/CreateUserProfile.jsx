import React from 'react'
import { CardTitle, CardActions} from 'material-ui/Card'
import { TextField, RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import axios from 'axios'
import {updateField, checkProfile} from '../actions'
import Redirector from '../components/Redirector'

const CARD_ACTIONS_STYLE = {textAlign: "right"}

const CreateUserProfile = ({ username, password, email, complete, fieldOnChange, onSave}) => {
    return (
        <div >
            <CardTitle title="Create User Profile" />
            <TextField
                name="username"
                floatingLabelText="Username"
                value={username}
                onChange={fieldOnChange}
            /> <br />
            <TextField
                name="password"
                floatingLabelText="Password"
                value={password}
                onChange={fieldOnChange}
            /> <br />
            <TextField
                name="email"
                floatingLabelText="Email Address"
                value={email}
                onChange={fieldOnChange}
            />
            <Redirector destination="/onboard/step2" complete={complete} />
            <CardActions style={CARD_ACTIONS_STYLE}>
                <RaisedButton label="Save" 
                primary={true} onClick={onSave}/>
            </CardActions>
        </div>
    )
}

CreateUserProfile.componentShouldUpdate = () => console.log(arguments)

function save(username, password, email) {
    axios.post('/api/profiles', {fields: {username, password, email}})
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error))
}

const mapStateToProps = state => {
    let profile = state.userProfile
    return {
        username: profile.username,
        password: profile.password,
        email: profile.email,
        complete: profile.profileComplete,
    }
}

const mapDispatchToProps = dispatch => ({
    fieldOnChange: (event, value) => {
        let field = event.target.name
        dispatch(updateField(field, value))
    },
    onSave: () => {
        dispatch(checkProfile())
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUserProfile)