import React from 'react';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';
import {FaShippingFast} from 'react-icons/fa'
import {GiLargeDress} from 'react-icons/gi'
import {FaPercentage} from 'react-icons/fa'


const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon>
                        <FaShippingFast />
                    </ServicesIcon>
                    <ServicesH2>Nationwide Delivery</ServicesH2>
                    <ServicesP> Fast delivery nationwide within 24-48hrs. We work with the best delivery agencies in each town to ensure that you're 100% happy.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon>
                        <GiLargeDress />
                    </ServicesIcon>
                    <ServicesH2>Explore Creativity</ServicesH2>
                    <ServicesP>We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our various categories containing various sizes of trendy outfits. It's totally up to you! </ServicesP>    
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon>
                        <FaPercentage />
                    </ServicesIcon>
                    <ServicesH2>Unbeatable Discount</ServicesH2>
                    <ServicesP> Enjoy the best and unbeatable deals all year round with up to 90% discounts on our various outfits.</ServicesP>       
                </ServicesCard>
            </ServicesWrapper>    
        </ServicesContainer>
    );
}

export default Services;
