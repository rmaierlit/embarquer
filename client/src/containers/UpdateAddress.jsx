import InfoContainer from './InfoContainer'
import {checkAddress} from '../actions'

const FIELD_NAMES = ['street_address', 'city', 'state', 'zip_code']
const NEXT_PATH = '/'
const COMPLETE_FLAG = 'addressComplete'
const TITLE = 'Update Address'

export default InfoContainer(TITLE, FIELD_NAMES, NEXT_PATH, COMPLETE_FLAG, checkAddress)
