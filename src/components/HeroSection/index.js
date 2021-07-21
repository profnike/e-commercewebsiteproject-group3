import React from 'react'
import { HeroContainer, HeroBg, ImageBg } from './HeroElements'
import Image from '../../images/project-image4.jpeg'


const HeroSection = () => {
    return (
       <HeroContainer id= "home">
         <HeroBg>
             <ImageBg src= {Image} type='img '/>
         </HeroBg>
       </HeroContainer>
    )
}

export default HeroSection
