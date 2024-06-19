"use client";
import Link from "next/link";
import Logo from "./components/Logo";
import { useState } from "react";
import useOnlineStatus from "./onlineStatus";
import Login from "./components/Login";
export default function Header() {
  console.log("Server");
  const isOnline = useOnlineStatus();
  return (
    <>
      <div className="flex justify-between items-center bg-yellow-100 shadow-lg mt-1">
        <Logo />
        <ul>
          <li className="inline-block">
            Online Status: {isOnline ? "✅" : "🔴"}
          </li>

          <Link href="/" className="p-6 hover:text-[#16a34a]">
            Home
          </Link>
          <Link href="/about" className="p-6 hover:text-[#16a34a]">
            About
          </Link>
          <Link href="/grocery" className="p-6 hover:text-[#16a34a]">
            Grocery
          </Link>
          <Link href="/contact" className="p-6 hover:text-[#16a34a]">
            Contact
          </Link>
          <Link href="/login" className="p-6 hover:text-[#16a34a]">
            <Login></Login>
          </Link>
        </ul>
      </div>
    </>
  );
}
