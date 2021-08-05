import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Container,FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SignupElements'
import '../../style/Signup.css'




function SignUp() {


    

    const [username, setUsername] = useState('');
    const [stylealert, setStylealert] = useState({});
    const [email, setEmail] = useState('');
    

    

    const history = useHistory();

    const afterSignup = () => {
        alert('Your account has been created successfuly.');
        history.push("/");
    }


    let auth = JSON.parse(localStorage.getItem('auth'));

    const handleSignup = () => {
        if(auth === null){
            auth = [];
        }
        if((username==="")||(email==="")){
            setStylealert({display:"flex"})
            alert("incomplete input")
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

        
    }
}

    return (
        <>
          <container>
             
              <div className="box-alert" style={stylealert}>Incomplete input!
               <button onClick={(e)=>{  }}>OK</button></div>
            <FormWrap>
                <Icon to="/">Zara House</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign up</FormH1>

                         {/* input for username */}
                        <FormLabel htmlFor="for">Name</FormLabel>
                        <FormInput type="text" value={username} onChange = { e => {setUsername(e.target.value); setStylealert({display:"none"})}} required/>
                        
                       
                        <FormLabel htmlFor="for">Email</FormLabel>                       
                        <FormInput type="email" name="email" value={email} onChange={e=> {setEmail(e.target.value);setStylealert({display:"none"})}} required/>
                        
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
