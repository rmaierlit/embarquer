import { connect } from 'react-redux'
import {updateField} from '../actions'
import ProfileForm from '../components/ProfileForm'

const FIELD_NAMES = ['street_address', 'city', 'state', 'zip_code']
const NEXT_PATH = '/'
const completeFlag = 'addressComplete'

function InfoContainer(fieldNames, nextPath, completeFlag, checkStatus){

    const mapStateToProps = state => {
        let profile = state.userProfile
        let fields = {}
        for (let fieldName of fieldNames){
            fields[fieldName] = profile[fieldName]
        }
        return {
            fields,
            complete: profile[completeFlag],
            fieldNameList: fieldNames,
            nextPath: nextPath,
        }
    }

    const mapDispatchToProps = dispatch => ({
        fieldOnChange: (event, value) => {
            let field = event.target.name
            dispatch(updateField(field, value))
        },
        onSave: () => {
            dispatch(checkStatus())
        }
    })

    return connect(
    mapStateToProps,
    mapDispatchToProps
    )(ProfileForm)
}

export default InfoContainer
