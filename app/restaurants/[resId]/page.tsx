"use client";
import MenuListCategory from "@/app/components/MenuListCategory";
import useFetch from "@/app/customHook";
import { useEffect, useState } from "react";

export default function ResMenu(props: any) {
  const resMenu = useFetch(
    `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.508530814499224&lng=73.84783018380404&restaurantId=${props.params.resId}&catalog_qa=undefined&submitAction=ENTER`
  );
  if (resMenu === null) return <></>;
  console.log(resMenu);
  const { name, cuisines, avgRating } = resMenu?.cards[2]?.card?.card?.info;
  const menuList = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR;
  return (
    <>
      <h1>{name}</h1>
      <h2>{cuisines.join(", ")}</h2>
      <h3>{avgRating}</h3>
      {menuList.map((menuListCategory, index) => (
        <MenuListCategory menuList={menuListCategory.cards[index].card.card} />
      ))}
    </>
  );
}
