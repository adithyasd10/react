import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import "./style.css"
import axios from "axios";


const Home = () => {
   var [value, setvalue] = useState([])
   useEffect(()=>{
    axios.get("https://dummyjson.com/users").then((response)=>{
      console.log(response.data.users);
      setvalue(value=response.data.users)
    })
   },[])
  return (
    <div>
     <Table class="tble">
     <TableHead>
     <TableRow>
     <TableCell>
      First Name
     </TableCell>
     <TableCell>
      Last Name
     </TableCell>
     <TableCell>
    age
     </TableCell>
     </TableRow>
           </TableHead>  
          
           <TableBody>
            {value.map((data,ind)=>{
              return <TableRow>
                <TableCell>{data.firstName}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell>{data.age}</TableCell>
              </TableRow>

})}

            </TableBody> 

     </Table>
    </div>
  )
}

export default Home
