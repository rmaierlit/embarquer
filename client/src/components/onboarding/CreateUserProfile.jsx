import React from 'react'
import { CardTitle, CardActions} from 'material-ui/Card'
import { TextField, RaisedButton } from 'material-ui'

const CARD_ACTIONS_STYLE = {textAlign: "right"}

function CreateUserProfile () {
    return (
        <div>
            <CardTitle title="Create User Profile" />
            <TextField
                name="username"
                floatingLabelText="Username"
            /> <br />
            <TextField
                name="password"
                floatingLabelText="Password"
            /> <br />
            <TextField
                email="email"
                floatingLabelText="Email Address"
            />
            <CardActions style={CARD_ACTIONS_STYLE}>
                <RaisedButton label="Save" primary={true} />
            </CardActions>
        </div>
    )
}

export default CreateUserProfile