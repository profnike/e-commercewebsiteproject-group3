import '../style/Cart.css'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import react, {useState,useEffect}  from "react"
import {Link} from "react-router-dom"

function Cart() {
    let cartarr=[]
    let itemvalue;
    let itemindex;
    const[cartitems,setCartitems]=useState([])
    const[display,setDisplay]=useState({display:"none"})
   
    useEffect(()=>{
        if((localStorage.getItem("cartcontent")!==null)){
            setCartitems(JSON.parse(localStorage.getItem("cartcontent")))}

            let carty=JSON.parse(localStorage.getItem("cartcontent"))
            if(carty.length===0){
              setDisplay({display:"none"})
            }
            else{setDisplay({display:"inline"})}

        },[])
       
        
        let newprice;
        let pricearr=cartitems.map((priceval,priceind)=>{
          newprice=priceval.price
             
             return newprice
      })
      console.log(pricearr)

      let total=0;
      let totalnew=0
    for(let i=0; i<pricearr.length;i++){

       totalnew+=pricearr[i]
      total=totalnew.toFixed(2)
    } 
       
      
   
        

   
    console.log(total)
       
        let cartRemain=[]
        function remove(val,index){
           itemvalue=val
           itemindex=index
           let itemprice=val.price
           totalnew-=itemprice
           total=totalnew.toFixed(2)
            cartRemain=cartitems.filter((vals,indexs)=>{
              
                    let indexremove=cartitems.indexOf(val)
                   
                    console.log(indexremove)
                    console.log(index)
                    return indexs!=index
                

            })
            
            
           
          
            setCartitems(cartRemain)
            
            if((localStorage.getItem("cartcontent")!==null)){
                localStorage.setItem("cartcontent",JSON.stringify(cartRemain))};
        
        
                if(cartRemain.length===0){
                  setDisplay({display:"none"})
                }
                else{setDisplay({display:"inline"})}
        
              }


        function clear(){
            cartRemain=[]
            setCartitems(cartRemain)
            total=0;
            if((localStorage.getItem("cartcontent")!==null)){
                localStorage.setItem("cartcontent",JSON.stringify(cartRemain))}
                if(cartRemain.length===0){
                  setDisplay({display:"none"})
                }
                else{setDisplay({display:"inline"})}
        }
    return (
      <div className="Cart">
 
 <div className="shophead">
          <div className="shopHead">
            <div>
            <p className="zaratitle">Zara House</p>
            </div>
            <div>
            <div className="cartItem">
           <p>You have </p>
            <p>{cartitems.length} item(s)</p>
            </div>
            <div className="payment" style={display} >
            <p>Total:${total}</p>
            
             <Button onClick={(e)=>{ clear(itemvalue,itemindex); }}  variant="primary">Clear items</Button>
          
            <div><Button  variant="primary">Proceed to payment</Button></div>
            </div>
            
            
            </div>
          </div>
          
        
          </div>
  <div className="rowDivs">
        <Row xs={1}  md={2} className="g-4">
        {cartitems.map((val,index)=>{
  //console.log(val.rating.rate)
return <Col


className="columcard" key={index} style={{}}>
  <Card className="cardcontainer" style={{ width: '18rem' }}>
  <Card.Img variant="top" className="cardimg" style={{ objectFit:"cover",height:"250px",maxWidth:"250px",alignSelf:"center" }} src={val.image} />
  <Card.Body className="cardbody">
    
    
    
  </Card.Body>
</Card>
<div className="cardtext">
    <p>{val.category}</p>
    <p>{val.title}</p>
    <p>${val.price}</p>
    <Button onClick={(e)=>{ remove(val,index); }}>Remove</Button>
  
</div>


</Col>



})}

</Row>
      </div>
    
      </div>
      
    );
  }
  
  export default Cart;