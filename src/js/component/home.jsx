import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {
	return (
		<div className="container-fluid p-0">
    <div className="seconds-counter bg-black d-flex justify-content-center align-items-center text-light">
	<i class="fa-solid fa-clock"></i>
      <div >
        <span className="border border-white mx-1">{(props.sexto==null?0:props.sexto)}</span>
        <span className="border border-white mx-1">{props.quinto==null?0:props.quinto}</span>
        <span className="border border-white mx-1">{props.cuarto==null?0:props.cuarto}</span>
        <span className="border border-white mx-1">{props.tercero==null?0:props.tercero}</span>
        <span className="border border-white mx-1">{props.segundo==null?0:props.segundo}</span>
        <span className="border border-white mx-1">{props.primero==null?0:props.primero}</span>
      </div>
    </div>
  </div>
	);
};

export default Home;
