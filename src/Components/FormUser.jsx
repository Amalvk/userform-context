import React, { useContext, useState, useEffect } from "react";
import "./FormUser.css";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "./AppContext";
import logo from "../logo.png";


function FormUser() {
  const navigate = useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [industry, setIndusrty] = useState("");
  const [intrestedService, setIntrestedService] = useState("IT Development");
  const [videodemo, setVideodemo] = useState("no");

  const { add_user } = useContext(AppContext);
  const handleClick = () => {


    add_user({
      fname: fname,
      lname: lname,
      email: email,
      industry: industry,
      videodemo: videodemo,
      intrestedService: intrestedService,
    });

  };

  const videoDemo = (e) => {
    setVideodemo(e.target.value);
  };

  const backToSearch = () => {
    let alertResult = window.confirm("Changes will not be save !! ");
    if (alertResult) navigate("/");
  };

  return (
    <>
      <button onClick={backToSearch}>Back</button>

      <div className="container">
        <form id="form" className="form">
          <img src={logo} alt="logos" />
          <h5>Contact Us</h5>
          <div className="form-control">
            <label className="input-label">Name</label>
            <div className="user-name">
              <div>
                <input
                  type="text"
                  onChange={(e) => {
                    setFname(e.target.value);
                  }}
                required />
                <label name="fname" className="label-name">
                  First Name
                </label>
              </div>
              <div>
                <input
                  type="text"
                  onChange={(e) => {
                    setLname(e.target.value);
                  }}
                  required />
                <label name="lname" className="label-name">
                  Last Name
                </label>
              </div>
            </div>
          </div>

          <div className="form-control">
            <label className="input-label">Email Address*</label>
            <input
              type="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </div>

          <div className="form-control">
            <label className="input-label" required>
              Your Industry*
            </label>

            <select onClick={(e) => setIndusrty(e.target.value)} required>
              <option value="Web developer">Web developer</option>
              <option value="Fullstack developer">FullStack developer</option>
              <option value="Node developer">Node developer</option>
              <option value="UI UX developer ">UIUX developer</option>
              <option value="Database developer ">Database developer</option>
            </select>
          </div>

          <div className="form-control">
            <label className="input-label" >
              Your Industry*
            </label>

            <select onClick={(e) => setIntrestedService(e.target.value)} required>
              <option value="IT Development">IT Development</option>
              <option value="Marketing">Marketing</option>
              <option value="Sales">Sales</option>
              <option value="Customer Support">Customer Support</option>
            </select>
          </div>

          <div className="form-control">
            <label className="input-label">Would you like a video demo ?</label>
            <div className="user-name" onChange={videoDemo}>
              <div>
                <input type="radio" value="yes" name="videodemo" />
                <label className="label-name">Yes</label>
              </div>
              <div style={{ marginLeft: "1em" }}>
                <input type="radio" value="no" name="videodemo" checked />
                <label className="label-name">No</label>
              </div>
            </div>
          </div>

            <button onClick={handleClick}> Submit </button>
        </form>
      </div>
    </>
  );
}

export default FormUser;
