import React, { useState } from "react";
import { useEffect } from "react";
import UserCard from "../listItem/UserCard";
import axios from "axios";

export default function HttpDemo3() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    let response = await axios.get(url);
    console.log(response);
    setUsers(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
  }, []);
  return (
    <>
      <h2 className="text-center">Fetch Users data - HTTP Demo3 </h2>
      <div className="container">
        <div className="row">
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            users.map((user) => {
              return <UserCard user={user} key={user.id} />;
            })
          )}
        </div>
      </div>
    </>
  );
}
