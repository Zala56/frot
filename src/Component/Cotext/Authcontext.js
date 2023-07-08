import { createContext } from "react";
import { useState,useContext } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Toastcotext   from "./Toastcotext";

const Authcontext= createContext();



 export const AuthContextProvider=({children})=>{
    const { toast } = useContext( Toastcotext);
    const[user,setuser]= useState(null);
    const navigate = useNavigate();
    const location = useLocation();
  

    useEffect(() => {
        checkUserLoggedIn();
      }, []);


    //check user is login 
    const checkUserLoggedIn = async () => {
        try {
          const res = await fetch(`http://localhost:8000/api/me`, {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          const result = await res.json();
          if (!result.error) {
            if (
              location.pathname === "/login" ||
              location.pathname === "/register"
            ) {
              setTimeout(() => {
                navigate("/", { replace: true });
              }, 500);
            } else {
              navigate(location.pathname ? location.pathname : "/");
            }
            setuser(result);
          } else {
            navigate("/login", { replace: true });
          }

        } catch (err) {
          console.log(err);
        }
      };



    //login request
     const loginuser=async(userData)=>{
        try{
            const res= await fetch(`http://localhost:8000/api/login`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({...userData})
            });
            const result=await res.json();
            if(!result.error)
            {
               
                    localStorage.setItem("token",result.token);
                    setuser(result.user);
                    toast.success(`Logged in ${result.user.name}`);
                    navigate("/", { replace: true });
            }
            else{
                toast.error(result.error);
            }
        }
        catch(err)
        {
            console.log(err);
        }
     }


    //register request
    const registeruser=async(userData)=>{
        try{
            const res= await fetch(`http://localhost:8000/api/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify({...userData})
            });
            const result=await res.json();
            if(!result.error)
            {
                toast.success("user registered successfully! login into your account!");
                navigate("/login", { replace: true });
            }
            else{
                toast.error(result.error);
            }
        }
        catch(err)
        {
            console.log(err);
        }
     }

    return <Authcontext.Provider value={{loginuser,registeruser,user,setuser}}>{children}</Authcontext.Provider>
}


export default Authcontext;
