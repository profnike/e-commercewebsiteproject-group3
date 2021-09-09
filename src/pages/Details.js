import{useParams} from 'react-router-dom'
import react, {useState,useEffect}  from "react"
import Card from 'react-bootstrap/Card'
import '../style/Details.css'

function Details() {

    const[results, setResults]=useState([])
    const[itemcart, setItemcart]=useState([])
    const{id}=useParams()

    let newarr=[]
    newarr=JSON.parse(localStorage.getItem("shoppingstuffs"));
    console.log(newarr)
    let realv;
    let value=newarr.map((val,index)=>{
        if(index+1==id){
        realv=val
        console.log(index)
        }
        return val
    })
    
    
    
    

    return (
      <div className="Details">
        <h2 className="infoHead">Product Info</h2>
       <div className="divrow"> 
  <div>
     
  <Card className="cardcontainde" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={realv.image} />
  
</Card>
</div>
<div>
    <p>{realv.description}</p>
</div>
</div> 

      </div>
      
    );
  }
  
  export default Details;