import { connect } from 'react-redux'
import {updateField, checkInfo} from '../actions'
import ProfileForm from '../components/ProfileForm'

const FIELD_NAMES = ['street_address', 'city', 'state', 'zip_code']

const mapStateToProps = state => {
    let profile = state.userProfile
    let fields = {}
    for (let fieldName in FIELD_NAMES){
        fields[fieldName] = profile[fieldName]
    }
    return {
        fields,
        fieldNameList: FIELD_NAMES,
        complete: profile.addressComplete
    }
}

const mapDispatchToProps = dispatch => ({
    fieldOnChange: (event, value) => {
        let field = event.target.name
        dispatch(updateField(field, value))
    },
    onSave: () => {
        dispatch(checkInfo())
    }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileForm)