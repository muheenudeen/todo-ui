import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function SignUp() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handlerSignUp = async () => {
        try {


            const res = await axios.post('http://localhost:3004/api/user/signup', { name, email, password })
            // console.log(res.data.name);

            if (res?.data) {
                alert('user created ')
                navigate('/login')
            } else {
                alert('account alredy created')
            }

        } catch (error) {
            console.error('Registration error:', error);
            alert('try again');


        }

    }

    return (
        <>
            <div className="register-container">
                <h2>Register</h2>
                <form onSubmit={(e) => { e.preventDefault(); handlerSignUp(); }}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>


        </>
    )

}

export default SignUp