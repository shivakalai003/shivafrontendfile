import React, { Fragment, useState } from 'react'
import UserForm from './userForm';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Updateuser() {
    const [error,seterror]=useState("");
    const {userId}=useParams();
   async  function handleSubmit (userdata){
        try {
            
            const data=axios.put(`http://localhost:4000/users/update/:id ${userId}`);
            console.log(data);

        } catch (error) {
            seterror(error);
            
        }
       
       
    }
  return (
    <Fragment>
    <UserForm handlesubmit={handleSubmit} error={error} />  3
   </Fragment>

  )
}

export default Updateuser;