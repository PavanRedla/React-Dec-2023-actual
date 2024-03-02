// Assignment:

// Fetch the data from the below url and display the products data in card

//  https://fakestoreapi.com/products

// 1. Using Axios
// 2. When data is being fetched display a loading icon

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductFetch() {
  const [productsa, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    let response = await axios.get(url);
    console.log(response.data);
    setProducts(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchProducts();
  }, []);

  return (
    <>
      {isLoading ? (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="container text-center">
          <div className="row">
            {productsa.map((product) => {
              return (
                <div className="col-md-3" key={product.id}>
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
                      <p
                        className="card-text text-truncate"
                        title={product.price}
                      >
                        {product.price}
                      </p>
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
