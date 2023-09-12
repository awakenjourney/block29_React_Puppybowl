import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="container mt-5">
        <h1>Welcome to Puppy Bowl Game!</h1>
        <h1>Let's Start!</h1>
        <div className="d-flex flex-column align-items-center">
          <div className="mb-4">
            <Link to="/all-players" className="btn btn-primary btn-lg mt-4">
              See Players
            </Link>
          </div>
          <div>
            <Link to="/new-player" className="btn btn-success btn-lg mt-3">
              Add Player
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
