import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartitems = useSelector((state) => state.CartSlice);
  return (
    <div className="navbar w-30 p-5  text-white flex gap-2 fixed z-10  justify-center items-center">
      <div className="flex gap-4">
        <Link to="/" className="text-xl">
          Home
        </Link>
        <Link to="/cartItems" className="btn btn-ghost text-xl">
          Cart
        </Link>
      </div>
      <div>
        <Link
          to="/cart"
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle flex"
        >
          <div className="indicator flex gap-5">
            <span className="badge badge-sm indicator-item absolute top-2 bg-zinc-400 rounded-full h-5 w-5 flex items-center justify-center">
              {" "}
              {cartitems.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
