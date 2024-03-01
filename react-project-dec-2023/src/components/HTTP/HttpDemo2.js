import React, { useState } from 'react'
import { useEffect } from 'react';
import UserCard from '../listItem/UserCard';

export default function HttpDemo2() {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        let response = await fetch(url);
        let users = await response.json();
        console.log(users);
        setUsers(users)
    }

    useEffect(() => {
        fetchUsers()
    },[]);
    return <>
        <h2 className='text-center'>Fetch Users data - HTTP Demo2 </h2>
        <div className='container'>
            <div className='row'>
                {users.map(user => {
                    return <UserCard user={user} />
                })}
            </div>
        </div>
    </>
}
