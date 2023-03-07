import React, {createContext} from 'react'
// import { AuthContext } from '../context/Auth'
import {useNavigate, Outlet} from 'react-router-dom'

const PrivateRoute = ({isAuth}) => {
const navigate = useNavigate()
//    const AuthContext = createContext();
  return (
     !isAuth ? navigate ('/login') : <Outlet/>
    

  )
}

export default PrivateRoute;