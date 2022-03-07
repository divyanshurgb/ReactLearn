import React, { useState } from 'react';
import { Menu } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { Button } from 'semantic-ui-react';

const DropdownData = () => {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(0);

    const handleOpenMenu = e => {
        setAnchorEl(e.currentTarget);
    }

    const postsdata = [
        {   
            "id" : "1",
            "name": "Garvit",
            "address": "Patelnagar",
            "course": "Btech",
            "branch": "cse",
        },
        {   
            "id" : "2",
            "name": "Gautam",
            "address": "Patelnagar",
            "course": "Btech",
            "branch": "ece",
        },
        {    
            "id" : "3",
            "name": "Shivam",
            "address": "Rajnagar",
            "course": "MBA",
            "branch": "finance",
        }
    ]
    
    const [posts, setpost] = useState(postsdata);

    return (
    <div> 
        <div>
        {
        posts.map((post) => <div key = {post.id}> <li> {post.name} </li>  </div>) 
        } 
        </div>
        <div> 
        <Button 
        aria-controls = 'menu'
        onMouseOver = {handleOpenMenu}
        disableRipple
        // className = {classes.accountButton}
        variant = 'contained'
        color = 'secondary'>
        Profile
        </Button> 
        <Menu id = 'menu'>
            <MenuItem>
               My Account
            </MenuItem>
        </Menu>
        </div>
    </div>
    )
}

export default DropdownData;





// Filter

// const handleChange = (e) => {
    //     let varpost1 = e.target.value
    //     console.log(varpost1)
    // }
    
    // console.log(postsdata)
    // let varpost = postsdata.filter(post => post.userId == '1')

    // console.log(varpost);

// Old Select

{/* <Select className="width50" value={this.state.selected} onChange={this.handleChange}>
            {this.renderOptions()}
</Select> 
    */}
