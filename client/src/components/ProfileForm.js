import React from 'react'
import { CardTitle, CardActions} from 'material-ui/Card'
import { RaisedButton } from 'material-ui'
import Redirector from '../components/Redirector'
import TextFieldList from './TextFieldList'

const CARD_ACTIONS_STYLE = {textAlign: "right"}

const ProfileForm = ({title, fields, complete, fieldNameList, nextPath, fieldOnChange, onSave}) => {
    return (
        <div >
            <CardTitle title={title} />
            <TextFieldList fields={fields} fieldNameList={fieldNameList} onChange={fieldOnChange}/>
            <Redirector destination={nextPath} complete={complete} />
            <CardActions style={CARD_ACTIONS_STYLE}>
                <RaisedButton label="Save" 
                primary={true} onClick={onSave}/>
            </CardActions>
        </div>
    )
}

export default ProfileForm