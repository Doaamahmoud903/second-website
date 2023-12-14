import React from 'react';
import { CompanyData } from './../../Components/Papers/CompanyPaperData';
import { Row } from 'react-bootstrap';
import PaginationBar from '../../Components/Global/PaginationBar';
import SearchBar from '../../Components/Global/SearchBar';

const Paper = () => { 

  return ( 
  <div className="container">
  <SearchBar pageTitle="Company Paper" />
  <Row className="m-auto" style={{backgroundColor: "#EDF2F7"}}>
    <div className="col-md-2">
      <div className="p-3 text-center" style={{backgroundColor: "#EDF2F7"}}>#</div> 
    </div>
    <div className="col-md-2">
      <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>Document</div>
    </div>
    <div className="col-md-2">
      <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>status</div>
    </div>
    <div className="col-md-2">
      <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>upload date</div>
    </div>
    <div className="col-md-2">
      <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>last modified</div>
    </div>
    <div className="col-md-2">
      <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>Actions</div>
    </div> 
  </Row>

  <Row className="m-auto" style={{borderBottom: "#EDF2F7 2px solid"}}>
  {CompanyData.map(paper => (
    <>
       <div className="col-md-2">
           <div className="p-3  text-center" key={paper.id}>{paper.id}</div>
       </div>
       <div className="col-md-2">
           <div className="p-3  text-left">{paper.document}</div>
       </div>
       <div className="col-md-2">
           {
          paper.status === 'valid'?<div className="p-3  text-left text-success">valid</div>:
           <div className="p-3  text-left text-danger">{paper.status}</div>
           }
       </div>
       <div className="col-md-2">
           <div className="p-3  text-left">{paper.uploadDate}</div>
       </div>
       <div className="col-md-2">
           <div className="p-3  text-left">{paper.lastModified}</div>
       </div>
       <div className="col-md-2 p-3  row  text-left">
        <button className='btn btn-primary rounded' style={{width:"120px"}}>Live Chat </button>
       </div>
      </>
        ))}
  </Row>
<PaginationBar />
</div> 
);
}
 
export default Paper;