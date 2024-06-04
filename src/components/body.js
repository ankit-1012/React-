
import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
import { useState } from "react";

const Body = () =>{
    const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <button className="fiter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurant.filter(
                        (res) => res.data.avgRating >4
                    );
                    setListOfRestaurant(filteredList);
                }}>
                Top Rated Restaurant
            </button>
            <div className="res-container">{
                listOfRestaurant.map(restuarant =>(
                    <RestaurantCard key={restuarant.data.id} resdata={restuarant} />
                ))}
            </div>
        </div>
    )
}
export default Body;