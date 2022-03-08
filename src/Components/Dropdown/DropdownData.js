import React, { useState } from 'react';
import { Menu, MenuItem, Button, Select, FormControl, InputLabel, Theme, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const DropdownData = () => {
      
    const postsdata = [
        {   
            "id" : "1",
            "name": "Garvit",
            "address": "Patelnagar",
            "course": "Btech",
            "branch": "CSE",
        },
        {   
            "id" : "2",
            "name": "Gautam",
            "address": "Rajnagar",
            "course": "Btech",
            "branch": "CSE",
        },
        {    
            "id" : "3",
            "name": "Shivam",
            "address": "Rajnagar",
            "course": "Btech",
            "branch": "EN",
        },
        {    
            "id" : "4",
            "name": "Aman",
            "address": "Dwarka",
            "course": "MBA",
            "branch": "Finance",
        },
        {    
            "id" : "5",
            "name": "Shyam",
            "address": "Vaishali",
            "course": "Btech",
            "branch": "ECE",
        },
        {    
            "id" : "6",
            "name": "Ramesh",
            "address": "Ghaziabad",
            "course": "MBA",
            "branch": "Sales",
        }
    ]
    
    const [posts, setpost] = useState(postsdata);
    
    const handleChange = (e) => {
        let varpost1 = postsdata.filter(post => post.branch == e.target.value)
        console.log(varpost1)
        setpost(varpost1)
    };

    // function onlyUnique(value, index, self) {
    //     return self.indexOf(value) === index;
    // }

    // let uniqueItems = [...new Set(postsdata.branch)]

    // console.log(uniqueItems);

    // var unique = postsdata.branch.filter(onlyUnique);
    
    const unique = [...new Set(postsdata.map(post=> post.branch))];
    
return (
    <div> 
    <div> 
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Branch </InputLabel>
        <Select 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={posts}
          label="Post"
          onChange={handleChange}
        >
        { 
           unique.map((post) => (
          <MenuItem value = {post}> {post} </MenuItem>
        ))}
        </Select>
      </FormControl>
    </Box>
    </div>
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Branch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((posts) => (
            <TableRow
              key={posts.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {posts.name}
              </TableCell>
              <TableCell align="right">{posts.address}</TableCell>
              <TableCell align="right">{posts.course}</TableCell>
              <TableCell align="right">{posts.branch}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
    )
}

export default DropdownData;
