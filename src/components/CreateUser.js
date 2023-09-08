import React from 'react';
import {gql,useMutation} from '@apollo/client';

const CREATE_USER = gql`
    mutation{
  createUser(input:{
    name:"sheri"
    username:"sheri.s"
    email:"sheri@gmail.com"
    phone:"09141841111"
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

    const [createUser,{loading,data,error,called}] = useMutation(CREATE_USER);
    console.log({loading,data,error,called})
    return (
        <div>
            <button onClick={()=>createUser()}>Ceate user</button>
        </div>
    );
};

export default CreateUser;