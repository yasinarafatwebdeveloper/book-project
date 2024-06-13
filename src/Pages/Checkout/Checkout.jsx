// import React from 'react';

import { useLoaderData } from "react-router-dom";

const Checkout = () => {


    const service=useLoaderData()

    const {category,book_name,short_description,image}=service

    return (
        <div className="my-auto mt-auto">
        <div className="card card-side bg-base-100 shadow-xl  ">
  <figure><img src={image} alt="Movie"/></figure>
  <div className="card-body ">
    <h2 className="card-title">{book_name}</h2>
    <p>{category}</p>
    <p>{short_description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
</div>
    );
};

export default Checkout;