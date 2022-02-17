<<<<<<< HEAD
import React from 'react';
import Profile1 from '../Components/UseContext/Profile1'

const Profile = () => {
    return <h2> 
    <Profile1/> </h2>;
};

export default Profile;
=======
import { useEffect } from "react";
import { Link, Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import EditProfile from "../Components/EditProfile";
import ViewProfile from "../Components/ViewProfile";

const Profile = () => {
    const history = useHistory();

// useEffect(() => {
//     if(!login) {
//         history.push("/");
//     }
// }, [login, history]);

const { path, url } = useRouteMatch()

return(
    <> 
    <h1> Profile Page </h1> 
    {/* <ul>
        <li>
            <Link to ={ `${url}/viewprofile` }>View</Link>
        </li>
    </ul>
    <ul>
        <li>
            <Link to = { `${url}/editprofile` }>Edit Profile</Link>
        </li>
    </ul>
    <Switch>
        <Route path = {`${path}/viewprofile`} component = {ViewProfile} />
        <Route path = {`${path}/editprofile`} component = {EditProfile}/>
    </Switch> */}
    </>
    );
};

export default Profile;
>>>>>>> main
