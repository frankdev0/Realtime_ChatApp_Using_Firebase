import React, { createContext } from 'react'

export const GlobalContext = createContext
const GlobalState = ({children}) => {

    const [auth, setAuth] = useState()
    const [user, setUser] = useState("")
  return (
    <GlobalContext.Provider value={{auth, setAuth, user, setUser}}>
{children}
    </GlobalContext.Provider>
  )
}

export default GlobalState