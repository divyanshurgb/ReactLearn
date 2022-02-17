import { useContext } from "react";
import UserContext from "./UserContext";

const Profile5 = () => {
  const user = useContext(UserContext);

  return (
    <>
        <h1>Profile 5</h1>
        <h2>{`Hello ${user} again`}</h2>
    </>
  )
}

export default Profile5;