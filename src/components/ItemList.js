import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="border-blue-200 border-b-2 flex justify-between"
        >
          <div className="p-4 m-1 text-left">
            <span className="font-bold text-lg text-left">
              {item?.card?.info?.name}
            </span>
            <span className="mx-3">₹ {item?.card?.info?.price / 100}</span>
            <p className="text-xs text-left">{item?.card?.info?.description}</p>
          </div>
          <img
            className="w-40 m-4 p-2"
            src={`${CDN_URL + item?.card?.info?.imageId}`}
          ></img>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
