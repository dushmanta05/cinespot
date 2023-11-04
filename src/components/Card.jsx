import React from "react";

const Card = ({ img }) => {
  return (
    <>
      <div className="col-6 col-md-3 col-lg-2">
        <img
          className=""
          style={{ height: "300px", width: "200px" }}
          src={img}
        />
      </div>
    </>
  );
};

export default Card;
