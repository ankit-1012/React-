import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockdata";
const Body = () =>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <button className="fiter-btn">
                Top Rated Restaurant
            </button>
            
            <div className="res-container">{
                restaurantList.map(restuarant =>(
                    <RestaurantCard key={restuarant.data.id} resdata={restuarant} />
                ))}
            </div>
        </div>
    )
}
export default Body;