import React from "react"
import SignUp from "./pages/signUp.jsx"
import { Login } from "./pages/login.jsx"
import { Route, Routes } from "react-router-dom"
import { AuthTodo } from "./component/authTodo.jsx"
function App() {


  return (
    <>

<Routes>
  <Route path="/" element={<SignUp/>} >Signup</Route>
  <Route path="/login" element={<Login/>}>Login</Route>
  <Route path="/todo" element={<AuthTodo/>}>Todo Page</Route>
</Routes>
    <AuthTodo/>
     
    </>
    
  )
}


export default App
