import React, {useState} from 'react'
import SignIn from '../components/Signin';
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import '../style/Contact.css'
import {Link} from "react-router-dom"

function signin(){


    return(
        <div>
            <div className="head-contact">
           <Link id="arrow" to="/"><ArrowBackIcon/></Link>
                <h1 id="head-contacts">Contact Us</h1>
            </div>
            
                <div className="contact">
               <div className="body">
               <h3 className="subhead">For more information on our products </h3>
               <h4>Call:</h4>
               <p>08097872345<br/>
               07022348990<br/>
               08132456378</p>
               <h3 className="subhead">For complaints/suggestions</h3>
               <h4>Call:</h4>
               <p>
               08097872345<br/>
               07022348990<br/>
               08132456378</p>
              <h3 className="subhead">Follow us on our social media platforms</h3> 
              <div className="icon">
             <a href="#"> <FacebookIcon/></a>
             <a href="#" id="insta"><p> <  InstagramIcon/></p></a>
             <a href="#"><TwitterIcon/> </a>
              </div>
              </div>
            </div>
        </div>
    )

    }

export default signin