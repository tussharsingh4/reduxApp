export const depositMoney =(amount) =>{
    return (dispatch => { //yaha ek aise function ko return karenge jo ek function lega and return karega ek aisa function jo dispatch ko lega and use call karega
        dispatch({
            type:'deposit',
            payload: amount
        })
    })
}

export const withdrawMoney =(amount) =>{
    return (dispatch => {
        dispatch({
            type:'withdraw',
            payload: amount
        })
    })
}