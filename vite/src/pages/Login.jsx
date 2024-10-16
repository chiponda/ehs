
import Form from "../components/Form"
import { Url } from "../constants"

const Path ="/token/"



function Login() {
   const Method="login"
  
 
   
    return <Form route={`${Url}${Path}`} method={Method} Links="/register"statement="Do not have an account ? " statement2="Register here" />

}

export default Login
 