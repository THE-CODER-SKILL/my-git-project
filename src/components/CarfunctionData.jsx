import React, {useState} from "react"

function Carfunction(props)
{
    return(
        <div style={{border:"2px solid",margin:"10px", padding:"10px"}}>
            <h2>Function Component</h2>
            <p><b>Brand:</b>{props.brand}</p>
            <p><b>Model:</b>{props.model}</p>
            <p><b>Type:</b>{props.type}</p>
            <p><b>Color:</b>{props.color}</p>
            

        </div>
    );

}
export default Carfunction;
