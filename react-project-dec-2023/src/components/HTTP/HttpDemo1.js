import React, { useState } from 'react'
import { useEffect } from 'react';
import UserCard from '../listItem/UserCard';

export default function HttpDemo1() {
    const [users, setUsers] = useState([]);
    const fetchUsers = () => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url).then(response => {
            response.json().then(users => {
                console.log(users);
                setUsers(users);
            })
        })
    }
    useEffect(() => {
        fetchUsers()
    }, []);
    return <>
        <h2 className='text-center'>Fetch Users data </h2>
        <div className='container'>
            <div className='row'>
                {users.map(user => {
                    return <UserCard user={user} />
                })}
            </div>
        </div>
    </>
}
