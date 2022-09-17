import React, { useState } from "react";
import Navigation from "../Navigation";
import Permits from "../Permits";
import Certifications from "../Certifications";
import Posters from "../Posters";
import Restaurateur from "../Restaurateur";
import Contact from "../Contact";

function Homepage() {
  // state of current page
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    // This method isstyle={{textAlign:"center"}} checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    switch (currentPage) {
      case "Restaurateur":
        return <Restaurateur />;
      case "Permits":
        return <Permits />;
      case "Certifications":
        return <Certifications />;
      case "Posters":
        return <Posters />;
      case "Contact":
        return <Contact />;
      default:
        return <Homepage></Homepage>;
    }
  };

  // const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div className="header" id="header" style={{ textAlign: "center" }}></div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div>
        {/* Here we are calling the renderPage method which will return a component  */}
        {renderPage()}
      </div>
    </div>
  );
}

export default Homepage;
