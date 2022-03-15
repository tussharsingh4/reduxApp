import {combineReducers} from 'redux'
import amountReducer from './amountReducer'

const reducers = combineReducers({ //filhal to ek reducer hai, par aur bhi ho sakte hai
    amount: amountReducer,

})

export default reducers