import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import Loading from "../components/Loading";
import {auth} from '../firebase'

export const AuthContext = createContext();

const AuthProvider = ({children, isAuth}) => {

    const [user, setUser] =useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false)
        })
    }, [])
    if (isAuth) {
        return <Loading/>;
    }

    return (
        <AuthContext.Provider value={{user}}> {children}
        </AuthContext.Provider>
      );   
};

export default AuthProvider;