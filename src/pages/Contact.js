import React, {useState} from 'react'
import SignIn from '../components/Signin';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

function signin(){


    return(
        <div>
            <div>
                <h1>Contact Us</h1>
               <h3>For more information about our products </h3>
               <p>Call:<br/>
               08097872345<br/>
               07022348990<br/>
               08132456378</p>
               <h3>For complaints/suggestions</h3>
               <p>Call:<br/>
               08097872345<br/>
               07022348990<br/>
               08132456378</p>
              <h3>Follow us on our social media platforms</h3> 
              <ShoppingCartIcon/> 
            </div>
        </div>
    )

    }

export default signin