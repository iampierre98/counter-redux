import React from "react";
import { connect } from "react-redux";
import { deposit, withdraw, restart } from "../../store/amount/action";
import { selectCurrentAmount } from "../../store/amount/reducer";

const mapStateToProps = (state) => {
  return {
    amount: selectCurrentAmount(state),
  };
};

function Counter({ amount, deposit, withdraw, restart }) {
  return (
    <div>
      <h2> ${amount} </h2>
      <button className="withdrawBtn" onClick={() => withdraw()}>-$10</button>
      <button className="restartBtn" onClick={() => restart()}>$0</button>
      <button className="depositBtn" onClick={() => deposit()}>+$10</button>
    </div>
  );
}

export default connect(mapStateToProps, { deposit, restart, withdraw })(Counter);