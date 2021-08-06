import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'



export const HeroContainer = styled.div`
    background: #0c0c00;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 700px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

    /* Add :before styles */
`

export const HeroBg = styled.div`
    position: absolute;
    top: 80px;
    right:0;
    bottom: 0;
    left:0;
    width: 100%;
    height: 100%;
    max-height: 100vh;
    overflow: hidden;
    

    
    @media screen and (max-width: 768px) {
        max-height:100vh;
        height: 100%;
    }

    @media screen and ( max-width: 480px) {
        max-height: 100vh;
        height: 100%;
    }
`

export const ImageBg = styled.img`
    display: flex;
    width: 100%;
    max-width: 100vw;
    max-height: 120vh;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    /* background: black; */
    opacity: 0.5;  
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 40px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 38px;
    }

    @media screen and ( max-width: 480px) {
        font-size: 28px;
    }
`

export const HeroP = styled.p`
    margin-top: 20px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size:16px;
    }
`

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`