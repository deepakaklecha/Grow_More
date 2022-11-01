import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/img1.jpg";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div col-10="true" mx-auto="true">
              <div className="row">
                <div className="col-md-6 pt-15 pt-lg-0 order-lg-1 d-flex flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Grow More </strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer making websites
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn btn-primary">
                      {" "}
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img mt-5">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
