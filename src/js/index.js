//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
let counter=0
function aumentarContador(){

console.log(counter.toString()[counter.toString().length - 6])
counter++

ReactDOM.render(<Home 
    primero={counter.toString()[counter.toString().length - 1]}
    segundo={counter.toString()[counter.toString().length - 2]}
    tercero={counter.toString()[counter.toString().length - 3]}
    cuarto={counter.toString()[counter.toString().length - 4]}
    quinto={counter.toString()[counter.toString().length - 5]}
    sexto={counter.toString()[counter.toString().length - 6]}
    />, document.querySelector("#app"));
}
setInterval(aumentarContador,1)

