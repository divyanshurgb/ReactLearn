import React, { useState, useEffect } from 'react';
import { Checkbox, Form } from 'semantic-ui-react'
import Button from '@mui/material/Button';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import Edit from '@material-ui/icons/Edit';

export default function Update() {
    let { id } = useParams('');
    
    console.log(id);

    let history = useHistory();
    // const [id, setID] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    useEffect(() => {
        // setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []);

    const updateAPIData = () => {
        axios.put(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`, {
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
                <div> 
                <h2> <Edit /> Edit the details </h2>
                </div>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='Check yes if you agree to terms and conditions' checked={checkbox} onChange={() => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button variant = "contained" color = "primary" type='submit' style = {{ marginRight: 50}} onClick={updateAPIData}>Update</Button>
            </Form>
        </div>
    )
}
