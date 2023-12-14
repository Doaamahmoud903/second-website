import React from 'react';
import { Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const AddService = () => {
    return ( 
  <div className="container rounded-5 border mt-5" >
  <div className="row ">
      <div className="pt-5 ms-2" as={Col}>
          <h3 className="text-dark text-start" style={{fontFamily:'Philosopher, sans-serif' }}>Add New Service</h3>
          <div className="border border-1" as={Col} style={{height: "2px", backgroundColor: "rgb(228, 228, 228)"}}>
          </div>
      </div>
      <div className="col-9" style= {{borderRadius: "30px", border: "2px solid rgb(236, 236, 236)"}}>
      <Form className="mx-4 mt-4 py-2 mb-3" >
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>user email</Form.Label>
          <Form.Control type="email" placeholder="type your email" className='border-2' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>username</Form.Label>
          <Form.Control type="text" placeholder="type your username" className='border-2' />
        </Form.Group>

      <Row>
        <Form.Group as={Col} className="mb-3" controlId="formServiceName">
          <Form.Label>service name</Form.Label>
          <Form.Control type="text" placeholder="add new service" className='border-2' />
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formServiceCode">
          <Form.Label>Serial-code</Form.Label>
          <Form.Control type="text" placeholder="add new service" className='border-2' />
        </Form.Group>
      </Row>

      <div class="text-end col-12 my-4 ">
      <Link to="/allservices"  class="btn btn-primary mx-2 px-5 text-decoration-none d-inline-block" style={{borderRadius: "35px",fontSize: "20px"}}>save</Link>
      <Link to="/allservices" class="btn btn-danger mx-2 px-5 text-decoration-none d-inline-block" style={{borderRadius: "35px",fontSize: "20px"}}>cancel</Link>
      </div>
      
      </Form>
            </div>
        </div> 
    </div>
     );
}
 
export default AddService;