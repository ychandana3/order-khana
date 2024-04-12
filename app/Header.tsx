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
      <div className="flex justify-between items-center bg-yellow-100 shadow-lg m-1">
        <Logo/>
        <ul>
          <li className="inline-block">Online Status: {isOnline?"✅":"🔴"}</li>
          <Link href = "/" className="p-6">Home</Link>
          <Link href="/about" className="p-6">About</Link>
          <Link href = "/grocery" className="p-6">Grocery</Link>    
          <Link href="/contact" className="p-6">Contact</Link>  
          <button className=" p-6" onClick={loginHandler}>{buttonText}</button>
        </ul>
      </div>
      </>
    )
}