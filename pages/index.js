import  loginStyles  from '../css/login.module.css';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';
// import logo from '../public/static/logo.jpg';
import signupStyles from '../css/signup.module.css';

import React from 'react';
import SignUp from './components/SignUp';

export default function Login() {
  const { user } = useUser();
  const router = useRouter()
  const as = "/home"

  // if (user) {
  //   console.log(user);   
  //   console.log(user.email);
  //   console.log(user.name);
  //   router.push({pathname:"/home",  query: {email: user.email, name:user.name}}, as);
  // }
  return(
    <section className={loginStyles.container}>
      <div className={loginStyles.loginSideLeft}>
        <img className = {loginStyles.largeIcon} src = {'https://cdn.discordapp.com/attachments/711984521872146527/903184762557059072/claramentes_logo.PNG'}/>
      </div>
        <div className={loginStyles.loginSideRight}>
          <div className = {loginStyles.welcomeSign}>
              <h1 className = {loginStyles.h1}>Welcome to Claramentes</h1>
              <p className = {loginStyles.p}>Your online academic hub</p>
          </div>
          <div className={loginStyles.loginBox}>
            <button className={loginStyles.loginButton}>
              <a className = {loginStyles.loginText} href="/signup"> Login </a>
            </button>
            <button className={loginStyles.logoutButton}>
              <a className = {loginStyles.logoutText} href="/api/auth/logout"> Logout </a>
            </button>
          </div>
        </div>
    </section>
    
    // <section className = {signupStyles.container}>
    //         <div className = {signupStyles.margin}/>
    //         <div className = {signupStyles.signUpBox}>
    //             <h1 className = {signupStyles.title}>Register</h1>
    //             <SignUp/>
    //         </div>
    //         <div className = {signupStyles.margin}/> 
    //     </section>
  )
}