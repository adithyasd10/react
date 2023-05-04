import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EployeeApp
        </Typography>
        <Button color="primary" variant='outlined'>
          <Link to={'/'}>Home</Link>   
          </Button>
        <Button color="primary" variant='outlined'>
        <Link to={'/add'}>Add Employee</Link> 
        </Button>
           
      </Toolbar>
    </AppBar>
  </Box>
    </div>
    
  )
}

export default Navbar
