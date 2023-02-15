import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch({ type: 'plus' })}>+</button>
      <button onClick={() => dispatch({ type: 'minus' })}>-</button>
    </div>
  );
}

export default App;
