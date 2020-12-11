import {combineReducers } from 'redux'
import iceReducer from './iceCream/iceReducer'
import cakeReducer from './cake/cakeReducer'
import profileReducer from './Profile/profileReducer'


const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream : iceReducer,
	profile : profileReducer
})

export default rootReducer