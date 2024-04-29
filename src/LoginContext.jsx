import { createContext, useState } from "react";

export let loginContext = createContext()

const LoginProvider = ({children}) => {

    let [login, setLogin] = useState(false)

    return (
        <loginContext.Provider value={{login, setLogin}}>
            {children}
        </loginContext.Provider>
    )
}

export default LoginProvider