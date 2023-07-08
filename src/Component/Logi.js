import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Authcontext from './Cotext/Authcontext'
import Toastcotext from "./Cotext/Toastcotext"


function Logi() {
  const { toast } = useContext(Toastcotext);
    const {loginuser}=useContext(Authcontext);
    const[credential,setcredential]=useState({
        email:"",
        password:"",
    })
    console.log(credential);

    const handlerfunction=(event)=>{
        const {name,value}=event.target;

        setcredential({...credential,[name]:value})
    }

    const submithandler=(event)=>{
        event.preventDefault();
        if (!credential.email || !credential.password) {
          toast.error("please enter all the required fields!");
          return;
        }
        loginuser(credential);
    }

  return (
   <>
     <form onSubmit={submithandler}>
       <div class="form-group row">
        <h2>Login</h2>
      
      <div class="form-group">
      <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
      <input type="email"
       class="form-control"
        id="exampleInputEmail1"
        name="email" 
        value={credential.email}
        onChange={handlerfunction}
        aria-describedby="emailHelp" 
        required
         placeholder="Enter email">
    </input>
         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
      <input type="password"
       class="form-control"
       name="password"
       value={credential.password}
       onChange={handlerfunction}
       id="exampleInputPassword1"
       required
       placeholder="Password">
        </input>
    </div>
   <input type="submit" value="Login" className='btn btn-primary  my-3'/>
    <p>Don't Have a Account ?
        <Link to="/register">Create a Account</Link>
        </p>
       </div>
   
       </form>
    </>
  )
}

export default Logi