import React,{useState} from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '../graphql/queries';

const UserOnClick = () => {

    const [id,setId] = useState(2);

   

    const changeHandler = event =>{
        setId(event.target.value)
    }

    const [getUser,{loading,data,error,called}] = useLazyQuery(GET_USER,{
        variables:{id:id}
    })
    return (
        <div>
            <input placeholder="Enter your id" value={id} onChange={changeHandler}/>
            <button onClick={()=>getUser()}>Get user</button>
            {loading && <h3>Loading ...</h3>}
            {error&& <p>Something went wrong.</p>}
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

export default UserOnClick;