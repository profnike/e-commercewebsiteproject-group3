import styled from 'styled-components';



export const HeroContainer = styled.div`
    background: #0c0c00;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    /* Add :before styles */
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right:0;
    bottom: 0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImageBg = styled.img`
    display: flex;
    width: 100%;
    max-width: 100vw;
    height: 100vh;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
    

    
`
