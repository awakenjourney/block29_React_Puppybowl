import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <>
        <div id="navbar">
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>Home</Link>
            <Link to="/all-players" className={location.pathname === "/all-players" ? "active" : ""}>All Players</Link>
            <Link to="/new-player" className={location.pathname === "/new-player" ? "active" : ""}>Add Players</Link>
        </div>
        </>
    )
};

export default Navbar;