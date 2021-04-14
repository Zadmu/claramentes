import  loginStyles  from '../css/login.module.css';
import { useUser } from '@auth0/nextjs-auth0';
import { useRouter } from 'next/router';

import React from 'react';

export default function Login() {
  const { user } = useUser();
  const router = useRouter()
  const as = "/home"

  if (user) {
    console.log(user);   
    console.log(user.email);
    console.log(user.name);
    router.push({pathname:"/home", query: {email: user.email, name:user.name}}, as);
  }
  return(
    <section className={loginStyles.container}>
      <div className={loginStyles.loginSideLeft}>
        {/* <img className={loginStyles.loginSplashImage} src="https://3toh891af6rf1cn1po1ecevj-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/web-stock-online-learning-b-x-1024.jpg"></img> */}
      </div>
        <div className={loginStyles.loginSideRight}>
          <div className={loginStyles.loginBox}>
            <button className={loginStyles.loginButton}>
              <a href="/api/auth/login"> Login </a>
            </button>
            <button className={loginStyles.loginButton}>
              <a href="/api/auth/logout"> Logout </a>
            </button>
          </div>
        </div>
    </section>
  )
}