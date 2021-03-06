import InfoContainer from './InfoContainer'
import {checkUser} from '../actions'

const FIELD_NAMES = ['username', 'password', 'email']
const NEXT_PATH = '/onboard/step2'
const COMPLETE_FLAG = 'userComplete'
const TITLE = 'Create User Profile'

export default InfoContainer(TITLE, FIELD_NAMES, NEXT_PATH, COMPLETE_FLAG, checkUser)