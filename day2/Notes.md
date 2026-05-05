# Notes for Week 5 - Day 2 - Forms

## Basic Input Types - Using Inline Callback

#### Text Input
```jsx
const [username, setUsername] = useState('');

<input
  type="text"
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
```

#### Checkbox
```jsx
const [agreed, setAgreed] = useState(false);

<input
  type="checkbox"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}  
  // Note: .checked, not .value
/>
```

#### Select Dropdown
```jsx
const [role, setRole] = useState('student');

<select value={role} onChange={(e) => setRole(e.target.value)}>
  <option value="student">Student</option>
  <option value="teacher">Teacher</option>
  <option value="admin">Admin</option>
</select>
```

#### Password Input
```jsx
const [password, setPassword] = useState('');

<input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>
```

#### Number Input
```jsx
const [age, setAge] = useState('');

<input
  type="number"
  value={age}
  onChange={(e) => setAge(e.target.value)}
/>
```

#### Email Input
```jsx
const [email, setEmail] = useState('');

<input
  type="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

#### Radio Buttons
```jsx
const [gender, setGender] = useState('');

<input
  type="radio"
  value="male"
  checked={gender === 'male'}
  onChange={(e) => setGender(e.target.value)}
/>

<input
  type="radio"
  value="female"
  checked={gender === 'female'}
  onChange={(e) => setGender(e.target.value)}
/>
```

#### Text Area
```jsx
const [message, setMessage] = useState('');

<textarea
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>
```

#### Date Input
```jsx
const [birthday, setBirthday] = useState('');

<input
  type="date"
  value={birthday}
  onChange={(e) => setBirthday(e.target.value)}
/>
```

## `useState` for Form Data - Using `setFormData` Object

```jsx
const [formData, setFormData] = useState({
    email: '',
    password: '',
});
```
```js
function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
        ...formData,
        [name]: value,
    });
}
// INPUTS MUST HAVE `name` ATTRIBUTE
```
```html
<input
  type="email"
  name="email"
  value={formData.email}
  onChange={handleChange}
/>

<input
  type="password"
  name="password"
  value={formData.password}
  onChange={handleChange}
/>
```
#### Notes on `handleChange(e)` Function
- Runs whenever you type in an input field
- ```jsx
    const { name, value } = e.target;
    ```
    -   This grabs two things from the input:
    - `name` → which field it is (like "email" or "name")
    - `value` → what the user typed
- ```jsx
    setFormData({
        ...formData,
        [name]: value,
    });
    ```
    - `...formData` = keeps everything else the same
    - `[name]: value` = updates only the field you typed in

## Form Submission
```jsx
function handleSubmit(e) {
  e.preventDefault(); // stops the page refresh
  console.log('Form submitted:', formData);
}

<form onSubmit={handleSubmit}>
  {/* inputs here */}
  <button type="submit">Submit</button>
</form>
```