import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="container">
        <nav className="d-flex justify-content-between mt-3">
          <h2>CineSpot</h2>
          <input
            className="search-bar pt-2 pb-2 ps-3"
            placeholder="Search"
          ></input>
        </nav>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
