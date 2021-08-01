import { NewReleasesRounded, PinDropSharp } from "@material-ui/icons"
import{useParams} from 'react-router-dom'
import '../style/Description.css'
import imgs from '../images/index'
import {Link} from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {LoremIpsum} from 'react-lorem-ipsum'


function Description(){
    let descriparr=[{Color:"Black,Green,Blue",Size:"XL,L",name:"Skirt", Description:"Long skirt,cotton material",id:1,sroc:imgs.projectA},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:2,sroc:imgs.project2},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:3,sroc:imgs.project3},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:4,sroc:imgs.project4},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Skirt",Description:"Jacket,cotton material",id:5,sroc:imgs.project5},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Skirt",Description:"Jacket,cotton material",id:6,sroc:imgs.project6},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jeans",Description:"Jacket,cotton material",id:7,sroc:imgs.project7},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Top",Description:"Jacket,cotton material",id:8,sroc:imgs.project8},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Gown",Description:"Jacket,cotton material",id:9,sroc:imgs.project9},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:10,sroc:imgs.project10},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:11,sroc:imgs.project11},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:12,sroc:imgs.project12},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:13,sroc:imgs.project13},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:14,sroc:imgs.project14},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:15,sroc:imgs.project15},]
    
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
            
   <li key ={index} className="descriptionbox">
        
        <div className='img-div'><img className='photo-descr' src={item.sroc} /></div>
        <div className="text">
        <div className="title">Product Name </div>
        {item.name}
           <div className="title">Color</div>
           {item.Color} 
            <div className="title">Description</div>
            <LoremIpsum avgWordsPerSentence={4}/>
             <div className="title">Sizes</div>
            {item.Size}<br/>
            
            </div>
            
    </li>
    )}
          
         
          </div>
      
    )

    }

export default Description