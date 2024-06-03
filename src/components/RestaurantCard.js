import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) =>{
    const {resdata} = props;
    const{
            name,
            cloudinaryImageId,
            avgRating,
            cuisines,
            costForTwoString,
            deliveryTime,
    } = resdata?.data;
    console.log(resdata);
    return (
        <div className="res-card">  
            <img 
                className="res-logo" 
                src={CDN_URL
                +cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4 className="rating">{avgRating} stars</h4>
            <h4 className="price">{costForTwoString}</h4>
            <h4 className="delivery-time">Delivery in {deliveryTime} mins</h4>
        </div>
    )
}
export default RestaurantCard;