import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../config/firebase'; 
import { useNavigate } from 'react-router-dom'; 
import Spinner from './Spinner';
import "../Styles/auth.css"
import logo from "./Logo.png";
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signin = async () => {
    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/gallery');
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
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
            className='input'
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className='input_container'>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>
            <button onClick={signin} disabled={loading}>
                {loading ? <Spinner /> : 'Sign In'}
            </button>
        </div>
    </div>
  );
};

export default Auth;