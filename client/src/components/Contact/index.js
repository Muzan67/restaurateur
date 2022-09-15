import React, { useState } from "react";
// import './style.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from "../../utils/helpers";

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !name) {
      setErrorMessage("Email or username is invalid");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!checkPassword(message)) {
      setErrorMessage(`Thank you for getting in touch ${name}!`);
      return;
    }
    alert(`Hello ${name}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row d-flex flex-column align-items-center">
        <form className="form col-8 mt-5 d-flex flex-column align-items-center bg-light bg-opacity-75">
          <h1 className="contact fw-bold" style={{ textAlign: "center" }}>
            Contact Us
          </h1>
          <p>Name</p>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
          //   placeholder="username"
          />
          <p>Email Address</p>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
          //   placeholder="email"
          />
          <p> Message</p>
          <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="messagepassword"
                    className="message-input"
                    />
          <br></br>
          <button className="mb-3" type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div className="d-flex justify-content-center">
            <p className="error-text fs-2 fw-bold bg-light bg-opacity-75 px-2">{errorMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
