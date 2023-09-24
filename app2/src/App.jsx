import React,{Suspense} from "react";
import ReactDOM from "react-dom";

import "./index.css";

import Counter from 'app1/Counter';

const App = () => (
  
  <>
    <center><h2>I am micro frontend 2</h2></center>
    <Counter />
  </>

);
ReactDOM.render(<App />, document.getElementById("app"));
