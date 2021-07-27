
import image from '../images/project-image2.jpg'
import {Link} from "react-router-dom"
import react, {useState,useEffect}  from "react"
import imgs from '../images/index'

function  Newarrivals(){
    let arr=[{ itemname:"dress",price:"$20,000",id:1,sroc:imgs.projectA},
    { itemname:"dress",price:"$50,000",id:2,sroc:imgs.project2},
    { itemname:"dress",price:"$20,000",id:3,sroc:imgs.project3},
    { itemname:"dress",price:"$20,000",id:4,sroc:imgs.project4},
    { itemname:"dress",price:"$20,000",id:5,sroc:imgs.project5},
    { itemname:"dress",price:"$20,000",id:6,sroc:imgs.project6},
    { itemname:"dress",price:"$20,000",id:7,sroc:imgs.project7},
    { itemname:"dress",price:"$20,000",id:7,sroc:imgs.project8},
    { itemname:"dress",price:"$20,000",id:7,sroc:imgs.project9},
    { itemname:"dress",price:"$20,000",id:7,sroc:imgs.project10},
    { itemname:"dress",price:"$20,000",id:7,sroc:imgs.project11},
    { itemname:"dress",price:"$20,000",id:7,sroc:imgs.project12},
    { itemname:"dress",price:"$20,000",id:7,sroc:imgs.project13},
    { itemname:"dress",price:"$20,000",id:7,sroc:imgs.project14},
    { itemname:"dress",price:"$20,000",id:7,sroc:imgs.project15},
    ]


    

return(
    <div  >
        <div  className="newBody">
       <ul>
      { arr.map((item,index) =>
    <li key ={item.id} className="box">
        
        <img className='photo' src={item.sroc} />
        
           <div>{item.itemname}</div> 
            {item.itemname}<br/>
            {item.price}<br/>
            
    
            <div className="basket">Add to basket</div> 
    
    </li> 
    )}
    
    </ul>
    
    </div>
        <Link to= "/" style={{fontSize:"30px"}}>Go Back</Link>
    </div>

)
}
export default Newarrivals