import React from 'react'
import ReactDOM from "react-dom";
import Counter from './Counter';

const App = () => {
  return (
    <>
      <Counter/>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
