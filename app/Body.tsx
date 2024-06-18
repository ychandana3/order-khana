"use client";
import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "./onlineStatus";

export default function () {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const isOnline = useOnlineStatus();
  console.log(isOnline);
  let searchText = "";
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.508530814499224&lng=73.84783018380404&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await res.json();
    console.log(
      data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfRestaurants(
      data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      data.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const filterRestaurants = () => {
    setFilteredRestaurants(
      listOfRestaurants.filter((restaurant) =>
        restaurant?.info.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };
  if (!isOnline) return <h1>Oops it seems you lost internet connection!</h1>;
  return (
    <div className="d-inblock m-8">
      <div className="flex mb-8">
        <input
          className="border-2 border-slate-400 rounded-md h-9"
          type="text"
          onChange={(e) => (searchText = e.target.value)}
        />
        <button
          onClick={filterRestaurants}
          className="mx-4 rounded-md bg-red-300 px-2"
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-start">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
