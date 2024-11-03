import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function loginHandle() {
        try {

            const res = await axios.post('http://localhost:3004/api/user/login', { email, password })

            console.log(res.data);

            if (res?.data) {
                alert('login successfull')
                navigate('/todo')
            }


        } catch (error) {
            console.error('Registration error:', error);
      alert('try again');

        }
    }

    return (
        <>
        <div className="login-container">
            <h2>Login page</h2>

            <form onSubmit={(e)=>{e.preventDefault(); loginHandle()}}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                
                </div>

                <div className="input-group">
                   <label htmlFor="password">password</label>
                   <input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                </div>

             <button type="submit" className="register-button">submit</button>
            </form>
        </div>


        </>
    )
}