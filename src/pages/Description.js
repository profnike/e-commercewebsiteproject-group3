import { NewReleasesRounded, PinDropSharp } from "@material-ui/icons"
import{useParams} from 'react-router-dom'
import '../style/Description.css'
import imgs from '../images/index'
import {Link} from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'


function Description(){
    let descriparr=[{Color:"Black,Green,Blue",Size:"XL,L",name:"Skirt", Description:"Long skirt,cotton material",id:1,sroc:imgs.projectA},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:2,sroc:imgs.project2}]
    
    const{id}=useParams()
    let newdescriparr=descriparr.filter((item,index)=>{
      return id==index
    })
    
    
    
    
    return(
        <div>
          <div id="head">
          <Link className="arrow" to='/new-arrivals'><ArrowBackIcon/> </Link>
            <h1 >Product Information</h1></div>
             { newdescriparr.map((item,index) =>
            
   <li key ={item.id} className="descriptionbox">
        
        <div className='img-div'><img className='photo-descr' src={item.sroc} /></div>
        <div className="text">
        <div className="title">Product Name </div>
        {item.name}
           <div className="title">Color</div>
           {item.Color} 
            <div className="title">Description</div>
             {item.Description}
             <div className="title">Sizes</div>
            {item.Size}<br/>
            
            </div>
            
    </li>
    )}
          
         
          </div>
      
    )

    }

export default Description