import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../Redux/CartSlice";

const Cart = () => {
  const items = useSelector((state) => state.CartSlice);
  const dispatch=useDispatch();

  const remove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className=" bg-zinc-900 pb-2  h-full pt-20 px-2 flex flex-wrap flex-col md:flex-row gap-2 justify-center items-center">
      {items.map((selectedItems, index) => (
        <div
        key={`${selectedItems.id}_${index}`}
        className="card w-50 sm:w-96  h-[30rem]  bg-zinc-400 rounded-md "
        >
          <figure className=" px-5 pt-8 md:px-10 h-fit md:pt-10">
            <img
              src={selectedItems.image}
              alt="Shoes"
              className="rounded-xl w-[200px] h-full  "
            />
          </figure>
          <div className=" ml-4 mt-3 gap-1 card-body flex flex-col items-start text-black">
            <h2 className="card-title">{selectedItems.title}</h2>
            <p>Price: {selectedItems.price}$</p>
            <div className="card-actions">
              <button
                className="btn mb-2 py-2 px-2 rounded-md  bg-red-600 text-white "
                onClick={() => remove(selectedItems.id)}
              >
                remove
              </button>
            </div>
          </div>
        </div> 
      ))}
    </div>
  );
};

export default Cart;
