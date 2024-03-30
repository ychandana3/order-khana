'use client'
import useFetch from "@/app/customHook";
import { useEffect, useState } from "react";

export default function ResMenu(props: any) {
    const resMenu = useFetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.508530814499224&lng=73.84783018380404&restaurantId=${props.params.resId}&catalog_qa=undefined&submitAction=ENTER`)
    if (resMenu === null)
        return <></>
    const {name, cuisines, avgRating} = resMenu?.cards[0]?.card?.card?.info;
    const menuList = resMenu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;
    return (
        <>
            <h1>{name}</h1>  
            <h2>{cuisines.join(', ')}</h2>
            <h3>{avgRating}</h3>
            <ul className = "list-disc">
                {menuList.map((res) => <li  key={res.card.info.id}>{`${res.card.info.name} - ${res.card.info.price/100} ₹`}</li>)}
            </ul>
        </>
    )
}