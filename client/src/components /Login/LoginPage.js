import {useState} from "react"
import LoginForm from "./LoginForm"
import SignForm from "../Signup/SignForm"

function LoginPage({onLogin}){
    const [show, setShow] = useState(true)
    
    return (

       show ? (
        <>
        <LoginForm onLogin = {onLogin} />
        Dont have an account?
        <button onClick = {() => setShow(false)}>Sign UP</button>
        </>
       ) : (
        <>
        <SignForm onLogin = {onLogin} />
        Already have an account?
        <button onClick = {() => setShow(true)}>Log In</button>
        </>
       )
    );
}
export default LoginPage
