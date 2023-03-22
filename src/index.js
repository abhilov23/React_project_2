//var React = require("react"); //for react module, to define react in JS file
import React from "react";
//var ReactDOM = require("react-dom"); //for react-dom module
import ReactDOM from "react-dom";

//ReactDOM.render(<h1>Hello World!</h1>, document.getElementById("root")); //here we are using render methord in react, what you want to show, where you want to show
// so basically react uses javascript ES6 version which is way advance and better incompare to pure javascript
//Basically when we use this render methord, it only takes single HTML element that meansyou cannot multiple html elements in that.
//but you can embed multiple HTML elements in a single <div> to use that all ex:
ReactDOM.render(
  <div>
    <h1>Hello man,</h1>
    <p>abhilov this side</p>
  </div>,
  document.getElementById("root")
);
