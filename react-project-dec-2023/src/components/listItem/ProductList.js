import React, { useState } from "react";
import productsArr from "./products.json";
import SearchBar from "react-js-search";
import ReactPaginate from "react-paginate";
import "./ProductList.css";

export default function ProductList() {
  const [filteredProducts, setFilteredProducts] = useState(productsArr);

  const sortAsc = () => {
    let sortedProducts = filteredProducts.sort((p1, p2) => p1.price - p2.price);
    setFilteredProducts([...sortedProducts]);
  };
  const sortDesc = () => {
    let sortedProducts = filteredProducts.sort((p1, p2) => p2.price - p1.price);
    setFilteredProducts([...sortedProducts]);
  };

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;

  const endOffset = itemOffset + itemsPerPage;
  const products = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    console.log(event);
    console.log(event.selected);

    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <SearchBar
              onSearchTextChange={(term, filteredData) => {
                setFilteredProducts([...filteredData]);
              }}
              // onSearchButtonClick={onSearchClick}
              placeHolderText={"Search here..."}
              data={productsArr}
            />
          </div>
          <div className="col-sm-4 mt-2">
            <button onClick={sortAsc} className="btn btn-primary m-1">
              Asc
            </button>
            <button onClick={sortDesc} className="btn btn-secondary">
              Desc
            </button>
          </div>
        </div>
        <div className="row mt-3">
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

          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
        </div>
      </div>
    </>
  );
}

// Explanation:
// The provided code looks like a snippet of JSX typically used in a React component. JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside your JavaScript. React then compiles this to actual JavaScript that manipulates the browser's DOM.

// Here's what this code seems to be doing:

// 1. **`<div className="col-sm-8">`**: This is a div element with a Bootstrap class `col-sm-8`, which indicates that the element should take up 8 columns in a grid for small to medium-sized screens (Bootstrap's grid system divides the width of the page into 12 columns so this will take up roughly two-thirds of the available horizontal space).

// 2. **`<SearchBar .../>`**: Inside this `<div>`, a React component called `SearchBar` is being rendered. This component is likely to be a custom component that provides a user interface for a search functionality.

// 3. **`onSearchTextChange={(term, filteredData) => {...}}`**: `SearchBar` takes a prop named `onSearchTextChange`, which is expecting a function. When the search text changes (likely as the user types into the search bar), `SearchBar` will execute this function providing a `term` (what the user is typing) and `filteredData` (the results of filtering some list based on the search term). In this function, the new filtered list of products is set within the state of the parent component by calling `setFilteredProducts([...filteredData])`.

// 4. **`placeHolderText={"Search here..."}`**: Another prop is being passed to `SearchBar` which is `placeHolderText`. This is most likely to be a string to be shown as placeholder text within the search input when it's empty.

// 5. **`data={productsArr}`**: The last prop, `data`, is being used to provide `SearchBar` with the data array `productsArr`. This array is probably the full list of products that the search bar can filter through based on the user’s input.

// 6. **`// onSearchButtonClick={onSearchClick}`**: There is a commented out prop called `onSearchButtonClick`. It suggests there’s another event handler for a search button click, but it’s not active in the current code snippet.

// It appears that the primary functionality of this code is to provide a live search feature where the displayed products are filtered according to what the user types in the search bar. `setFilteredProducts` would be an updater function from a `useState` hook in the parent component which manages the state for the filtered list of products.

// If you're implementing this code, you should ensure that the `SearchBar` component is properly defined and manages the input events and filtering logic correctly, calling the provided `onSearchTextChange` with the correct arguments. You would also need to ensure that the state management in the parent component is set up to keep track of the list of filtered products (`filteredProducts`) and the original products list (`productsArr`).
