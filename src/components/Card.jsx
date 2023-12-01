import React from "react";

const Card = ({ item }) => {
  return (
    <>
      <div className="col-6 col-md-3 col-lg-2">
        <div className="p-2">
          <img
            className=""
            style={{ height: "300px", width: "200px" }}
            src={item.image}
          />
          <div className="d-flex flex-column mt-2">
            <p className="fs-6 fw-bold">{item.title}</p>
            <div className="d-flex justify-content-between text-secondary">
              <p>{item.year}</p>
              <div className="d-flex flex-row gap-2">
                <p>*</p>
                <p>{item.rating}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
