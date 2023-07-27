import React from 'react'
import { useState } from 'react'
import { FormControl,FormGroup, InputLabel,Input, Typography,styled, Button } from '@mui/material'
import { addUser } from '../../Service/api'
const Container = styled(FormGroup)({
    width:'50%',
    margin:'5% auto 0 auto',

})


const defaultValue ={
    username:'',
    password:'',
    address:'',
    

}

const Emplo =() =>{
    const [user,setUser]= useState({defaultValue});
    
    const onValueChange =(e) => {
        console.log(e.target.value)
        setUser({...user, [e.target.name]:e.target.value})
    }

    const addUserDetails = async ()=>{
       await addUser(user);
    }
  return (
    <Container>
        <Typography variant='h4'>Add User</Typography>
        <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='name'/>
        </FormControl>

        <FormControl>
            <InputLabel>Password</InputLabel>
            <Input  onChange={(e)=>onValueChange(e)} name='password'/>
        </FormControl>

        <FormControl>
            <InputLabel>Address</InputLabel>
            <Input onChange={(e)=>onValueChange(e)} name='Adress'/>
        </FormControl>

        
        <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>Add user</Button>
        </FormControl>
    </Container>

  )
}

export default Emplo