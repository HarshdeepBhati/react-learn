import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-xl p-2">🛒Cart</h1>
      <div className="w-6/12 m-auto p-4 bg-green-100">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1> Cart is Empty Add Items to the cart</h1>
        )}
        <ItemList items={cartItems}></ItemList>
      </div>
    </div>
  );
};
export default Cart;
