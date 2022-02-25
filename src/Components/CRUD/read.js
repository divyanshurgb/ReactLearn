import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react';
// import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ViewColumn from '@material-ui/icons/ViewColumn';
import "././CRUD.css";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function Read() {
    const [APIData, setAPIData] = useState([]);   // it stores the state of the API data
    useEffect(() => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)  // it gets the data from the fake API
            .then((response) => {                 // response is given by server to the API
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {                  // Function used to store the data 
        let { id, firstName, lastName, checkbox } = data; 
        localStorage.setItem('ID', id);          // It stores the Id in local storage
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = () => {                      // Function used to get the data
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
            .then((getData) => {                 
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {                  // function used to delete the user
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
            <div>
            <Table>
                <div>
                <ViewColumn /> 
                <ArrowDownward />
                <Box />
                <Grid container columns={{ xs: 4, md: 12 }}>
  <Grid item xs={2} />
</Grid>
                <Card variant="outlined"/>
                <Container maxWidth="sm" />
                </div>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checkbox Value</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {APIData.map((data) => {   // It maps the data through the table
                        return (
                            <Table.Row> 
                                <Table.Cell>{data.firstName}</Table.Cell>  
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                                <Link to='/update/:id'>                      
                                    <Table.Cell> 
                                    <Button variant = "contained" color = "primary" onClick={() => onDelete(data.id)}> Edit </Button>
                                    </Table.Cell>
                                </Link>
                                <Table.Cell>
                                    <Button variant = "contained" color = "primary" onClick={() => onDelete(data.id)}> Delete </Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                </Table>
        </div>
    )
}
