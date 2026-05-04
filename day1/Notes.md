# Notes for Week 5 - Day 1

## Review of Props + State

#### State
- State is the data that changes in our application 
    ```jsx
    const [cartCount, setCartCount] = useState(0);

    function handleAddToCart() {
    setCartCount(cartCount + 1);
    }
    ```

#### Props
- Props are how components communicate, send data between themselves
- Parent sends data → child receives data
- Simple `Prop` Example
    ```jsx
    function Welcome({name}) {
        return <h1>Hello {name}</h1>
    }

    function App() {
        return <Welcome name="Jordan" />
    }
    ```
- We have a simple `Welcome` component which returns an `<h1>` with whatever `name` we pass in as a `Prop`
- `App` component is our parent, and `Welcome` component is our child 