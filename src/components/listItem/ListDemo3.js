import React from "react";
import products from "./products.json";

export default function ListDemo3() {
  return (
    <>
      <h2 className="text-center">Product List</h2>

      <div className="container">
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-sm-3 mb-1" key={product.id}>
                <div className="card">
                  <img
                    src={product.image}
                    className="card-img-top"
                    style={{ height: "200px" }}
                    alt="something"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{product.category}</h5>
                    <p
                      className="card-text text-truncate"
                      title={product.description}
                    >
                      {product.description}
                    </p>
                    <button className="btn btn-primary">Buy Now</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

//Practice

// import React from "react";
// import products from "./products.json";

// export default function ListDemo3() {
//   return (
//     <>
//       <h2 className="text-center">Products List</h2>

//       <div className="container">
//         <div className="row">
//           {products.map((product) => {
//             return (
//               <div className="col-sm-3 mb-1" key={product.id}>
//                 <div className="card">
//                   <img
//                     src={product.image}
//                     className="card-img-top"
//                     style={{ height: "200px" }}
//                     alt="..."
//                   />
//                   <div className="card-body text-center">
//                     <h5 className="card-title">{product.category}</h5>
//                     <p className="card-text text-truncate">
//                       {product.description}
//                     </p>
//                     <button className="btn btn-primary">Buy Now</button>
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
