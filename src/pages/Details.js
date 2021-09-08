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
    
    console.log(realv)
    //let  describeitem;
    //setItemcart(describeitem)
    //console.log(describeitem)
   
   //useEffect(()=>{
       
        //fetch('https://fakestoreapi.com/products/')
        //.then(res=>res.json())
        //.then(json=>{console.log(json)
        //setItemcart(json)
        
       // })
      // describeitem= JSON.parse(localStorage.getItem("shoppingstuffs"));
      //console.log(describeitem)
        
    //setItemcart(describeitem)
   //console.log(itemcart)
    
   // },[])
   
    console.log(id)
    //let selected;
    //console.log(describeitem)
    //let items=itemcart.filter((val,index)=>{
        //if(val.id==id){
        // selected= val
       // }
        //return val.id==id
       // return val
    //})
    //console.log(items)
    

    return (
      <div className="Details">
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