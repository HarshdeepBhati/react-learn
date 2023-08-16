import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  //Local State Variable - Super Powerful Variable  ----> Hooks ->
  //Use State Hook
  const [listOfRestarants, setListOfRestaurant] = useState([]); //state variable
  const [filteredRes, setfilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  //Normal Variable
  // listOfRestarants = resList;

  useEffect(() => {
    fetchData(); //This is called after a component renders
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.5886835&lng=76.8470955&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>You are offline...Please check your internet connection.</h1>;
  }
  //conditional rendring

  return listOfRestarants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex p-2">
        <div className="p-2">
          <input
            className="border border-solid border-black mx-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-1 bg-green-100 shadow-md mx-2"
            onClick={() => {
              const filteredList = listOfRestarants?.filter((res) =>
                res.info.name?.toUpperCase().includes(searchText?.toUpperCase())
              );
              setfilteredRes(filteredList);
            }}
          >
            Search
          </button>
          <button
            className="p-2 px-4 py-1 bg-green-100 shadow-md mx-2"
            onClick={() => {
              //Filter
              const filteredList = listOfRestarants?.filter(
                (res) => res.info.avgRating > 4
              );
              setfilteredRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
          <button
            className="px-4 py-1 bg-green-100 shadow-md mx-2"
            onClick={() => {
              setfilteredRes(listOfRestarants);
            }}
          >
            All Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap p-2">
        {filteredRes.map((restaurant) => (
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to={`/restaurants/${restaurant?.info?.id}`}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
