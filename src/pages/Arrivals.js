
import image from '../images/project-image2.jpg'
import {Link} from "react-router-dom"
import react, {useState,useEffect}  from "react"
import imgs from '../images/index'


import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

function  Newarrivals(props){
    const[count, setCount]=useState(0)
    const[cart, setCart]=useState([])
    const[select, setSelect]=useState([])
    const[add, setAdd]=useState("Add to ShoppingCart")
    const[toggle, setToggle]=useState(false)
    const[style, setStyle]=useState({color:"red",display:"none"})


    useEffect(()=>{
       
       
         
         let shoppingitem= JSON.parse(localStorage.getItem("shopping-item"));
         let shoppingitems= JSON.parse(localStorage.getItem("shopping-items"));
        let newsitem= JSON.parse(localStorage.getItem("shopping-numbers"));
        let news= JSON.parse(localStorage.getItem("shopping-number"));
        if((localStorage.getItem("shopping-numbers")!=null) )
           
          {
               cartarr=newsitem
               setCart(news)
               
            }

            if((localStorage.getItem("shopping-item")!=null) )
           
         {
               selectedarr=shoppingitem
              setSelect(shoppingitem)
           }
           
        console.log(newsitem)
     
 },[])


    let arr=[{ itemname:"Skirt",price:"$20,000",id:1,sroc:imgs.projectA},
    { itemname:"Jacket",price:"$50,000",id:2,sroc:imgs.project2},
    { itemname:"Jacket",price:"$20,000",id:3,sroc:imgs.project3},
    { itemname:"Jacket",price:"$20,000",id:4,sroc:imgs.project4},
    { itemname:"Jacket",price:"$20,000",id:5,sroc:imgs.project5},
    { itemname:"Jacket",price:"$20,000",id:6,sroc:imgs.project6},
    { itemname:"Jacket",price:"$20,000",id:7,sroc:imgs.project7},
    { itemname:"dress",price:"$20,000",id:8,sroc:imgs.project8},
    { itemname:"dress",price:"$20,000",id:9,sroc:imgs.project9},
    { itemname:"dress",price:"$20,000",id:10,sroc:imgs.project10},
    { itemname:"dress",price:"$20,000",id:11,sroc:imgs.project11},
    { itemname:"dress",price:"$20,000",id:12,sroc:imgs.project12},
    { itemname:"dress",price:"$20,000",id:13,sroc:imgs.project13},
    { itemname:"dress",price:"$20,000",id:14,sroc:imgs.project14},
    { itemname:"dress",price:"$20,000",id:15,sroc:imgs.project15},
    ]

    let cartarr=[]
    let selectedarr=[]
    let indelement;
    let   newarr=cartarr.slice()
    function addToCart(item,index){
       
      
        
        //count=cartarr.length
        //cartarr.includes(index)===false
        //add==="Add to ShoppingCart"
        
        if(add==="Add to ShoppingCart"){
            alert('klo')
            cartarr=cart.slice()
   //cartarr.push(index)
   cartarr.push(item)
    console.log(cartarr)
    setCart(cartarr.slice())
    //setAdd("Added to the cart")
    console.log(cart) 
    selectedarr=select.slice()
    selectedarr.push(item)
    setSelect(selectedarr.slice())
    console.log(selectedarr)
    setCount(+1)
    let elem=cartarr[index] 
    console.log(index)
    console.log(cartarr) 
    console.log(cartarr[index])
    //indelement=cartarr.indexOf(elem) 
    indelement=index 
    console.log(elem)
    console.log(indelement) 
    //setStyle({display:"flex"})
    setToggle(!toggle)
    let vall=cartarr[index]
    if(cartarr[index])




            if((localStorage.getItem("shopping-numbers")==null) )
           
          {
               localStorage.setItem("shopping-numbers",JSON.stringify(cartarr));
               localStorage.setItem("shopping-number",JSON.stringify(cart));
               
            }
           else{
                localStorage.setItem("shopping-numbers",JSON.stringify(cartarr));
                localStorage.setItem("shopping-number",JSON.stringify(cart));
                
           }


           if((localStorage.getItem("shopping-item")==null) )
           
          {
               localStorage.setItem("shopping-item",JSON.stringify(selectedarr));
               localStorage.setItem("shopping-items",JSON.stringify(select));
               
            }
           else{
                localStorage.setItem("shopping-item",JSON.stringify(selectedarr));
                localStorage.setItem("shopping-items",JSON.stringify(select));
                
           }


           if((localStorage.getItem("shopping-numbas")==null) )
           
          {
               localStorage.setItem("shopping-numbas",JSON.stringify(cartarr));
               
            }
           else{
                localStorage.setItem("shopping-numbas",JSON.stringify(cartarr));
                
           }

}


if((localStorage.getItem("indelement")==null) )
           
          {
               localStorage.setItem("indelement",JSON.stringify(indelement));
               
            }
           else{
                localStorage.setItem("indelement",JSON.stringify(indelement));
                
           }



if(toggle===80){
    //indelement=cartarr.indexOf(index)
    alert('kj')
   let ans= cartarr.filter((items,indexes)=>{
        return index!=indelement
    })
    //cartarr.splice(indelement,1)
    console.log(cartarr)
    console.log(index)
    console.log(cartarr)
   
    
    setAdd("Add to ShoppingCart")
    setCount(-1)
   cart.length=cartarr.length  
    console.log(cart.length)
    setStyle({display:"flex"})
}
    
    
//toggle=!toggle    
            
            
            
        

        if((localStorage.getItem("shopping-number")==null) )
           
            {
                localStorage.setItem("shopping-number",JSON.stringify(cartarr));
             
          }
            else{
                localStorage.setItem("shopping-number",JSON.stringify(cartarr));
                
            }
        //alert('hello')
        console.log(cartarr.length)
        console.log(index+1)
        console.log(cartarr)
        console.log(selectedarr)
    }

    function removeFromCart(item,index){
        setStyle({display:"none"})
        console.log(newarr)
       let newsarr= JSON.parse(localStorage.getItem("shopping-number"));
       console.log(newsarr)
       cartarr=newsarr.slice()
       let removeind=index
       if(removeind===indelement){
        cart.length=cartarr.length
       }
      //let indelements=cartarr.indexOf(index) 
       console.log(indelement)
    }
    


    
    

return(
    <div  >
        <div className="arrival-head">
        <h1 className='head'>Welcome to Zara's Gallery</h1>
        <div className='arrival-head'>
                    
           <Link className="cart" to='/checkout'>My ShoppingCart &nbsp; <ShoppingCartIcon/> {cart.length}</Link>
           </div>
         
                       <div className="links">
                          <Link to="/about" className="Linkers">About</Link>
                        
                       
                          <Link to="/" className="Linkers">Home</Link>
                        
                        
                          <Link to="/services" className="Linkers">Services</Link>
                        
                        
                          <Link to="/signup" className="Linkers">Sign Up</Link>
                          </div>
                  
           </div>
           
        <div  className="newBody">
       <ul>
      { arr.map((item,index) =>
    <li key ={item.id} className="box">
        
        <img className='photo' src={item.sroc} />
        
           <div>{item.itemname}</div> 
            
            {item.price}<br/>
            
    
            <button className="basket" onClick={(e)=>{ addToCart(item,index); }}>{add}</button>
            <button style={style} onClick={(e)=>{ removeFromCart(item,index); }}>Remove from basket</button> 
            <Link to={"/description/" +index} ><button className="info">More info...</button></Link>
    </li> 
    )}
    
    </ul>
    
    </div>
        <Link to= "/" style={{fontSize:"23px"}}>Go Back</Link>
        <div className="foot-arrivals"></div>
    </div>

)
}
export default Newarrivals