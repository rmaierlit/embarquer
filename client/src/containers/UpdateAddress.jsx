import InfoContainer from './InfoContainer'
import {checkAddress} from '../actions'

const FIELD_NAMES = ['street_address', 'city', 'state', 'zip_code']
const NEXT_PATH = '/'
const COMPLETE_FLAG = 'addressComplete'

export default InfoContainer(FIELD_NAMES, NEXT_PATH, COMPLETE_FLAG, checkAddress)
