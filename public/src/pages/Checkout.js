import { FaBasketballBall } from "react-icons/fa"
import Subtotal from './Subtotal'
import react, {useState,useEffect}  from "react"
import '../style/Checkout.css'
import {Link} from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
function Checkout(){
    let newer=[];
    //const[newer, setNewer]=useState([])
    if((localStorage.getItem("shopping-item")===null)){
        localStorage.setItem("shopping-item",JSON.stringify(newer));
    }
    let newsitem= JSON.parse(localStorage.getItem("shopping-item"));
  
    const[style, setStyle]=useState({color:"white"})
    const[newsitemer, setNewsitemer]=useState(newsitem )
    const[header, setHeader]=useState("" )
    const[head, setHead]=useState("You have "+newsitem.length+" item(s)" )


    
    //if(newsitem.length===0){
        //setHeader("You have no item in your cart. Buy one. " )
        //setHead("Your Shopping cart is empty")
        
   // }
    
    

    let finds;

    let pricearr=newsitem.map((priceval,priceind)=>{
        let rep= priceval.price.replace("$","")
            return rep.replace(",","")
    })
    console.log(pricearr)


    let newpricearr=pricearr.map((value)=>{
        let newprice = parseFloat(value) 
        return newprice
    })
    console.log(newpricearr)
    let total=0;
    for(let i=0; i<newpricearr.length;i++){
       
        
        total+=newpricearr[i]
       //total+=val[j]
       console.log(total)
   
        

    }
    console.log(total)
    
    function removeFromCart(item,index){
        
        console.log(newsitem)
       // console.log(newsitem)
        //newsitem.splice(index,1)
        let elem=newsitem[index]
        let priceitem=item.price
        let priceA=priceitem.replace("$","")
        let priceB=priceA.replace(",","")
        total-=priceB
        console.log(total)
        console.log(priceitem)
      newer=newsitem.filter((itemnew,indexnew)=>{
        console.log(indexnew)
        console.log(index)
        finds=newsitem[index]
        
            return index!=indexnew
            //return item!=itemnew
        })
        setHead("You have " + newer.length + " item(s)")
        console.log(newer)
        
        if((localStorage.getItem("shopping-item")!=null) )
           
         {
            localStorage.setItem("shopping-item",JSON.stringify(newer));
               
           }

           if((localStorage.getItem("shopping-item")!=null) )
           
          {      let shopind= JSON.parse(localStorage.getItem("shopping-number"));
          console.log(finds)
          //shopind.indexOf(finds)
           shopind.splice(finds,1)
           localStorage.setItem("shopping-numbers",JSON.stringify(shopind));
           localStorage.setItem("shopping-number",JSON.stringify(shopind));
               console.log(shopind)
               
            }
           else{
                
                
           }
           setNewsitemer(newer)
        //newsitem=newer
    }
    


    return(
        <div className="contain">
             <div className="head-area">
             <Link className="arrow-checkout" to='/new-arrivals'><ArrowBackIcon/> </Link><h2>{head}</h2>
           
       <p>{header}</p>
       
       
       <p>Total Price:${total}</p>
       <button><Subtotal/></button><br/>
      
       </div>
       <ul>
      { newsitemer.map((item,index) =>
    <li key ={index} className="box-check" id="check">
        
        <img className='photo-check' src={item.sroc} />
        
           <div>{item.itemname}</div> 
            
            {item.price}<br/>
            <div id="color">
            <select className="selection" name="color" id="dropdown">
                <option value="">Select color preference</option>
                <option value="Black">Black</option>
                <option value="Green">Green</option>
                <option value="Blue">Blue</option>
                
            </select></div>
            <div id="size">
            <select className="selection" name="size" id="dropdown">
                <option value="">Select appropriate size</option>
                <option value="XL">XL</option>
                <option value="L">L</option>
                
                
            </select></div>
    
            <button style={style} className="remove" onClick={(e)=>{ removeFromCart(item,index); }}>Remove from ShoppingCart</button>
            
    </li> 
    )}
   
    </ul>
    <div className="foot-checkout"> Developed by Zara</div>
    
       </div>
    )

    }

export default Checkout