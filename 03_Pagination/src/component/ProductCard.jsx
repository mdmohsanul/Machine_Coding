import React from "react";

const ProductCard = ({ item }) => {
  return (
    <div key={item.id} className="product-card">
      <img
        src={item.thumbnail}
        alt={item.title}
        loading="lazy"
        className="product-image"
      />
      <p>{item.title}</p>
    </div>
  );
};

export default ProductCard;
