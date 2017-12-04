import React from 'react'
import { CardTitle, CardActions} from 'material-ui/Card'
import { RaisedButton } from 'material-ui'
import Redirector from '../components/Redirector'
import TextFieldList from './TextFieldList'

const CARD_ACTIONS_STYLE = {textAlign: "right"}

const ProfileForm = ({fields, fieldNameList, complete, fieldOnChange, onSave}) => {
    return (
        <div >
            <CardTitle title="Create User Profile" />
            <TextFieldList fields={fields} fieldNameList={fieldNameList} onChange={fieldOnChange}/>
            <Redirector destination="/onboard/step2" complete={complete} />
            <CardActions style={CARD_ACTIONS_STYLE}>
                <RaisedButton label="Save" 
                primary={true} onClick={onSave}/>
            </CardActions>
        </div>
    )
}

export default ProfileForm