import styled from 'styled-components'
// import {FaShippingFast} from 'react-icons/fa'

export const ServicesContainer = styled.div`
    margin-top: 0;
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #010606;
   

    @media screen and (max-width: 760px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height:1300px;
    }
`

export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    margin-left: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 40px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns:1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.div`
    height: 180px;
    width: 120px;
    margin-bottom: 10px;
    font-size: 2.5rem;
`

// export const FaShippingFast = styled(FaShippingFast)`
//     font-size: 2.5rem;
// `

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 45px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

