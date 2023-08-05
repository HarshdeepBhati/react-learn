import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useEffect } from "react";
import { Shimmer } from "./Shimmer";
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

  //conditional rendring

  return listOfRestarants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          className="search-box"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            const filteredList = listOfRestarants?.filter((res) =>
              res.info.name?.toUpperCase().includes(searchText?.toUpperCase())
            );
            setfilteredRes(filteredList);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
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
          className="filter-btn"
          onClick={() => {
            setfilteredRes(listOfRestarants);
          }}
        >
          All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
