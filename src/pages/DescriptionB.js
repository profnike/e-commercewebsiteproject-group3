import { NewReleasesRounded, PinDropSharp } from "@material-ui/icons"
import{useParams} from 'react-router-dom'
import '../style/Description.css'
import imgsB from '../images/second'
import {Link} from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import {LoremIpsum} from 'react-lorem-ipsum'


function DescriptionB(){
    let descriparr=[{Color:"Black,Green,Blue",Size:"XL,L",name:"Short", Description:"Long skirts,cotton material",id:11,sroc:imgsB.project1},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Shirt",Description:"Jacket,cotton material",id:21,sroc:imgsB.project21},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Shirt",Description:"Jacket,cotton material",id:31,sroc:imgsB.project3},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Trouser",Description:"Jacket,cotton material",id:41,sroc:imgsB.project4},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Trouser",Description:"Jacket,cotton material",id:51,sroc:imgsB.project5},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:61,sroc:imgsB.project6},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:71,sroc:imgsB.project7},
   {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Trouser",Description:"Jacket,cotton material",id:81,sroc:imgsB.project8},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jacket",Description:"Jacket,cotton material",id:91,sroc:imgsB.project9},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Shirt",Description:"Jacket,cotton material",id:101,sroc:imgsB.project10},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Shirt",Description:"Jacket,cotton material",id:111,sroc:imgsB.project11},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jeans",Description:"Jacket,cotton material",id:121,sroc:imgsB.project12},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Jeans",Description:"Jacket,cotton material",id:131,sroc:imgsB.project13},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Short",Description:"Jacket,cotton material",id:141,sroc:imgsB.project14},
    {Color:"Gray,Brown,Black,Purple",Size:"M,L", name:"Short",Description:"Jacket,cotton material",id:151,sroc:imgsB.project15},]
    
    const{id}=useParams()
    let newdescriparr=descriparr.filter((item,index)=>{
      return id==index
    })
    
    
    
    
    return(
        <div>
          <div id="head">
          <Link className="arrow" to='/new-arrivals'  onClick={(e)=>{ }} ><ArrowBackIcon/> </Link>
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
            <LoremIpsum avgWordsPerSentence={4}/>
             <div className="title">Sizes</div>
            {item.Size}<br/>
            
            </div>
            
    </li>
    )}
          
         
          </div>
      
    )

    }

export default DescriptionB