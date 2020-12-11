import React from 'react'
import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import iceReducer from './ice/iceReducer'
import userReducer from '../Users/userReducer'

const rootReducer = combineReducers({
	cake: cakeReducer,
	ice: iceReducer,
	users: userReducer
	})

export default rootReducer