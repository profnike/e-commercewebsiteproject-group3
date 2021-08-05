import React, {useState} from 'react'
import { HeroContainer, HeroBg, ImageBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Image from '../../images/female/project-image4.jpeg';
import { Button } from '../ButtonElement';




const HeroSection = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
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

            

             <Button to="signup" onMouseEnter ={onHover} onMouseLeave= {onHover} primary='true' dark='true'>

               Shop Now {hover ? <ArrowForward /> : <ArrowRight />}
             </Button>
           </HeroBtnWrapper>
         </HeroContent>
       </HeroContainer>

    )
}

export default HeroSection
