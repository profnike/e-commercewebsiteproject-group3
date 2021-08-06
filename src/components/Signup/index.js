import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Container,FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SignupElements'




function SignUp() {

    const [username, setUsername] = useState('');

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    

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

        if(password1 === password2) {
            const same = auth.filter(el=> el.username === username);
            if (same.length===0) {
                auth = [...auth, {"username": username, "password": password1}]
                localStorage.setItem('auth', JSON.stringify(auth));
                localStorage.setItem('userloggedin', username);
                setUsername(' ');
                setPassword1('');
                setPassword2('');
                afterSignup();
                
            } else {
                alert(username + " exists!")
            }

        } else {
            alert("password does not match");
        }
    }

    return (
        <>
          <container>
            <FormWrap>
                <Icon to="/">Zara House</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign up</FormH1>

                         {/* input for username */}
                        <FormLabel htmlFor="for">Username</FormLabel>
                        <FormInput type="text" value={username} onChange = { e => setUsername(e.target.value)} required/>
                        
                        <FormLabel htmlFor="for">Password</FormLabel>                       
                        <FormInput type="password" value={password1} onChange={e=> setPassword1(e.target.value)} required/>
                            
                        {/* confirm password */}
                        <FormLabel htmlFor="for">Confirm Password</FormLabel>
                        <FormInput type="password" value={password2} onChange={e=> setPassword2(e.target.value)} required/>
                        

                        <FormButton type="submit" onClick={handleSignup} >Signup</FormButton>

                    </Form>
                </FormContent>
            </FormWrap>
        </container>  
    </>
)
}

export default SignUp
