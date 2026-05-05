import { useState } from "react";
import ProductList from "./components/ProductList";
import "./App.css";

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Mouse",
      price: 22.99,
      inStock: true,
      quantity: 13,
    },
    {
      id: 2,
      name: "Keyboard",
      price: 44.99,
      inStock: true,
      quantity: 8,
    },
    {
      id: 3,
      name: "Monitor",
      price: 55.99,
      inStock: false,
      quantity: 0,
    },
    {
      id: 4,
      name: "Laptop",
      price: 750.55,
      inStock: true,
      quantity: 5,
    },
  ]);

  const handleAddToCart = (id) => {
    setProducts(
      products.map((p) => {
        if (id === p.id) {
          const newQuantity = p.quantity - 1;
          setTotalPrice(totalPrice + p.price);
          return { ...p, quantity: newQuantity, inStock: newQuantity > 0 };
        }
        return p;
      }),
    );
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <div>
      <div className="header-info">
        <h1>Store</h1>
        <h2>Cart Item: {cartItemCount}</h2>
        <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
      </div>
      <ProductList products={products} handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default App;
