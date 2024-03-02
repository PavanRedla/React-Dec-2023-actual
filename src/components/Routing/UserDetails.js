import React, { useState } from 'react'
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function UserDetails() {
    const [user, setUser] = useState({});

    const [searchParams] = useSearchParams();

    useEffect(() => {
        // const currentParams = Object.fromEntries([...searchParams]);
        setUser({
            name: searchParams.get("name"),
            email: searchParams.get("email"),
            city: searchParams.get("city")
        })
    }, [searchParams]);

    return <div className="card text-center col-sm-4 offset-4">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <p className="card-text">Email : {user.email}</p>
            <p className="card-text">Address : {user.city}</p>
        </div>
    </div>
}
