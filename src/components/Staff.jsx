import React from "react";

function staff(props) {
    return(
        <div style={{color:"grey", textDecoration:"underline black"}}>
            <h1>Name :{props.staffname}</h1>
            <h4>course:{props.course}</h4>
        </div>
    )
}

export default Staff;