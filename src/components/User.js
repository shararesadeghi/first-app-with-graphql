import React,{useState} from 'react';
import { useQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const User = () => {

    const [id,setId] = useState(2);

   

    const changeHandler = event =>{
        setId(event.target.value)
    }

    const {loading,data,error} = useQuery(GET_USER,{
        variables:{id:id}
    })
    console.log(data);
    if(loading) return <h3>Loading ...</h3>
    if(error) return <h3>Something went wrong.</h3>
    return (
        <div>
            <input placeholder="Enter your id" value={id} onChange={changeHandler}/>
            {
                data && 
                <> 
                 <h1>{data.user.name}</h1>
                 <p>{data.user.email}</p>
                 <p>{data.user.phone}</p>
                </>
            }
        </div>
    );
};

export default User;