import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(){
const [name,setName]=useState("")
const [password,setPassword]=useState("")

const handlesubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3034/register',{name,password})
    .then(result=>{console.log(result)
})
    .catch(err=>console.log(err))
}
return (
    <div>
        <div>
            <center><h2>Login</h2></center>
            <br>
            </br>
            
            <form onSubmit={handlesubmit}><center>
                <table>
                    <div>
                <tr>
                    <td>
                    <label htmlFor="UserName">
                        <strong>UserName</strong></label></td>
               
                    <td><input type="text" placeholder="UserName" autoComplete="off"
                    name="UserName" onChange={(e)=> setName(e.target.value)} required/></td>
                    </tr>

                    <tr>
                    <td>
                    <label htmlFor="Password">
                        <strong>Password</strong></label></td>
               
                    <td><input type="text" placeholder="Set Password" autoComplete="off"
                    name="Password" onChange={(e)=> setPassword(e.target.value)} required/></td>
                    </tr>
                    </div>
                </table>
                <div>
                    <br></br>
                <center><button type="submit" className="submit" >Login</button></center>
            </div>
            </center></form>
            <br>
            </br>
            <hr/>   

        </div>
    </div>
);
}

export default Login;
