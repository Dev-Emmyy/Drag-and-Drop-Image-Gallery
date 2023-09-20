import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../config/firebase'; 
import { useNavigate } from 'react-router-dom'; 
import "../Styles/auth.css"
import logo from "./Logo.png";
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const signin = async () => {
    setEmailError('');
    setPasswordError('');

    if (email === '') {
      setEmailError('Please input an email address');
      return;
    }

    if (password === '') {
      setPasswordError('Please input a password');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/Gallery');
    } catch (error) {
      if (error.code === 'auth/wrong-password') {
        setPasswordError('Incorrect password. Please try again.');
      } else if (error.code === 'auth/user-not-found') {
        setEmailError('User not found. Please check your email.');
      } else {
        console.error(error);
      }
    }
  };


  return (
    <div className='bg_img'>
      <div className='container_one'>
        <img src={logo} alt='logo' width={200} />

        <div className='heading_container'>
          <p className='heading_title'>Don't have an account?</p>
          <div className='heading_p'>
            <p>Register to access all the features of this service.</p>
            <p>You can also follow the socials below.</p>
          </div>
          <div className="profile">
            <a href="https://www.linkedin.com/in/ugochukwu-emmanuel-ba798a25a/">
              <AiFillLinkedin
                color="fff"
                fontSize={24}
                cursor="pointer"
                fontWeight="bolder"
              />
            </a>
            <a href="https://twitter.com/9Gunna9">
              <AiOutlineTwitter
                color="fff"
                fontSize={24}
                fontWeight="bolder"
              />
            </a>
            <a href="https://github.com/Dev-Emmyy">
              <AiFillGithub
                color="fff"
                fontSize={24}
                cursor="pointer"
                fontWeight="bolder"
              />
            </a>
          </div>
        </div>
      </div>

      <div className='container_two'>
         <div className='container_two_heading'>
          <p>Sign In</p>
        </div>
        <div className='input_container'>
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <div className='input_container'>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="error">{passwordError}</p>}
        </div>
        <button onClick={signin}>Sign In</button> 
      </div>
    </div>
  );
};

export default Auth;
