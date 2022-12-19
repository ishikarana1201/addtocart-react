import React from "react";
const Items = ({ title, description, price, img, quantity }) => {
  return (
    <>
      <div className="items-info">
        <div className="product-img">
          <img src={img} alt="test" />
        </div>

        <div className="title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="add-minus-quantity">
          <i className="fa fa-minus" aria-hidden="true"></i>
          <input type="text" placeholder="2" />
          <i className="fa fa-plus" aria-hidden="true"></i>
        </div>

        <div className="price">
          <h3>{price}</h3>
        </div>

        <div className="remove-item">
          <i className="fa fa-trash remove" aria-hidden="true"></i>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Items;
