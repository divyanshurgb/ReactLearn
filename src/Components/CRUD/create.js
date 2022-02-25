import React, { useState } from 'react';
import { Checkbox, Form } from 'semantic-ui-react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import "./CRUD.css";
// import MaterialTable from '@material-ui/material-table';

// import Card from '@mui/material/Card';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';

export default function Create() {
    let history = useHistory();                     
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');   
    const [checkbox, setCheckbox] = useState(false);  
    console.log(checkbox)
    const postData = () => {                        
        axios.post(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`, {
            firstName,
            lastName,
            checkbox
        }).then(() => {
            history.push('/read')
        })
    }

    return (
        <div>          
            <Form>
                <Box />
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                <Checkbox label = 'I agree to terms and conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button variant = "contained" color = "primary"  style = {{ marginRight: 10 }} onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

