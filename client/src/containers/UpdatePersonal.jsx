import InfoContainer from './InfoContainer'
import {checkInfo} from '../actions'

const FIELD_NAMES = ['first_name', 'last_name', 'telephone']
const NEXT_PATH = '/onboard/step3'
const COMPLETE_FLAG = 'personalComplete'

export default InfoContainer(FIELD_NAMES, NEXT_PATH, COMPLETE_FLAG, checkInfo)