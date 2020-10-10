import React from 'react';
import { useSelector } from 'react-redux';

function HookCakeContainer(props) {
  const numOfCakes = useSelector((state) => state.numOfCakes);
  return (
    <div>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button>Bye cake</button>
    </div>
  );
}

export default HookCakeContainer;
