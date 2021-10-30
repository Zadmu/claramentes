import signupStyles from '../css/signup.module.css';
import SignUp from './components/SignUp';

export default function Signup ({email, name, userData}) {
    return(
        <section className = {signupStyles.container}>
            <div className = {signupStyles.margin}/>
            <div className = {signupStyles.signUpBox}>
                <h1 className = {signupStyles.title}>Register</h1>
                <SignUp/>
            </div>
            <div className = {signupStyles.margin}/> 
        </section>
    )
}


// Signup.getInitialProps = async ({query: {email, name, userData}}) => {
//     return {email, name, userData}
//   }
