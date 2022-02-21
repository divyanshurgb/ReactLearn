import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AddBox from '@material-ui/icons/AddBox';
// import Check from '@material-ui/icons/Check';


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
            <Form className="login-box">
                <div className="add-box"> 
                <h2> <AddBox />  Add more Users </h2>
                </div>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <div className="css-form">
                <Form.Field>
                    <Checkbox label = 'check yes if you agree to terms and conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                </div>
                {/* <Check /> */}
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
