import React from 'react'
import {TextField} from 'material-ui'
import LABELS from '../constants/Labels'

const TextFieldList = (props) => {
    let textFields = props.fieldNameList.map(fieldName => (
        <div key={fieldName}>
            <TextField
                name={fieldName}
                floatingLabelText={LABELS[fieldName]}
                value={props.fields[fieldName]}
                onChange={props.onChange}
            />
        </div>
    ))

    return textFields
}

export default TextFieldList