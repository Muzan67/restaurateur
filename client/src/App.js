import React from "react";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Footer from "./components/Footer";
// import "./index.css";
// import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <div>
        <Homepage />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};
export default App;
