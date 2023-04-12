const deposit = () => {
    return {
        type: "DEPOSIT_MONEY",
        payload: 10
    };
};

const withdraw = () => {
    return {
        type: "WITHDRAW_MONEY",
        payload: -10
    };
};

const restart = () => {
    return{
        type: "RESTART_MONEY",
        payload: 0
    }
}

export { deposit, withdraw, restart }