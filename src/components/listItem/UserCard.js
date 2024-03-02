import React from "react";

export default function UserCard({ user }) {
  let {
    name,
    email,
    address,
    address: { city },
    phone,
  } = user;
  return (
    <div className="col-sm-3">
      <div className="card text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/3899/3899618.png"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">Email : {email}</p>
          <p className="card-text">Address : {city}</p>
          <p className="card-text">Phone : {phone}</p>
          <a href="#" className="btn btn-primary">
            Details
          </a>
        </div>
      </div>
    </div>
  );
}
