import InfoContainer from './InfoContainer'
import {checkInfo} from '../actions'

const FIELD_NAMES = ['first_name', 'last_name', 'telephone']
const NEXT_PATH = '/onboard/step3'
const COMPLETE_FLAG = 'personalComplete'
const TITLE = 'Personal Information'

export default InfoContainer(TITLE, FIELD_NAMES, NEXT_PATH, COMPLETE_FLAG, checkInfo)