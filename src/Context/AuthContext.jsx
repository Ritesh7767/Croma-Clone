import { createContext, useState } from "react";

export let IsAuth = createContext()

const AuthProvider = ({children}) => {

    let [isAuth, setIsAuth] = useState(false)

    return (
        <IsAuth.Provider value={{isAuth, setIsAuth}}>
            {children}
        </IsAuth.Provider>
    )
}

export default AuthProvider