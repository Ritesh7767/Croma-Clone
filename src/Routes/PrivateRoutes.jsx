import { useContext } from "react"
import { IsAuth } from "../Context/AuthContext"
import { loginContext } from "../LoginContext"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({children}) => {

    let {isAuth} = useContext(IsAuth)
    let {login, setLogin} = useContext(loginContext)

    // isAuth ? children : <Navigate to={'/'} />

    console.log(isAuth)

    return isAuth ? children : setLogin(true)
}

export default PrivateRoute