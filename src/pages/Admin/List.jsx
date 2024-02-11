import React from "react";
import ListDetails from "./ListDetails.jsx";
function List({ data,fetch}){

    return (
    <div className="container">
    {data.map((el,i)=>{
    return(<ListDetails car={el}  key={i}  fetch={fetch}/>)
    })}
    </div>
    )
}
export default List;
