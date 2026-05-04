# Notes for Week 5 - Day 1

## Review of Props + State

## useState
This app uses `useState` twice — once for the cart count, and once for the products list.

```js
const [cartCount, setCartCount] = useState(0);
const [products, setProducts] = useState([...]);
```

State is how React remembers values between renders. Whenever state changes, React re-renders the component and the UI updates automatically.

---

## Updating State Based on Previous State
When `handleAddToCart` runs, it uses `.map()` to create a **new array** with the updated product — it never directly modifies the existing state.

```js
setProducts(
  products.map((product) => {
    if (product.id === id) {
      const newQuantity = product.quantity - 1;
      return { ...product, quantity: newQuantity, inStock: newQuantity > 0 };
    } else {
      return product;
    }
  })
);
```

> ⚠️ Always treat state as immutable. Never do `product.quantity -= 1` directly.

The spread operator `{ ...product }` copies all existing fields, and only the fields listed after it get overwritten.

---

## Derived State
`inStock` is not tracked separately — it is **derived** from `quantity`:

```js
inStock: newQuantity > 0
```

If a value can be calculated from existing state, calculate it — don't store it as its own piece of state.

---

## Rendering Lists
`.map()` is used to render one card per product. Every element in a list needs a unique `key` prop so React can track which items changed.

```jsx
{products.map((product) => (
  <div className="product-card" key={product.id}>
    ...
  </div>
))}
```

---

## Conditional Rendering
The available/unavailable label uses a **ternary operator** to switch between two strings based on `inStock`:

```jsx
{product.inStock ? "Available" : "Unavailable"}
```

---

## Disabled Attribute
The button is disabled when the product is out of stock. React passes `disabled` directly to the HTML element:

```jsx
<button disabled={!product.inStock} onClick={() => handleAddToCart(product.id)}>
  Add to Cart
</button>
```

A disabled button does not fire `onClick`, and CSS can target it with `button:disabled` to style it differently.