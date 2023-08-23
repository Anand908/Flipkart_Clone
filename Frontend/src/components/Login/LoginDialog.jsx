import React, { useState } from 'react';
import './Login.css';
import { Dialog, TextField, Button, styled } from '@mui/material';
import { authenticateSignUp, authenticateLogin } from '../../Service/api';
import { useContext } from 'react';
import { DataContext } from '../Context/Context';

const LoginDialog = ({open, setOpen}) => {

    const Loginbutton = styled(Button)`
        text-transform: none;
        background: #fb641b;
        color: #fff;
        font-weight: 600;
        height: 48px;
        width: 100%;
        border-radius: 2px;
        margin: 20px 0 10px 0;
        &:hover {
            background: #fb641b;
            color: #fff;
        }
    `
    const Requestbutton = styled(Button)`
        text-transform: none;
        background: #fff;
        color: #2874f0;
        font-weight: 600;
        height: 48px;
        width: 100%;
        border-radius: 2px;
        box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
        margin: 20px 0;
    `
    const accountInitial = {
        login: {
            loginView: true,
            heading: 'Login',
            subHeading: 'Get access to your Orders, Wishlist and Recommendations'
        },
        signup: {
            loginView: false,
            heading: "Looks like you're new here!",
            subHeading: 'Sign up with your mobile number to get started'
        }
    }

    const signupInitialValues = {
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        password: '',
        phone: ''
    }

    const [signup, setSignup] = useState(signupInitialValues);
    const onSInputChange = (e) =>{
        setSignup({...signup, [e.target.name]: e.target.value});
        console.log("Sign Up ",signup);
    }

    const signUpUser = async (event) => {
        event.preventDefault();
        await authenticateSignUp(signup).then(
            (response) => {
                setOpen(false);
                setAccount(signup.firstName);
            },
            (error) => {
                setToggle(accountInitial.login);
            });
    }

    const loginInitialValues = {
        userName: '',
        password: ''
    }
    const [login, setLogin] = useState(loginInitialValues);
    const onLInputChange = (e) => {
        setLogin({...login, [e.target.name]: e.target.value});
    }
    const [error, setError] = useState(false);
    const onLogin = async (event) => {
        event.preventDefault();
        await authenticateLogin(login).then(
            (response) => {
                if(response.status === 200) {
                    setOpen(false);
                    setAccount(response.data.firstName);
                }
                else {
                    setError(true);
                }
            },
            (error) => {
                setToggle(accountInitial.login);
            });
    }

    const {setAccount} = useContext(DataContext);

    const [newAccountPageToggle, setToggle] = useState(accountInitial.login);

    return ( 
        <Dialog open={open} onClose={() => setOpen(false)} PaperProps={{sx: {maxWidth: 'unset'}}}>
            <div className="LoginContainer">
                <div className="imageContainer">
                    <h5>{newAccountPageToggle.heading}</h5>
                    <p>{newAccountPageToggle.subHeading}</p>
                </div>
                {
                    newAccountPageToggle.loginView ?
                        <div className="formContainer">
                            <form onSubmit={onLogin}>
                                <TextField className='inputField' variant='standard' label='Enter Username' name='userName' onChange={onLInputChange} required/>
                                <TextField className='inputField' variant='standard' type='password' label='Enter Password' name='password' onChange={onLInputChange} required/>
                                {error && <h5>Please enter valid username password</h5>}
                                <p>By continuing, you agree to Flipkart's <span>Terms of Use</span> and <span>Privacy Policy.</span></p>
                                <Loginbutton type='submit'>Login</Loginbutton>
                                <span>OR</span>
                                <Requestbutton>Request OTP</Requestbutton>
                            </form>
                            <p className='newaccount' onClick={() => setToggle(accountInitial.signup)}>New to Flipkart? Create an account</p>
                        </div>
                    :
                        <div className="formContainer">
                            <form onSubmit={signUpUser}>
                                <TextField className='inputField' variant='standard' label='Enter First Name' name='firstName' onChange={(e) => onSInputChange(e)} required/>
                                <TextField className='inputField' variant='standard' label='Enter Last Name' name='lastName' onChange={(e) => onSInputChange(e)} required/>
                                <TextField className='inputField' variant='standard' label='Enter Username' name='userName' onChange={(e) => onSInputChange(e)} required/>         
                                <TextField className='inputField' variant='standard' label='Enter Email' name='email' onChange={(e) => onSInputChange(e)} required/>   
                                <TextField className='inputField' variant='standard' type='password' label='Enter Password' name='password' onChange={(e) => onSInputChange(e)} required/>
                                <TextField className='inputField' variant='standard' label='Enter Phone' name='phone' onChange={(e) => onSInputChange(e)} required/>
                                <Loginbutton type='submit'>Continue</Loginbutton>
                                <Requestbutton onClick={() => setToggle(accountInitial.login)}>Existing User? Log in</Requestbutton>
                            </form>
                        </div>    
                }
            </div>
        </Dialog>
     );
}
 
export default LoginDialog;