import React from "react";

function Details(props)
{
    return(
        <div style={{color: 'teal', padding:'10px', border:'1px solid black',margin:'5px'}}>
            <h1>Name : {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Course:{props.course}</p>
            <p>Roll number:{props.rolnum}</p>
</div>
    );
}
export default Details;