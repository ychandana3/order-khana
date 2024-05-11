
import Link from "next/link";
import Logo from "./components/Logo";
import { useState } from "react";
import useOnlineStatus from "./onlineStatus";
import Login from "./components/Login";
export default function Header(){
  console.log("Server");
  // const isOnline = useOnlineStatus();
    return(
      <>
      <div className="flex justify-between items-center bg-yellow-100 shadow-lg m-1">
        <Logo/>
        <ul>
          {/* <li className="inline-block">Online Status: {isOnline?"✅":"🔴"}</li> */}
          
          <Link href = "/" className="p-6">Home</Link>
          <Link href="/about" className="p-6">About</Link>
          <Link href = "/grocery" className="p-6">Grocery</Link>    
          <Link href="/contact" className="p-6">Contact</Link>  
          <Login></Login>
        </ul>
      </div>
      </>
    )
}