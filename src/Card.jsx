import React from "react";
import { NavLink } from "react-router-dom";
import web from "./images/img1.jpg";

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={props.img} class="card-img-top" alt="..." />
          <div className="card-body">
            <h5 class="card-title">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <div className="text-center">
              <NavLink href="#" className="btn btn-primary align-center">
                Go somewhere
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
