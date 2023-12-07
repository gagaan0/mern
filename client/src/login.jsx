import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast,ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function Login(){
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const Navigate = useNavigate()

    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3006/log',{password,email})
        .then(result=>
            {
                console.log(result)
            if(result.data==='success'){
                Navigate('/home')
            }
            else{
                toast.error('Login Failed')
            }
        })
        .catch(err=>console.log(err))

    }

    return (
        
        <div>
            <br/>
            <br/>
            <br/>
            <div>
                <div>
                    <table align="center">
                    <tr>
                        <td><h1>Login</h1></td>
                   
                        <td><marquee><h1>Here!</h1></marquee></td>
                        </tr>
                    </table>
                </div>
                
                <br>
                </br>
                
                <form onSubmit={handlesubmit}><center>
                    <table>
                        <div>
                         <tr>
                        <td>
                        <label htmlFor="Email">
                            <strong>Email</strong></label></td>
                   
                        <td><input type="text" placeholder="Enter Email" autoComplete="off"
                        name="Email" onChange={(e)=> setEmail(e.target.value)} required/></td>
                        </tr>
                        <tr>
                        <td>
                        <label htmlFor="Password">
                            <strong>Password</strong></label></td>
                   
                        <td><input type="text" placeholder="Set Password" autoComplete="off"
                        name="Password" onChange={(e)=> setPassword(e.target.value)} required
                        /></td>
                        </tr>
                        </div>
                        <div>
                            <br>
                            </br>
                        <center><button type="submit" className="submit">Login</button></center>
                </div>
                    </table>
                </center></form>
                <hr/>
                </div>
                </div>
    );
}

export default Login;
