import React from 'react'
import { useDispatch } from 'react-redux'
import {bindActionCreators} from 'redux'
import {actionCreators} from '../state/index'//ye action creators action create kane me help karenge

const Shop = () => {
    const dispatch = useDispatch() //dispatch hook hai
    const actions = bindActionCreators(actionCreators, dispatch) //automatically behind the scenes
    return (
        <div>
            <h3>Deposit/withdraw</h3>
            <button className="btn btn-primary mx-2" onClick={()=>{actions.withdrawMoney(100)}}>-</button>
            Update Balance
            <button className="btn btn-primary mx-2" onClick={()=>{actions.depositMoney(100)}}>+</button>
        </div>
    )
}

export default Shop
//amount lega and deposit hoga
//arrow function use karna padega jabbhi argument hote hai to arrow function ke andar call karna hai