import React,{ useState } from 'react';
import { Select } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import axios from 'axios';

const DropdownData = () => {
    
    const postsdata = [
        {
            "name": "Garvit",
            "address": "Patelnagar",
            "course": "Btech",
            "branch": "cse",
        },
        {
            "name": "Gautam",
            "address": "Patelnagar",
            "course": "Btech",
            "branch": "ece",
        },
        {
            "name": "Shivam",
            "address": "Rajnagar",
            "course": "MBA",
            "branch": "finance",
        }
    ]
    
    const [posts, setpost] = useState(postsdata);

    const handleChange = (e) => {
        let varpost1 = e.target.value
        console.log(varpost1)
    }
    
    console.log(postsdata)
    let varpost = postsdata.filter(post => post.userId == '1')

    console.log(varpost);

    return (
    <div> 
        {
        postsdata.map((post) => <li> {post} </li> ) 
        } 
        
        {/* <Select className="width50" value={this.state.selected} onChange={this.handleChange}>
            {this.renderOptions()}
        </Select> */}
    </div>
    )
}


export default DropdownData;
