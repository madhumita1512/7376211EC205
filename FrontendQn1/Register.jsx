import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
const Register =()=>{
    const [email,setEmail]= useState()
    const [accesscode,setAccesscode] = useState()
    // const [error,setError] = useState()
    const navigate =useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password : password})
        .then(result => {
            console.log(result)
            if(result.data == "Success"){
                navigate('/home')
            }
        })
        .catch(err => console.log(err))}
return (
    <>
      <form onSubmit={handleSubmit} > 
                <div className="container">
                    <h2>Login</h2>
                <div className="email">
                <label htmlFor="e-mail">E-mail</label>
                <input type="text" name="e-mail" id="email" placeholder="e-mail"onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div className="password">
                    <label htmlFor="password">ccesscode</label>
                    <input type="text" name="password" id="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)}/>
                </div>
                <button type="submit">Submit</button>
                </div>

            </form>
    </>
)
}
export default Register