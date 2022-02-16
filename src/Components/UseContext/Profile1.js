import Profile2 from './Profile2';
import { useState, createContext, useContext } from "react";
import UserContext from "./UserContext";
import ReactDOM from "react-dom";

function Profile1() {
  const [user, setUser] = useState("Divyanshu Singh");

  return (
    <UserContext.Provider value={user}>
      <h1>{`Hello ${user}`}</h1>
      <Profile2 user={user} />
    </UserContext.Provider>
  );
}

export default Profile1;
