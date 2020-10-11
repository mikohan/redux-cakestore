import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function Items(props) {
  return (
    <div>
      <h2>Items is -- {props.item}</h2>
      <button onClick={props.buyItem}> Buy Items</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFuncion = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFuncion,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
