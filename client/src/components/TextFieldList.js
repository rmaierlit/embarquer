import React from 'react'
import {TextField} from 'material-ui'
//import LABELS from '../constants/Lables'

const TextFieldList = (props) => {
    console.log(props.fields)
    let textFields = props.fieldNameList.map(fieldName => (
        <div key={fieldName}>
            <TextField
                name={fieldName}
                floatingLabelText={fieldName /*LABELS[fieldName]*/}
                value={props.fields[fieldName]}
                onChange={props.onChange}
            />
        </div>
    ))

    return textFields
}

export default TextFieldList