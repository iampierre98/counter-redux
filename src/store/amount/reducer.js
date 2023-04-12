const initialState = {
    amount: 0,
}

export default (state = initialState, action) => {
    switch (action.type){
        case "DEPOSIT_MONEY":{
            return {
                ...state,
                amount: state.amount + action.payload
            }
        }
        case "WITHDRAW_MONEY":{
            return {
                ...state,
                amount: state.amount + action.payload
            }
        }
        case "RESTART_MONEY":{
            return {
                ...state,
                amount: state.amount * action.payload
            }
        }
        default: return state
    }   
}

export const selectCurrentAmount = (state) => {
    return state.amountReducer.amount;
}