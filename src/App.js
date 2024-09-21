import './App.css';
import HomePage from './components/HomePage';
import Nav from './components/Nav';
import './index.css';
import { useEffect } from "react";
import WOW from "wowjs";
import "animate.css";
function App() {
     useEffect(() => {
       // Initialize WOW.js
       new WOW.WOW().init();
     }, []);
  return (

    <div>

    <Nav/>
    <HomePage/>


    </div>
  );
}

export default App;
