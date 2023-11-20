import './App.css';
import { useState } from 'react';

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

function MyApp() {
  return (
    <div>
      <h1 className="test">Welcome to my app</h1>
      <MyButton />
    </div>
  );
}

// export default MyApp;

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}

function MyButton2() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}

function MyButton3() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

export default function Show() {
  return (
    <div>
      <h1>Diffrent stuff</h1>
      <MyApp />
      <hr />
      <ShoppingList />
      <hr />
      <MyButton2 />
      <hr />
      <MyButton3 />
      <MyButton3 />
    </div>
  );
}
