import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props; // this is destructuring, we can use data like props.resName ans props.cuisine in template;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData?.info;
  return (
    <div className="res-card">
      <img className="res-logo" src={`${CDN_URL + cloudinaryImageId}`}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export default RestaurantCard;
