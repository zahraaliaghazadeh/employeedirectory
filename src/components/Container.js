// import React from " react"

// function Container(props){
// return <div className="container"></div>
// }
// export default Container


  
import React from "react";

function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default Container;