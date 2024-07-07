"use-client";
import { useState } from "react";
export default function Login() {
  return (
    <div className="flex justify-center items-center">
      <div className="md:w-96">
        <input type="text" className="block border border-slate-500 rounded" />
        <input type="text" className="block" />
        <button type="submit">Submit</button>
      </div>
    </div>
  );
}
