
import {Link} from "react-router-dom"
import react, {useState,useEffect}  from "react"
import imgs from '../images/index'

import '../style/About.css'



function About(){


    let arr=[imgs.projectA,
    imgs.project2,
    imgs.project3
    ]
    
return(
    <div className="newBody"  >
        <h1 className='About-head' >About Zara </h1><br/>
       <img className='photo-about'  src= {arr[0]}/>
       <img className='photo-about' src= {arr[1]}/>
       <img className='photo-about' src= {arr[2]}/>
        
    </div>

)
}
export default About