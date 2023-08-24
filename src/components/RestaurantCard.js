import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props; // this is destructuring, we can use data like props.resName ans props.cuisine in template;

  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, id } =
    resData?.info;
  return (
    <div className="border border-black bg-green-100 shadow-md m-4 w-[250px] p-2 rounded-lg hover:bg-green-200">
      <img className="rounded-lg" src={`${CDN_URL + cloudinaryImageId}`}></img>
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute mx-4 px-1">🟩</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
