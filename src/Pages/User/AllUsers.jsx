import React ,{useState} from 'react';
import { UsersData } from '../../Components/Users/Users';
import PaginationBar from '../../Components/Global/PaginationBar';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import SearchBar from '../../Components/Global/SearchBar';


const AllUsers = () => {
  return (  
        <div className="container">
            <SearchBar pageTitle="All Users" />
        <Row className=" m-auto" style={{backgroundColor: "#EDF2F7"}}>
          <div className="col-md-2">
            <div className="p-3 text-center" style={{backgroundColor: "#EDF2F7"}}>#</div> 
          </div>
          <div className="col-md-2">
            <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>username</div>
          </div>
          <div className="col-md-2">
            <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>email</div>
          </div>
          <div className="col-md-2">
            <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>company</div>
          </div>
          <div className="col-md-2">
            <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>date</div>
          </div>
          <div className="col-md-2">
            <div className="p-3 text-left" style={{backgroundColor: "#EDF2F7"}}>Actions</div>
          </div> 
        </Row>
      
        <Row className=" m-auto" style={{borderBottom: "#EDF2F7 2px solid"}}>
        {UsersData.map(user => (
          <>
             <div className="col-md-2">
                 <div className="p-3  text-center" >{user.id}</div>
             </div>
             <div className="col-md-2">
                 <div className="p-3  text-left" >{user.username}</div>
             </div>
             <div className="col-md-2">
                 {
                 <div className="p-3  text-left" >{user.email}</div>
                 }
             </div>
             <div className="col-md-2">
                 <div className="p-3  text-left" >{user.company}</div>
             </div>
             <div className="col-md-2">
                 <div className="p-3  text-left" >{user.date}</div>
             </div>
             <div className="col-md-2 p-3  row  text-left">
             {
                 <>
                 <div className="col-6 text-left" >
                <Link className="btn  text-decoration-none text-danger p-0" key={user.id}>{user.action[0]}</Link>
                </div>
                 <div className='col-6 text-left'>
                <Link className="btn  text-decoration-none text-danger p-0" key={user.id}>{user.action[1]}</Link>
                </div>
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
 
export default AllUsers;