import React, { useState } from "react";
import {Link} from 'react-router-dom';
import './multipleInputs';

const MultipleInputs = () => {
  const [userRegistration, setUserRegistration] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  });
  
  const [records, setRecords] = useState([]);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setUserRegistration({ ...userRegistration, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = { ...userRegistration, id : new Date().getTime().toString() };
    console.log(records);
    setRecords([ ...records, newRecord]);
    console.log(records);
    
    setUserRegistration({username: "", email: "", phone: "", password: ""});
  };

  return (
    <>
      <div className="div-login">
      <form action="" onSubmit={handleSubmit}>
        <div>
        <div>
          <label htmlFor="username"> Fullname </label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.username}
            onChange={handleInput}
            name="username"
            id="username"
          />
        </div>
        <div>
          <label htmlFor="email"> email </label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.email}
            onChange={handleInput}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="phone"> phone </label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.phone}
            onChange={handleInput}
            name="phone"
            id="phone"
          />
        </div>
        <div>
          <label htmlFor="password"> password </label>
          <input
            type="text"
            autoComplete="off"
            value={userRegistration.password}
            onChange={handleInput}
            name="password"
            id="password"
          />
        </div>
    
        <button type="submit"> Registration </button>
        </div>
      </form>
        <div>
        {
          records.map((curElem) => {
          const { id, username, email, phone, password } = curElem;
          return (
            <div className="showDataStyle" key={curElem.id}>
              <p> {username} </p>
              <p> {email} </p>
              <p> {phone} </p>
              <p> {password} </p>
            </div>
          );
        })}
        </div>
        <Link to="/Login" variant = "body2">
        Already have an account? Login
        </Link>
      
      </div>
    </>
)
}
export default MultipleInputs;
