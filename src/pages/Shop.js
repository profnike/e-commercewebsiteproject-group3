import { CancelPresentationOutlined, More } from "@material-ui/icons"
import react, {useState,useEffect}  from "react"
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import '../style/Shop.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Spinner from 'react-bootstrap/Spinner'
import {Link} from "react-router-dom"


function Shop() {
  const[result, setResult]=useState([])
  const[buttext, setButtext]=useState("Add")
  const[loading, setLoading]=useState(false)
  const[cartcontent, setCartcontent]=useState([])


   
//else{localStorage.setItem("cartcontent",JSON.stringify(cartcontent));}

let cart=[]
  useEffect(()=>{
       
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=>{console.log(json)
    setResult(json)
    setLoading(true)
    console.log(json)
    if((localStorage.getItem("shoppingstuffs")!==null)){
      localStorage.setItem("shoppingstuffs",JSON.stringify(json));
    }
    else{localStorage.setItem("shoppingstuffs",JSON.stringify(json));}
    })


    
if((localStorage.getItem("cartcontent")!==null)){
  setCartcontent(JSON.parse(localStorage.getItem("cartcontent")))
  //cart=cartcontent
  cart=cartcontent.slice()
  //console.log(cartcontent)
}

  //console.log(vals.description)


},[])
let desip;

function added(val,index){
  //alert('hi' )
 result.map((vals,indexs)=>{
    
  if(index===indexs){
     desip=val
     cart=cartcontent.slice()
     cart.push(val)
    
    setCartcontent(cart)
    if((localStorage.getItem("cartcontent")===null)){
      localStorage.setItem("cartcontent",JSON.stringify(cart));
  }
  else{localStorage.setItem("cartcontent",JSON.stringify(cart));}
    //console.log(vals.description)
  }
   return desip
 })}
function more(){}


let show=result.map((val,index)=>{
  //console.log(val.rating.rate)
return val

})
    return (
      <div className="checktest">
        {loading ? 
         
        (
          
        
        <div>
          <div className="shophead">
          <div className="shopTitle">
            <p>Zara House</p>
            <Link to="cart" className="Link"><div className="cartItem">
            <ShoppingCartIcon />
            <p>{cartcontent.length}</p>
            </div></Link>
            
          </div>
          
          <div className="welcome"><h2>Welcome to Zara House Gallery</h2></div>
          </div>
          <div className="rowDiv">
        <Row xs={2} md={4} className="g-4">
        {result.map((val,index)=>{
  //console.log(val.rating.rate)
return <Col


className="colum" key={index} style={{}}>
  <Card className="cardcontain" style={{ width: '18rem' }}>
  <Card.Img variant="top" className="cardimg" style={{ objectFit:"cover",height:"250px",maxWidth:"250px",alignSelf:"center" }} src={val.image} />
  <Card.Body className="cardbody">
    <Card.Title className="title">{val.title}</Card.Title>
    <Card.Text>
      ${val.price}
    </Card.Text>
    <div>
    <Link to={"/details/" +val.id}><Button  variant="primary">More</Button></Link>
    </div>
    <div>
    <Button onClick={(e)=>{ added(val,index); }} variant="primary">Add to cart</Button>
    </div>
  </Card.Body>
</Card>
  
</Col>



})}

</Row>
</div>
</div>)

: (<Spinner animation="border" id="spin" 
      />)
    
      
    }
    </div>
      
      
    );
  }

  export default Shop;