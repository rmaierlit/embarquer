import React from 'react'
import { CardTitle, CardActions} from 'material-ui/Card'
import { TextField, RaisedButton } from 'material-ui'
import { connect } from 'react-redux'
import {updateField} from '../actions'
import axios from 'axios'

const CARD_ACTIONS_STYLE = {textAlign: "right"}

const UpdateProfileInfo = ({ first_name, last_name, telephone, fieldOnChange}) => {
    return (
        <div >
            <CardTitle title="Personal Information" />
            <TextField
                name="first_name"
                floatingLabelText="First Name"
                value={first_name}
                onChange={fieldOnChange}
            /> <br />
            <TextField
                name="last_name"
                floatingLabelText="Last Name"
                value={last_name}
                onChange={fieldOnChange}
            /> <br />
            <TextField
                name="telephone"
                floatingLabelText="Telephone Number"
                value={telephone}
                onChange={fieldOnChange}
            />
            <CardActions style={CARD_ACTIONS_STYLE}>
                <RaisedButton label="Save" 
                primary={true} onClick={() => update(first_name, last_name, telephone)}/>
            </CardActions>
        </div>
    )
}

function update(first_name, last_name, telephone) {
    // axios.post('/api/profiles', {fields: {username, password, email}})
    // .then((res) => console.log(res.data))
    // .catch((error) => console.log(error))
}

const mapStateToProps = state => {
    let profile = state.userProfile
    return {
        first_name: profile.first_name,
        last_name: profile.last_name,
        telephone: profile.telephone,
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
)(UpdateProfileInfo)