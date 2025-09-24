import React,{Component} from "react";

class Carclass extends Component
{
    constructor (props)
    {
        super(props);

    }
    render()
    {
        return(
        <div style={{border:"2px solid green", margin:"10px", padding:"10px"}}>
        <h2> Class Component</h2>
        <p><b>Brand:</b>{this.props.brand}</p>
        <p><b>Model:</b>{this.props.Model}</p>
        <p><b>Type:</b>{this.props.type}</p>
        <p><b>Color:</b>{this.props.color}</p>
        
        </div>
    );
    }

}
export default Carclass;