import React,{useState} from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../graphql/mutations';

const UpadteUser = () => {
    const [id,setId] = useState("");
    const [name,setName] = useState("");

    const [updateUser,{loading,data,error,called}] = useMutation(UPDATE_USER,{
        variables:{
            id:id,
            name:name
        }
    })

    console.log({loading,data,error,called});
    return (
        <div>
            <input type="text" value={id} placeholder="Enter id" onChange={e=>setId(e.target.value)}/>
            <input type="text" value={name} placeholder="Enter name" onChange={e=>setName(e.target.value)}/>
            <button onClick={updateUser}>Update user</button>
        </div>
    );
};

export default UpadteUser;