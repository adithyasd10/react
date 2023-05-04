import { Stack, TextField } from '@mui/material'
import React from 'react'
import{ useForm } from 'react-hook-form';
import axios from "axios";

const Add = () => {
  const { register, handleSubmit} = useForm();
    const getval=(val)=> {
      alert('FROM SUBMITTED')
      axios.post("https://reqres.in/api/users",val).then((response)=>{
        console.log(response);
      })
    }
  return (
    <div>
      <h1>Welcome to Add Employee</h1>
      
      <Stack
      component="form"
      sx={{
        marginTop:'40px',
        marginLeft:'45%',
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        name='emp-name'
        {...register("emp-name")}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Employee Name"
        variant="filled"
        size="small"
      />
      <TextField
        {...register("emp-location")}
        name='emp-location'
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Emplyee Location"
        variant="filled"
      />

      <TextField
        hiddenLabel
        {...register("emp-designation")}
        name='emp-designation'
        id="filled-hidden-label-normal"
        defaultValue="Employee designation"
        variant="filled"
        
        
      />
  
    <button onClick={handleSubmit(getval)} variant="filled" color='primary'>submit</button>
    </Stack>
      
    </div>
  )
}

export default Add
