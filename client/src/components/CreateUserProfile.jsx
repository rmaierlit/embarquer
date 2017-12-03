import React from 'react'
import { CardTitle, CardActions} from 'material-ui/Card'
import { TextField, RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import {updateField} from '../actions'

const CARD_ACTIONS_STYLE = {textAlign: "right"}

const CreateUserProfile = ({ username, password, email, fieldOnChange}) => {
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
            <CardActions style={CARD_ACTIONS_STYLE}>
                <RaisedButton label="Save" 
                primary={true} onClick={() => save(username, password, email)}/>
            </CardActions>
        </div>
    )
}

function save(...state) {
    console.log(...state)
}

const mapStateToProps = state => {
    let profile = state.userProfile
    return {
        username: profile.username,
        password: profile.password,
        email: profile.email,
    }
}

const mapDispatchToProps = dispatch => ({
    fieldOnChange: (event, value) => {
        let field = event.target.name
        dispatch(updateField(field, value))
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUserProfile)