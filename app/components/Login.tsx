  'use-client'
  import { useState } from "react";
  export default function Login(){
    const [buttonText, setButtonText] = useState("Login");  
    const loginHandler = () =>{
    buttonText === "Login"?setButtonText("Logout"):setButtonText("Login");
    }
    return(
        <>
            <button className=" p-6" onClick={loginHandler}>{buttonText}</button>
        </>
    )
  }