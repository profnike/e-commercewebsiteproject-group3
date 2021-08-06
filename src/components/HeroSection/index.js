import React, {useState} from 'react'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Image from '../../images/female/project-image4.jpeg';

import { Button } from '../ButtonElement';
import {Link} from "react-router-dom"

// import { Button } from '../ButtonElement';
// import {NavBtn} from '../Navbar/NavbarElements'




const HeroSection = () => {
  const [hover, setHover] = useState(false)
  const [click, setClick] = useState(false)

  const onClick = () => {
    setClick(!click);
  }

  const onHover = () => {
    setHover(!hover);
  }
    return (
       <HeroContainer id= "home">
         <HeroBg>
             <ImageBg src= {Image} type='img '/>
         </HeroBg>
         <HeroContent>
           <HeroH1>Fashion Trends Just For You</HeroH1>
           <HeroP>
              Clothes for Everyday, Style for Every Possibility.
           </HeroP>
           <HeroBtnWrapper>

            

            <Link to="/new-arrivals" id="shop-button"><button className = "herobtn" to="/new-arrivals">
               {/* onClick ={onClick} onMouseEnter ={onHover} onMouseLeave= {onHover} primary='true' dark='true' */}
              Shop Now 
               {/* {hover ? <ArrowForward /> : <ArrowRight />} {onClick}  */}
            </button></Link>
           </HeroBtnWrapper>
         </HeroContent>
       </HeroContainer>

    )
}

export default HeroSection
