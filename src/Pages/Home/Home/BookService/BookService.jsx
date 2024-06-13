import { Link } from "react-router-dom";


const BookService = ({service}) => {
    const {_id,book_name,category,image,author_name,short_description}=service
    return (
        <div className="card  bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{author_name}</h2>
          <p>{book_name}</p>
          <p>{category}</p>
          <p>{short_description}</p>
          <div className="card-actions justify-end">
           <Link to={`/checkout/${_id}`}>
           <button className="btn btn-primary">Book Now</button>
           
           </Link>
          </div>
        </div>
      </div>
    );
};

export default BookService;