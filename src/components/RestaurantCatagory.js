import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCatagory = ({ resData, showItems, setShowIndex }) => {
  const { title, itemCards } = resData;
  handleClick = () => {
    setShowIndex(showItems);
  };
  return (
    <div>
      <div className="w-6/12 mx-auto bg-green-100 shadow-lg p-4 my-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {title} ({itemCards.length})
          </span>
          {!showItems ? <span>🔽</span> : <span>🔼</span>}
        </div>
        {showItems && <ItemList items={itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCatagory;
