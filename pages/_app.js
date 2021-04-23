<<<<<<< HEAD
//import '../styles/globals.css';
=======
// import '../styles/globals.css'
>>>>>>> 9d826c0 (Fixed Auth0)
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}