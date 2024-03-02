import React, { useEffect, useState } from "react";

export default function LifeCycleDemo4() {
  const [userId, setUserId] = useState(1);
  const [userInfo, setUserInfo] = useState({});

  const increment = () => {
    setUserId(userId + 1);
  };
  const fetchUserData = async (id) => {
    let resp = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    let userInfo = await resp.json();
    setUserInfo(userInfo);
  };
  useEffect(() => {
    fetchUserData(); // logic - on Load / on Update
    // This code gets executed onLoad , onChange

    return () => {
      console.log("COmp will unmount"); // when we write another function in useEffect method then it gets called when component is unmounted i.e., componentWillUnmount.
    };
  }, [userId]); // fetchUserData() function will gets called when userId gets changed as we passed it in array.

  //   useEffect(() => {
  //     fetchUserData(); // logic - on Load / on Update
  //     // This code gets executed onLoad , onChange

  //     return () => {
  //       console.log("COmp will unmount"); // when we write another function in useEffect method then it gets called when component is unmounted i.e., componentWillUnmount.
  //     };
  //   }, [usereInfo]); // fetchUserData() function will gets called when userInfo gets changed as we passed it in array.

  //   useEffect(() => {
  //     fetchUserData(); // logic - on Load / on Update
  //     // This code gets executed onLoad , onChange

  //     return () => {
  //       console.log("COmp will unmount"); // when we write another function in useEffect method then it gets called when component is unmounted i.e., componentWillUnmount.
  //     };
  //   }, []); // fetchUserData() function will gets called only when the page load happens (mount phase)  as we passed an empty array.

  // useEffect(() => {
  //   fetchUserData(); // logic - on Load / on Update
  //   // This code gets executed onLoad , onChange

  //   return () => {
  //     console.log("COmp will unmount"); // when we write another function in useEffect method then it gets called when component is unmounted i.e., componentWillUnmount.
  //   };
  // }); // fetchUserData() function will gets called when the page load happens (mount phase)  and also if any state variable gets changed.

  return (
    <>
      <h2>
        User Id is {userId} and plz check console for the details of this user
      </h2>
      <button onClick={increment}>increment</button>
      <hr />
      <div className="col-sm-3">
        <div className="card text-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{userInfo?.name}</h5>
            <p className="card-text">Email : {userInfo?.email}</p>
            <p className="card-text">Address : {userInfo?.city}</p>
            <p className="card-text">Phone : {userInfo?.phone}</p>
            <a href="#" className="btn btn-primary">
              Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
