import React from 'react'
import Link from 'next/link';
export default function RestaurantCard(props: { restaurant: {} }) {
  const restaurant = props.restaurant.info;
  return (
    <Link href = {`/restaurants/${restaurant.id}`}>
    <div className='w-56 bg-gray-200 p-4'>
        <img className='w-full h-44 rounded-lg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurant.cloudinaryImageId}`}></img>
        <b><h2>{restaurant.name}</h2></b>
        <h4>{restaurant.cuisines.join(", ")}</h4>
      <h3>{restaurant.avgRating}</h3>
    </div>
    </Link>
  )
}
