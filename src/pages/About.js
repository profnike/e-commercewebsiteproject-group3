
import {Link} from "react-router-dom"
import react, {useState,useEffect}  from "react"
import imgs from '../images/index'
import {LoremIpsum} from 'react-lorem-ipsum'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import '../style/About.css'



function About(){


    let arr=[imgs.projectA,
    imgs.project2,
    imgs.project3
    ]
    
return(
    <div >
        <div className='About-div'>
         <Link className="arrow-about" to='/'><ArrowBackIcon/> </Link>
        <h1 className='About-head' >About Zara </h1><br/>
        </div>
        <div  className="aboutBody" >
        <div className="founders">
            <h2 className="second-head">Founders of Zara</h2>
      <div className="founderlist"> <div className="photo-div"><img className='photo-about'  src={arr[0]}/></div><p className="foundername"><LoremIpsum avgWordsPerSentence={1}/></p></div>
       <div className="founderlist"><div className="photo-div"><img className='photo-about' src= {arr[1]}/></div><p className="foundername"><LoremIpsum avgWordsPerSentence={1}/></p></div>
       <div className="founderlist"><div className="photo-div"><img className='photo-about' src= {arr[2]}/></div><p className="foundername"><LoremIpsum avgWordsPerSentence={1}/></p></div>
       
       </div>
       <div className="about-text">
           <LoremIpsum p={10}/>
       </div>
       </div>
    </div>

)
}
export default About