import Form from "../components/Form"
import { Url } from "../constants"

const Path="/register/"

function Register() {
    return <Form route={`${Url}${Path}`} method="register" Links="/login"  statement="Already have an account? " statement2="Login"/>
}


export default Register
