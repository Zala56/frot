
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Authcontext from './Cotext/Authcontext';
import Toastcotext from './Cotext/Toastcotext';


const Createcontact = () =>{

    const { user } = useContext( Authcontext);
  const { toast } = useContext(Toastcotext);
    
    const [userDetails, setUserDetails] = useState({
        name: "",
        address: "",
        email: "",
        phone: "",
      });
      const navigate = useNavigate();
      const handleInputChange = (event) => {
        const { name, value } = event.target;
    
        setUserDetails({ ...userDetails, [name]: value });
      };
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        const res = await fetch(`http://localhost:8000/api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(userDetails),
        });
        const result = await res.json();
        if (!result.error) {
          toast.success(`Created [${userDetails.name}] contact`);
    
          setUserDetails({ name: "", address: "", email: "", phone: "" });
        } else {
          toast.error(result.error);
        }
      };
  return (
    <>
      <h2>Create your contact</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameInput" className="form-label mt-4">
            Name Of Person
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            name="name"
            value={userDetails.name}
            onChange={handleInputChange}
            placeholder="Enter Your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="addressInput" className="form-label mt-4">
            Address Of Person
          </label>
          <input
            type="text"
            className="form-control"
            id="addressInput"
            name="address"
            value={userDetails.address}
            onChange={handleInputChange}
            placeholder="Enter Address"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput" className="form-label mt-4">
            Email Of Person
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            name="email"
            value={userDetails.email}
            onChange={handleInputChange}
            placeholder="Enter Email Here"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneInput" className="form-label mt-4">
            Phone Number Of Person
          </label>
          <input
            type="number"
            className="form-control"
            id="phoneInput"
            name="phone"
            value={userDetails.phone}
            onChange={handleInputChange}
            placeholder="Enter Contact"
            required
          />
        </div>
        <input
          type="submit"
          value="Add Contact"
          className="btn btn-info my-2"
        />
      </form>
    </>
  )
}

export default Createcontact