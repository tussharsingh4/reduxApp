import { applyMiddleware , createStore,} from "redux"
import thunk from 'redux-thunk'
import reducers from "./reducers"

export const store = createStore(reducers,{},applyMiddleware(thunk))  //createstore sare reducers lega, fir inital state, and fir middleware apply kar sakte hai