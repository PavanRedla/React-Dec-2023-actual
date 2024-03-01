import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    let [product, setProduct] = useState({});
    const { id } = useParams();

    const fetchProductDetails = async () => {
        let resp = await axios.get(`https://fakestoreapi.com/products/${id}`);
        console.log(resp.data)
        setProduct(resp.data)
    }
    useEffect(() => {
        fetchProductDetails();
    }, [])
    return <>
        <div className='col-sm-4 offset-4'>
            <h1 className='text-center'>Product Details Page</h1>
            <div className="card">
                <img src={product?.image} className="card-img-top" style={{ height: '200px' }} alt='something' />
                <div className="card-body text-center" >
                    <h5 className="card-title">{product?.category}</h5>
                    <p className="card-text text-truncate" title={product?.description}>{product?.description}</p>
                    <p className="card-text text-truncate" title={product?.price}>{product?.price}</p>
                </div>
            </div>
        </div>
    </>
}
