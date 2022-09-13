import React from "react";
import { Col } from "react-bootstrap";

function Restaurateur() {
  return (
    <section>
      <div className="row justify-content-center" id="about-container">
        <Col lg={6} md={12}>
          <div className="carta m-5 p-5">
          <h1 className="name fw-bold" style={{ textAlign: "center" }}>
            Welcome To Restaurateur!
          </h1>
          <p className="fs-4 fw-semibold" style={{ textAlign: "center" }}>
            Our app offers you a Step-by-Step Guide to Opening a Restaurant.
            <br></br>
            Starting a restaurant can be a bit daunting. Our guide’s
            instructions explain what to know and expect at each step.
            <br></br>
            Whatever background or level of experience you come from, nothing
            can totally prepare you for starting your first restaurant, or
            really starting any business. No matter how much you read or what
            research you do, there are certain things about being a restaurateur
            that you can truly only learn from experience. But the steps
            provided in this app can help you with best practices and resources.
            <br></br>
            Please find available resourced such as Permits, Certifications, and 
            Poster compliance which will help you get your restaurant up and running
            and ensure to pass your local DOH inspection and be on the road to success
            with your restaurant.
          </p>
      </div>
        </Col>
      </div>
    </section>
  );
}

export default Restaurateur;
