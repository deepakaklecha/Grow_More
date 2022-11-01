import React from "react";
import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const inputEvent = (e) => {
    const { name, value } = e.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `I'm ${data.fullname}, my mobile no. is ${data.phone}, my email is ${data.email}`
    );
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US</h1>
      </div>
      <div className="container col-md-6 col-10 mx-auto">
        <form onSubmit={formSubmit}>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Your Name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              name="fullname"
              value={data.fullname}
              onChange={inputEvent}
              placeholder="Your name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Phone Number
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              name="phone"
              value={data.phone}
              onChange={inputEvent}
              placeholder="Contact number"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              name="email"
              value={data.email}
              onChange={inputEvent}
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Message
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="msg"
              value={data.msg}
              onChange={inputEvent}
              placeholder="Drop Your message here"
            ></textarea>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
