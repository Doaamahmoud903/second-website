import React, { useState } from 'react';
import { ServicesData } from '../../Components/Services/AllServicesData';
import { Row } from 'react-bootstrap';
import SearchBar from '../../Components/Global/SearchBar';
import PaginationBar from '../../Components/Global/PaginationBar';

const AllServices = () => {
  // const [servicesData, setServicesData] = useState([...ServicesData]);

  // let handleDelete =(serviceId) =>{
  //   const updatedData =servicesData.filter(service => service.id !== serviceId);
  //   setServicesData(updatedData);
  //   console.log("Deleted")
  
  // }

    return ( 
      <div className="container">
        <SearchBar pageTitle="All Services" />
      <Row className="row m-auto" style={{backgroundColor: "#EDF2F7"}}>
        <div className="col-md-2">
          <div className="p-3 text-center" style={{backgroundColor: "#EDF2F7"}}>#</div> 
        </div>
        <div className="col-md-2">
          <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>service</div>
        </div>
        <div className="col-md-2">
          <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>Serial-code</div>
        </div>
        <div className="col-md-2">
          <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>upload date</div>
        </div>
        <div className="col-md-2">
          <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>date</div>
        </div>
        <div className="col-md-2">
          <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>Actions</div>
        </div> 
      </Row>
    
      <Row className="m-auto" style={{borderBottom: "#EDF2F7 2px solid"}}>
      {ServicesData.map(service => (
        <>
           <div className="col-md-2">
               <div className="p-3  text-center" >{service.id}</div>
           </div>
           <div className="col-md-2">
               <div className="p-3  text-left" >{service.service}</div>
           </div>
           <div className="col-md-2">
               {
               <div className="p-3  text-left" >{service.SerialCode}</div>
               }
           </div>
           <div className="col-md-2">
               <div className="p-3  text-left" >{service.uploadDate}</div>
           </div>
           <div className="col-md-2">
               <div className="p-3  text-left" >{service.date}</div>
           </div>
           <div className="col-md-2 p-3  row  text-left">
           {
              service.action === 'completed'?<div className="text-left text-success" >Completed</div>:
               <>
               <div className="col-9 text-left" >{service.action}</div>
               <div className='col-3 text-left'><a className="btn  text-decoration-none text-danger p-0" 
              //  onClick={() => handleDelete(service.id)} 
              key={service.id}>Delete</a></div>
               </>
               }
           </div>
          </>
            ))}
      </Row>
      <PaginationBar />
    
    </div> 
     );
}
 
export default AllServices;