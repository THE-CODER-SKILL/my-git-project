import Carfunction from "./CarfunctionData";
import Carclass from"./CarfunctionData";

function App()
{
    return (
        <div style={[padding:"20px"]}>
            <h1>Car Example -Function vs Class Component</h1>
            <Carfunction brand="ford" model="Ecosport" type="petrol"/>
            <Carclass brand="ford" model= "ecosport" type="petrol" color="blue"/>
                   </div>
    )
}


































export default App;