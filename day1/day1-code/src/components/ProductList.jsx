import React from "react";

function ProductList({ products, handleAddToCart }) {
  return (
    <div className="product-cards">
      {products.map((p) => {
        return (
          <div key={p.id} className="product-card">
            <h3>{p.name}</h3>
            <p>Price: ${p.price}</p>
            <p>{p.inStock ? "Available" : "Unavailable"}</p>
            <p>Quantity: {p.quantity}</p>
            <button disabled={!p.inStock} onClick={() => handleAddToCart(p.id)}>
              Add to Cart!
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
