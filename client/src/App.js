import React from "react";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";

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
