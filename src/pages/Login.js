import React from 'react';
import Template from '../components/Templates';
import LoginImg from "../assets/login.png"

const Login =({setIsLoggedIn}) =>{
    return(
      <Template 
      title="Welcome Back "
      desc1="Build Skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={LoginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}/>
    )
}

export default Login;