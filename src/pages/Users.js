import React, {useEffect} from 'react';
import axios from 'axios';

const Users = () => {
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                console.log(response)
            });
    }, []);
    return (
        <h1>Users1</h1>
    );
};

export default Users;