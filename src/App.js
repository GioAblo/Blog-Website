import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { CreatePost } from './pages/CreatePost';
import { useState } from 'react';
import {signOut} from "firebase/auth"
import { auth } from './firebase-config';
 

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false);
      window.location.pathname = "/Login"
    })
  }

  return (
     <Router>
      <Link to="/">Home</Link> 
      {!isAuth ? <Link to="Login">Login</Link> : (
        <>
          <button onClick={signUserOut}>Log out</button>
          <Link to="CreatePost">CreatePost</Link>
        </>
      )}
       
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth}/>} />
        <Route path="/CreatePost" element={<CreatePost isAuth={isAuth}/>} />
      </Routes>
     </Router> 
  );
}

export default App;
