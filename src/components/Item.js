import React, { useState } from "react";

function Item({ name, category }) {
const [inCart, setInCart] = useState(false);

const toggleCart = () => {
setInCart(prevState => !prevState);
};

const cartClass = inCart ? "in-cart" : "";

return (
  <li className={cartClass}>
  <span>{name}</span>
  <span className="category">{category}</span>
  <button className="add" onClick={toggleCart}>
  {inCart ? "Remove From Cart" : "Add to Cart"}
  </button>
  </li>
);
}

export default Item;