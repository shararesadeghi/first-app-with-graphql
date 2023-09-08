import React,{useState} from 'react';
import { useMutation } from '@apollo/client';
import { DELETE_USER } from '../graphql/mutations';

const DeleteUser = () => {
    const [id,setId] = useState("");

    const [deleteUser,{loading,data,error}] = useMutation(DELETE_USER,{
        variables:{
            id:id
        }
    })

    console.log({loading,data,error});
    return (
        <div>
           <input type="text" placeholder="Enter id" value={id} onChange={e=>setId(e.target.value)}/> 
           <button onClick={deleteUser}>Delete user</button>
        </div>
    );
};

export default DeleteUser;