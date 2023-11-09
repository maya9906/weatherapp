import React from "react";
import "./index.css";
// import Search from "./components/Search.jsx"
import WeatherApp from './components/WeatherApp.jsx';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Search /> */}
      <WeatherApp />
      <Footer />
    </div>
  );
}
export default App;