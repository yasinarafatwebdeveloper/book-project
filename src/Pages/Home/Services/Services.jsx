import { useEffect, useState } from "react";
import BookService from "../Home/BookService/BookService";


const Services = () => {

const [services,setServices]=useState([])
useEffect(()=>{
fetch("http://localhost:5000/service")
.then(res=>res.json())
.then(output=>setServices(output))

},[])

console.log(services)
    return (
        <div>
            <div className="text-center">

            
    <h1 className="text-3xl">Our books service</h1>
    <h3 className="text-2xl">All Books and All Authors have name here</h3>

    <p>Books are the best option for self-learners to avail of information on all issues and topics. Great Authors, writers, and poets put all their emotions, thoughts and experience to make books important and beneficial for us.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
{
 services.map(service=><BookService key={service._id} service={service}></BookService>)   
}

    </div>
        </div>
    );
};

export default Services;