import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Authcontext from './Cotext/Authcontext'
import Toastcotext from "./Cotext/Toastcotext"




function Register() {
  const { toast } = useContext(Toastcotext);
    const{registeruser}=useContext(Authcontext);
    const[credential,setcredential]=useState({
        name:"",
        email:"",
        password:"",
        confirmpassword:""
    })

    console.log(credential);
    
    const handlerfunction=(event)=>{
        const {name,value}=event.target;

        setcredential({...credential,[name]:value})
    }

    const submithandler=(event)=>{
        event.preventDefault();
      
    
        if (
          !credential.email ||
          !credential.password ||
          !credential.confirmpassword
        ) {
          toast.error("please enter all the required fields!");
          return;
        }
        if (credential.password !== credential.confirmpassword) {
          toast.error("password do not match!");
          return;
        }
        const userdata={...credential,confirmpassword:undefined}
        registeruser(userdata);
        
    }

  
  return (
 
    <>
    
    <form onSubmit={submithandler}>
      <div class="form-group row">
        <h1>Register</h1>
     
     <div class="form-group">
     <label for="exampleInputEmail12" class="form-label mt-4">name</label>
     <input type="text"
      class="form-control"
       id="exampleInputEmail12"
       name="name" 
       required
       value={credential.name}
       onChange={handlerfunction}
       aria-describedby="emailHelp" 
        placeholder="Enter the name">
   </input>
     <label for="exampleInputEmail1" class="form-label mt-4">Email address</label>
     <input type="email"
      class="form-control"
       id="exampleInputEmail1"
       name="email" 
       required
       value={credential.email}
       onChange={handlerfunction}
       aria-describedby="emailHelp" 
        placeholder="Enter email">
   </input>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
   </div>
   <div class="form-group">
     <label for="exampleInputPassword1" class="form-label mt-4">Password</label>
     <input type="password"
      class="form-control"
      name="password"
      required
      value={credential.password}
      onChange={handlerfunction}
      id="exampleInputPassword12"
      placeholder="Password">
       </input>
   </div>
   <div class="form-group">
     <label for="exampleInputPassword1" class="form-label mt-4">Confirm Password</label>
     <input type="password"
      class="form-control"
      required
      name="confirmpassword"
      value={credential.confirmpassword}
      onChange={handlerfunction}
      id="exampleInputPassword12"
      placeholder="Confirm Password">
       </input>
   </div>
  <input type="submit" value="Register" className='btn btn-primary  my-3'/>
   <p>Already Have a Account ?
       <Link to="/login">Sign In</Link>
       </p>
      </div>
  
      </form>
   </>
  )
}

export default Register