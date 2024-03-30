"use client";
import Link from "next/link";
import Logo from "./components/Logo";
import { useState } from "react";
import useOnlineStatus from "./onlineStatus";
export default function Header(){
  const [buttonText, setButtonText] = useState("Login"); 
  const isOnline = useOnlineStatus();
  const loginHandler = () =>{
    buttonText === "Login"?setButtonText("Logout"):setButtonText("Login");
  }
    return(
      <>
      <div className="flex justify-between items-center">
        <Logo/>
          <ul>
        
        <Link href = "/" className="p-6">Home</Link>
        <Link href="/about" className="p-6">About</Link>
            <Link href="/contact" className="p-6">Contact</Link>  
            <Link href = "/" className="p-6"></Link>    
        <button className="" onClick={loginHandler}>{buttonText}</button>
        </ul>
      </div>
      </>
    )
}