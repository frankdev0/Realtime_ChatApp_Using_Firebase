import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import {auth} from "../src/components/context/auth"
import AuthProvider from "./context/Auth";
import Profile from "./pages/Profile";
import Private from "./components/Private";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <PrivateRoute exact path='/home' element={<Home/>} />
      <PrivateRoute exact path='/profile' element={<Private/>} /> */}

            <Route exact path="/profile" element={<Profile />} />

            <Route
              exact
              path="/home"
              element={
                <Private isAuth={false}>
                  <Home />
                </Private>
              }
            />

            {/* <Route path='/private' element={<PrivateRoute> <PrivateRoute/></PrivateRoute>}/> */}
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
