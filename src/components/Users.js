import React from 'react';
import {gql, useQuery} from '@apollo/client';

import {GET_USERS} from '../graphql/queries';

const Users = () => {

    const {loading,data,error} = useQuery(GET_USERS);

    if(loading) return <h3>Loading ...</h3>
    if(error) return <h3>Something went wrong.</h3>
    return (<div>
        {
            data.users.data.map(user=><div key={user.id}>
                 <h1>{user.name}</h1>
                 <p>{user.email}</p>
                 <p>{user.phone}</p>
            </div>)
        }
    </div>)
};

export default Users;