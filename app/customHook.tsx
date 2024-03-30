'use client';
import { useEffect, useState } from "react";

export default function useFetch(api:string) {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const response = await fetch(api);
        const data = await response.json();
        setData(data.data);
    };
    return data;
}