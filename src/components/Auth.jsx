import React, { useState, useEffect, useRef } from 'react';
import Gallery from './Gallery';
import "../Styles/auth.css"

const Auth = () => {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const [showHome, setShowHome] = useState (false);
    const [show, setShow] = useState(false);
    const localSignUp = localStorage.getItem("signUp"); 
    const localEmail = localStorage.getItem("email"); 
    const localName = localStorage.getItem("name"); 
    const localPassword = localStorage.getItem("password"); 


     useEffect(() => {
        if(localSignUp) {
            setShowHome(true)
        }
        if (localEmail) {
            setShow(true)
        }
    },[localSignUp, localEmail])

    const handleClick = () => {
        if (name.current.value&&email.current.value&&password.current.value) {
            localStorage.setItem("name", name.current.value);
            localStorage.setItem("email", email.current.value);
            localStorage.setItem("password", password.current.value);
            localStorage.setItem("signUp", email.current.value);
            window.alert("Account created sucessfully!");
            window.location.reload();
        }
    }

    const handleSignIn = () => {
        if (email.current.value === localEmail && password.current.value === localPassword) {
            localStorage.setItem("signUp", email.current.value);
            window.location.reload();
        }
        else {
            alert("Please Enter valid credential")
        }
    }


  return (
    <div className='bg_img'>
      {showHome? <Gallery/> :
      (show? 
        <div className='container_two'>
         <div className='container_two_heading'>
          <p>Sign In</p>
        </div>
        <div className='container_two_heading'>
          <h1>Hello {localName}</h1>
        </div>
        <div className='input_container'>
          <label htmlFor="email">E-mail</label>
          <input placeholder='Email' type='email' ref={email} />
        </div>
        <div className='input_container'>
          <label htmlFor="password">Password</label>
          <input placeholder='Password' type='password' ref={password} />
        </div>
        <button onClick={handleSignIn}>Sign In</button> 
      </div>
      :
      <div className='container_two'>
        <div className='container_two_heading'>
          <p>Sign Up</p>
        </div>
        <div className='input_container'>
          <label htmlFor="email">Full Name</label>
          <input placeholder='Name' type='text' ref={name} autoComplete='off' />
        </div>
        <div className='input_container'>
          <label htmlFor="email">E-mail</label>
          <input placeholder='Email' type='email' ref={email} autoComplete='off' />
        </div>
        <div className='input_container'>
          <label htmlFor="password">Password</label>
          <input placeholder='Password' type='password' ref={password} autoComplete='off' />
        </div>
        <button onClick={handleClick}>Sign Up</button> 
      </div>)
      }
    </div>
  );
};

export default Auth;
