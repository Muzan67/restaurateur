import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {



  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <Nav className="me-auto gap-3">
          {/* <Link className="text-dark" to="/restaurateur">
            Restaurateur
          </Link> */}
          <Link className="text-dark" to="/certifications">
            Certifications
          </Link>
          <Link className="text-dark" to="/permits">
            Permits
          </Link>
          <Link className="text-dark" to="/posters">
            Posters
          </Link>
          <Link className="text-dark" onClick={() => Auth.logout()} to="/restaurateur">
            Logout
          </Link>
          </Nav>
      );
    } else {
      return (
        <Nav className="me-auto gap-3">
          <Link className="text-dark" to="/signup">
            Signup
          </Link>
          <Link className="text-dark" to="/login">
            Login
          </Link>
          </Nav>
      )
    }
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand>
          <Link className="text-dark" to="/restaurateur">
            Restaurateur
          </Link>
          </Navbar.Brand>
          
            {showNav()}
    
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;

// // function Navigation(props) {
// //   // eslint-disable-next-line
// //   const tabs = ["Certifications", "Permits", "Posters"];

// //   // if (Auth.loggedIn()) {
// //   //   return (
// //   //     <header className="flex-row px-1">
// //   //       <h1>
// //   //         <Link to="/">
// //   //           Restaurateur
// //   //         </Link>
// //   //       </h1>

// //   //       <nav>
// //   //         {showNavigation()}
// //   //       </nav>
// //   //       <ul className="flex-row">
// //   //       <li className="mx-1">
// //   //         {/* this is not using the Link component to logout or user and then refresh the application to the start */}
// //   //         <a href="/" onClick={() => Auth.logout()}>
// //   //           Logout
// //   //         </a>
// //   //       </li>
// //   //     </ul>
// //   //     </header>
// //   //   );

// //   // } else {
// //   return (
// //     <div>
// //       <ul
// //         className="navbar navbar-light flex-row"
// //         style={"background-color: #e3f2fd"}
// //       >
// //         {tabs.map((tab) => (
// //           <h4 className="nav-item" key={tab}>
// //             <a
// //               href={"#" + tab.toLowerCase()}
// //               onClick={() => props.handlePageChange(tab)}
// //               className={
// //                 props.currentPage === tab ? "nav-link active" : "nav-link"
// //               }
// //             >
// //               {tab}
// //             </a>
// //           </h4>
// //         ))}
// //         <li className="mx-1">
// //           <Link to="/signup">Signup</Link>
// //         </li>
// //         <li className="mx-1">
// //           <Link to="/login">Login</Link>
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // }
// // // }

// // export default Navigation;
