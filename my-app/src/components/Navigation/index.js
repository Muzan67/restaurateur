import React from "react";
// eslint-disable-next-line
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Navigation(props) {
  // eslint-disable-next-line
  const tabs = ["Certifications", "Permits", "Posters", "Signin"];

  // if (Auth.loggedIn()) {
  //   return (
  //     <header className="flex-row px-1">
  //       <h1>
  //         <Link to="/">
  //           Restaurateur
  //         </Link>
  //       </h1>

  //       <nav>
  //         {showNavigation()}
  //       </nav>
  //       <ul className="flex-row">
  //       <li className="mx-1">
  //         {/* this is not using the Link component to logout or user and then refresh the application to the start */}
  //         <a href="/" onClick={() => Auth.logout()}>
  //           Logout
  //         </a>
  //       </li>
  //     </ul>
  //     </header>
  //   );

  // } else {
  return (
    <div>
      <ul className="nav">
        {tabs.map((tab) => (
          <h4 className="nav-item" key={tab}>
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </h4>
        ))}
      </ul>

      <ul className="flex-row">
        {/* <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li> */}
        <li className="mx-1">
          <Link to="/login">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
// }

export default Navigation;
