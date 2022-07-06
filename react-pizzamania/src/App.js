// import logo from './logo.svg';
// import './App.css';

import Navbar from "./Components/Navbar";
import AboutPizza from "./Components/AboutPizza";
import Hero from "./Components/Hero";
import PizzaTypes from "./Components/PizzaTypes";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
			<Navbar name="PIZZAMANIA" />
			<Hero />
			<AboutPizza title="Pizza" />
			<PizzaTypes title="Pizza" />
			<Footer />
		</>
  );
}
export default App;
