import React,{useState} from 'react';
import {gql,useMutation} from '@apollo/client';

import { CREATE_USER } from '../graphql/mutations';

const CreateUser = () => {

    const [name,setName] = useState("");
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    const [createUser,{loading,data,error,called}] = useMutation(CREATE_USER,{
        variables:{
            name:name,
            username:username,
            email:email,
            phone:phone

        }
    });
    console.log({loading,data,error,called})
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name"/>
            <input type="text" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Enter your username"/>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email"/>
            <input type="text" value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Enter your phone"/>
            <button onClick={()=>createUser()}>Create user</button>
        </div>
    );
};

export default CreateUser;