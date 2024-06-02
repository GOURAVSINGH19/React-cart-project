import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Redux/CartSlice.jsx";
import { getItems } from "../Redux/Apidata";
const Product = () => {
  const {data: product, status } = useSelector((state) => state.Apidata);
  const dispatch = useDispatch();
  const addtocart = (item) => {
    dispatch(addItem(item));

     // Update cart count in local storage
    localStorage.setItem("cartCount", cartCount + 1);
    setCartCount(cartCount + 1); // Update the cart count in component state
  };

  useEffect(() => {
    dispatch(getItems());

     const storedCartCount = localStorage.getItem("cartCount");
    if (storedCartCount) {
      setCartCount(parseInt(storedCartCount, 10));
    }
  }, []);

  if (status === "loading") {
    return <h1 className="text-white flex justify-center items-center h-screen">Loading...</h1>;
  }

  if (status === "error") {
    return <h1 className="text-white flex items-center justify-center h-screen">Error</h1>;
  }

  if (status === "fullfilled") {
    return <h1 className="text-white flex items-center justify-center h-screen">fulfilled</h1>;
  }

  const card = product.map((item) => (
    <div
      key={item.id}
      className="card w-[265px] sm:max-w-96  md:w-96 h-[30rem] bg-zinc-800 shadow-lg"
    >
      <figure className=" px-5 pt-8 md:px-10 h-fit md:pt-10">
        <img
          src={item.image}
          alt="Shoes"
          className="rounded-md flex p-4 w-[200px] h-full"
        />
      </figure>
      <div className="card-body items-start p-4 text-white flex flex-col justify-center">
        <h2 className="card-title">{item.title}</h2>
        <p>Price: {item.price}$</p>
        <div className="card-actions">
          <button className="btn btn-primary bg-green-400 py-2 px-3 rounded-sm mt-2" onClick={() => addtocart(item)}>
            Add Cart
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="bg-zinc-900 pt-28 gap-2  md:gap-4 px-2 py-2 flex flex-col md:flex-row md:justify-center flex-wrap  items-center">
      {card}
    </div>
  );
};

export default Product;
