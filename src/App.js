import React from 'react';
import './index.css';

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

const App = () => {
  return (
    <div className='container'>
      <Header></Header>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  );
};

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

function Menu() {
  // const pizzas = [];
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza key={pizza.name} pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : <p>We're still working on our menu. Please come back later :)</p>}
    </main>
  )
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className='footer'>
      {isOpen ? (
        <Order open={openHour} close={closeHour} />
      ) : <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>}
    </footer >
  )
}

function Order({ open, close }) {
  return (
    <div className='order'>
      <p>
        We're open from {open}:00 to {close}:00. Come visit us or order online.
      </p>
      <button className='btn'>Order</button>
    </div>
  )
}

function Pizza({ pizzaObj }) {
  const { photoName, name, ingredients, price } = pizzaObj;
  return <>
    <li className='pizza'>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  </>
}

export default App;