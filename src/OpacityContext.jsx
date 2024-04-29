import { createContext, useState } from "react";

export let Opacity = createContext()

const OpacityProvider = ({children}) => {
    let [opacity, setOpacity] = useState(false)

    return (
        <Opacity.Provider value={{opacity, setOpacity}}>
            {children}
        </Opacity.Provider>
    )
}

export default OpacityProvider