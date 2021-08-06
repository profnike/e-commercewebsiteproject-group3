import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';
import {Container,FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text} from './SigninElements'




function SignIn() {

    const [username, setUsername] = useState('');

    const [password, setPassword] = useState('');

    

    const history = useHistory();

    const afterSignin = () => {
        alert('Login Successful');
        history.push("/new-arrivals");
    }


    let auth = JSON.parse(localStorage.getItem('auth'));

  const handleSignin = ()=>{
       if (auth === null) {
           alert('No user found');
       }

       const same = auth.filter(el => el.username === username);

       if(same.length!==0){
        //    auth = [...auth, {'username': username, 'password': password}];
           if (same[0].password === password) {
            localStorage.setItem('userloggedin', username);
            setUsername('');
            setPassword('');
            afterSignin()
           }else {
               alert('Wrong password');
           }
  
       } else {
           alert("User does not exist");
       }
   }

    return (
        <>
          <container>
            <FormWrap>
                <Icon to="/">Zara House</Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1>Sign In</FormH1>

                         {/* input for username */}
                        <FormLabel htmlFor="for">Username</FormLabel>
                        <FormInput type="text" value={username} onChange = { e => setUsername(e.target.value)} required/>
                        
                        <FormLabel htmlFor="for">Password</FormLabel>                       
                        <FormInput type="password" value={password} onChange={e=> setPassword(e.target.value)} required/>
                        
                        <FormButton type="submit" onClick={handleSignin} >Sign in</FormButton>

                    </Form>
                </FormContent>
            </FormWrap>
        </container>  
    </>
)
}

export default SignIn
