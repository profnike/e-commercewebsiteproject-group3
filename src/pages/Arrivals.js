
import image from '../images/female/project-image2.jpg'
import {Link} from "react-router-dom"
import react, {useState,useEffect}  from "react"
import imgs from '../images/index'
import imgsB from '../images/second'


import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import { LinearScale } from '@material-ui/icons'

function  Newarrivals(){
   
    const[count, setCount]=useState(0)
    const[cart, setCart]=useState([])
    const[select, setSelect]=useState([])
    const[add, setAdd]=useState("Add to ShoppingCart")
    const[toggle, setToggle]=useState(false)
    const[style, setStyle]=useState({})


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


    let arr=[{ itemname:"Skirt",price:"$20",id:1,sroc:imgs.projectA},
    { itemname:"Jacket",price:"$10",id:2,sroc:imgs.project2},
    { itemname:"Jacket",price:"$25",id:3,sroc:imgs.project3},
    { itemname:"Jacket",price:"$20",id:4,sroc:imgs.project4},
    { itemname:"Skirt",price:"$40",id:5,sroc:imgs.project5},
    { itemname:"Skirt",price:"$60",id:6,sroc:imgs.project6},
    { itemname:"Jean Trouser",price:"$10",id:7,sroc:imgs.project7},
    { itemname:"Top",price:"$15",id:8,sroc:imgs.project8},
    { itemname:"Top",price:"$10",id:9,sroc:imgs.project9},
    { itemname:"Top",price:"$10",id:10,sroc:imgs.project10},
    { itemname:"Shirt",price:"$20",id:11,sroc:imgs.project11},
    { itemname:"Jean Trouser",price:"$30",id:12,sroc:imgs.project12},
    { itemname:"Pant Trouser",price:"$30",id:13,sroc:imgs.project13},
    { itemname:"Gown",price:"$25",id:14,sroc:imgs.project14},
    { itemname:"Gown",price:"$25",id:15,sroc:imgs.project15},
    ]

    let arrB=[{ itemname:"Short",price:"$20",id:11,sroc:imgsB.project1},
    { itemname:"Shirt",price:"$10",id:21,sroc:imgsB.project21},
    { itemname:"Shirt",price:"$25",id:31,sroc:imgsB.project3},
    { itemname:"Trouser",price:"$20",id:41,sroc:imgsB.project4},
    { itemname:"Trouser",price:"$40",id:51,sroc:imgsB.project5},
    { itemname:"Jacket",price:"$60",id:61,sroc:imgsB.project6},
    { itemname:"Jacket",price:"$10",id:71,sroc:imgsB.project7},
    { itemname:"Trouser",price:"$15",id:81,sroc:imgsB.project8},
    { itemname:"Jacket",price:"$10",id:91,sroc:imgsB.project9},
    { itemname:"Shirt",price:"$10",id:101,sroc:imgsB.project10},
    { itemname:"Shirt",price:"$20",id:111,sroc:imgsB.project11},
    { itemname:"Jeans",price:"$30",id:121,sroc:imgsB.project12},
    { itemname:"Jeans",price:"$30",id:131,sroc:imgsB.project13},
    { itemname:"Short",price:"$25",id:141,sroc:imgsB.project14},
    { itemname:"Short",price:"$25",id:151,sroc:imgsB.project15},
    ]


    

    function Goup(){
       
        window.scrollTo({top:0, behavior:'smooth'})
    }

    let cartarr=[]
    let selectedarr=[]
    let indelement;
    let   newarr=cartarr.slice()
    function addToCart(item,index){
       
        
        
        
        
        if(add==="Add to ShoppingCart"){
            
            cartarr=cart.slice()
   
   cartarr.push(item)
    
    setCart(cartarr.slice())
    
    selectedarr=select.slice()
    selectedarr.push(item)
    setSelect(selectedarr.slice())
    
    setCount(+1)
    let elem=cartarr[index] 
     
    indelement=index 
    
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




    

            
            
            
        

        if((localStorage.getItem("shopping-number")==null) )
           
            {
                localStorage.setItem("shopping-number",JSON.stringify(cartarr));
             
          }
            else{
                localStorage.setItem("shopping-number",JSON.stringify(cartarr));
                
            }
       
    }

    function removeFromCart(item,index){
        
        console.log(newarr)
       let newsarr= JSON.parse(localStorage.getItem("shopping-number"));
       console.log(newsarr)
       cartarr=newsarr.slice()
       let removeind=index
       if(removeind===indelement){
        cart.length=cartarr.length
       }
      
    }
    


    
    

return(
    <div id="arrivals " >
            
        <div className="arrival-head">
        <h1 className='head-welcome' >Welcome to Zara Gallery</h1><br/>
        
       
         
                       <div className="links">

                       <Link to="/" className="Linkers-arrival">Home</Link>
                          <Link to="/about" className="Linkers-arrival">About</Link>
                        
                       
                          
                        
                        
                          <Link to="/services" className="Linkers-arrival">Services</Link>
                        
                        

                          </div>
                          <div className='arrival-header'>
                    
                    <Link className="cart" to='/checkout'>My ShoppingCart &nbsp; <ShoppingCartIcon/> {cart.length}</Link>
                    </div>
                  
           </div>
           <div className="body-arrival">
           <div className="left-arrival">
               <h1 id="Zara-head">Zara</h1>
               <h3 id="catg">Category</h3>
               <p><a href="#male">Male</a></p>
               <p><a href="#female">Female</a></p></div>
           <div className="right-arrival">
           <p className="sections" id="female">Female Section</p>
           
        <div  className="newBody">
            
       <ul>
      { arr.map((item,index) =>
    <li key ={index} className="box">
        
        <img className='photo' src={item.sroc} />
        
           <div>{item.itemname}</div> 
            
            {item.price}<br/>
            
    
            <button className="basket" style={style} onClick={(e)=>{ addToCart(item,index); }}>{add}</button>
            
            <Link to={"/description/" +index} ><button className="info">More info...</button></Link>
    </li> 
    )}
    
    </ul>
   
    
    
    </div>
    <p className="sections" id="male">Male Section</p>
    <ul>
      { arrB.map((item,index) =>
    <li key ={item.sroc}  className="box">
        
        <img className='photo' src={item.sroc} />
        
           <div>{item.itemname}</div> 
            
            {item.price}<br/>
            
    
            <button className="basket"  onClick={(e)=>{ addToCart(item,index); }}>{add}</button>
            
            <Link to={"/descriptionB/" +index} ><button className="info">More info...</button></Link>
    </li> 
    )}
    
    </ul>
        
        
    <button className="goup" onClick={(e)=>{ Goup() }}>Go up</button>
        <div className="foot-arrivals">Developed by Zara</div>
    </div>
    </div>
    </div>

)
}
export default Newarrivals