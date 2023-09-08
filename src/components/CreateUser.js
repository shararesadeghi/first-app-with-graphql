import React,{useState} from 'react';
import {gql,useMutation} from '@apollo/client';

const CREATE_USER = gql`
    mutation CreateUser($name:String!
     $username:String! 
     $email:String! 
     $phone:String!){
      createUser(
         input:{
             name:$name
             username:$username
             email:$email
             phone:$phone
    
      }){
    id,
    name,
    username,
    email,
    phone
  }
}
`;

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
            <input value={name} onChange={e=>setName(e.target.value)} placeholder="Enter your name"/>
            <input value={username} onChange={e=>setUsername(e.target.value)} placeholder="Enter your username"/>
            <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email"/>
            <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Enter your phone"/>
            <button onClick={()=>createUser()}>Create user</button>
        </div>
    );
};

export default CreateUser;