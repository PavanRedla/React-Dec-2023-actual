import React, { useState } from "react";
import { useEffect } from "react";
import UserCard from "../listItem/UserCard";
import client from "./client";
import LoggerHOC from "../HOC/LoggerHOC";

function HttpDemo4() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    let response = await client.get("/users");
    setUsers(response.data);
    setIsLoading(false);
    console.log(users);
  };
  const fetchComments = async () => {
    let response = await client.get("/comments");
    console.log(response.data);
  };
  const fetchPhotoes = async () => {
    let response = await client.get("/photos");
    console.log(response.data);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchUsers();
    fetchComments();
    fetchPhotoes();
  }, []);
  return (
    <>
      <h2 className="text-center">Fetch Users data - HTTP Demo4 </h2>
      <div className="container">
        <div className="row">
          {isLoading ? (
            // <h2>Loading...</h2>
            <div class="spinner-border text-center" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
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
// export HttpDemo4; // This is calling only HttpDemo4
export default LoggerHOC(HttpDemo4); // if we want to use LoggerHoc mechanism for this component then we have to call like this.
