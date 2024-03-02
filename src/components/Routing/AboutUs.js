import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate(); // this useNavigate() method is a predefined method from react-router-dom,  used if we want to execute a some part of code and then navigate to target page.

  const goToHomePage = () => {
    console.log("Do Something......."); // Any Logic can be executed
    navigate("/home"); // after executing above logic it navigates to home page.
  };

  return (
    <>
      <h1>This is About Us Component</h1>
      <a href="/home">Go to Home page</a>
      {/* we can use anchor tag if we want to switch from one route to another route but the page gets reloaded completely. so, we have to use link tag as shown below to make the webpage as single page application */}
      <Link to="/home" className="m-1">
        go to Home
      </Link>
      <button onClick={goToHomePage}>Do Something & Go To Home</button>
      {/* After clicking this button it diretly do not go to home page instead if first executes the logic written in goTOHomePage method and then it navigates to home page as we have used useNavigate concept here. */}
      <button onClick={() => navigate(-1)}>Go Back</button>
      <button onClick={() => navigate(1)}>Go Next</button>
      {/* used to navigate to previous page we use navigate(-1) and to navigate to next page we use navigate(1) and if we use navigate(-2) we will navigate to 2 pages back for one click */}
    </>
  );
}
