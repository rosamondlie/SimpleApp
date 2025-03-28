import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {}
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({
        name: 'John'
    });
    const [token, _setToken] = useState(null);
    // disini fungsinya biar klo org udah login, bia ttp terdektsi udah login
    const setToken = (token) => {
        _setToken(token)
        if (token){
            localStorage.setItem('ACCESS_TOKEN', token);
        }
        else{
            localStorage.removeItem(localStorage.getItem('ACCESS_TOKEN'));
        }
    }
    return(
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)