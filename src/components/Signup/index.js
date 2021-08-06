import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Container,FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SignupElements'
import '../../style/Signup.css'
import {Link} from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'




function SignUp() {


    

    const [username, setUsername] = useState('');
    const [stylealert, setStylealert] = useState({});
    const [stylexist, setStylexist] = useState({});
    const [stylecomplete, setStylecomplete] = useState({});
    const [email, setEmail] = useState('');
    

    

    const history = useHistory();

    const afterSignup = () => {
        setStylecomplete({display:"flex"})
        //alert('Your account has been created successfuly.');
       setTimeout(function(){history.push("/")},1000);
    }


    let auth = JSON.parse(localStorage.getItem('auth'));

    const handleSignup = (e) => {
        e.preventDefault()
        if(auth === null){
            auth = [];
        }
        if((username==="")||(email==="")){
            setStylealert({display:"flex"})
            
        }
        else{

        
            const same = auth.filter(el=> el.username === username);
            if (same.length===0) {
                auth = [...auth, {"username": username, "email": email}]
                localStorage.setItem('auth', JSON.stringify(auth));
                localStorage.setItem('userloggedin', username);
                setUsername(' ');
                setEmail('');
                
                afterSignup();
                
            } 
            else{setStylexist({display:"flex"})}

        
    }
}

    return (
        <>
          <container>
             
              <div className="box-alert" style={stylealert}>Incomplete input!
              </div>
              <div className="box-create" style={stylecomplete}>Your account has been created successfuly.<br/>
              </div>
              <div className="box-exist" style={stylexist}>This account  already exists!<br/>
              <Link to="/"><button>OK</button></Link>
              </div>
            <FormWrap>
            <Icon to="/">Zara House</Icon>

                <FormContent>
                   <Link to="/" className="iconform"><ArrowBackIcon/></Link> 
                    <Form action="#">
                        <FormH1>Sign up</FormH1>

                         {/* input for username */}
                        <FormLabel htmlFor="for">Name</FormLabel>
                        <FormInput type="text" value={username} onChange = { e => {setUsername(e.target.value); setStylealert({display:"none"});setStylexist({display:"none"})}} required/>
                        
                       
                        <FormLabel htmlFor="for">Email</FormLabel>                       
                        <FormInput type="email" name="email" value={email} onChange={e=> {setEmail(e.target.value);setStylealert({display:"none"});setStylexist({display:"none"})}} required/>
                        
                        {/* confirm password */}
                        
                        

                        <FormButton type="submit" onClick={handleSignup} >Signup</FormButton>

                    </Form>
                </FormContent>
            </FormWrap>
        </container>  
    </>
)
}

export default SignUp
