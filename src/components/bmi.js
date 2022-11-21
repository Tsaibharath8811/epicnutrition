import Bmicalculator from "./bmicalculator";
import ImageAndTextExample from "./bmichart";


function Bmi(){
    return(
    <div style={{marginTop:"2%"}}>
      <div class="card" style={{width:"23rem",height:"270px",margin:"2%"}}>
      <Bmicalculator/>
    </div>
  
    
    
    <ImageAndTextExample/>
    </div>
    )
}

export default Bmi;