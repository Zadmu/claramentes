export default function Signup ({email, name, userData}) {
    return(
        <div>
            <h1> {userData} </h1>
            <h1> {email} </h1>
            <h1> {name} </h1>
        </div>
    )
}


Signup.getInitialProps = async ({query: {email, name, userData}}) => {
    return {email, name, userData}
  }