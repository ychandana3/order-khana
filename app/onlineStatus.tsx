'use client';
import { useState } from "react";
export default function useOnlineStatus() {
    const [isOnline, setIsOnline] = useState(true);
    window.addEventListener("offline", () => {
        setIsOnline(false);
    });
    return isOnline;
}