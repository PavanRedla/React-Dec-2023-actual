// import React from "react";
// import users from "./users.json";

// export default function UserList() {
//   return (
//     <>
//       <h2 className="text-center">User List</h2>
//       <hr />

//       <div className="container">
//         <div className="row">
//           {users.map((user) => {
//             return (
//               <div className="col-sm-3" key={user.id}>
//                 <div className="card text-center">
//                   <img
//                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZNQ6Pte02JNcAfeti0b-oiumHtdNOkXQrCZp7bfQYuxe44LbbaIN0MccovXN04stLDg&usqp=CAU"
//                     className="card-img-top"
//                     alt="..."
//                   />
//                   <div className="card-body">
//                     <h5 className="card-title">{user.name}</h5>
//                     <p className="card-text">Email : {user.email}</p>
//                     <p className="card-text">Address : {user.address.city}</p>
//                     <p className="card-text">Phone : {user.phone}</p>
//                     <a href="#" className="btn btn-primary">
//                       Details
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// Making two components

import React from "react";
import users from "./users.json";
import UserCard from "./UserCard";

export default function UserList() {
  return (
    <>
      <h2 className="text-center">User List</h2>
      <hr />

      <div className="container">
        <div className="row">
          {users.map((user) => {
            return <UserCard user={user} />;
          })}
        </div>
      </div>
    </>
  );
}
