import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

const EditProfile = () => {
    return (  
        <div className="container rounded-5 border mt-5" >
        <div className="row ">
            <div className="pt-5 ms-2" as={Col}>
                <h3 className="text-dark text-start" style={{fontFamily:'Philosopher, sans-serif' }}>Edit Profile</h3>
                <div className="border border-1" as={Col} style={{height: "2px", backgroundColor: "rgb(228, 228, 228)"}}>
                </div>
            </div>
            <div className="col-9" style= {{borderRadius: "30px", border: "2px solid rgb(236, 236, 236)"}}>
                <Form className="mx-4 mt-4 py-2 mb-3" >
                        <div as={Col}>
                            <div className="rounded-circle border border-2 py-2 shadow-sm m-auto" style={{width: "150px" , height: "150px"}}></div>
                        </div>

                        <Form.Group className="mb-3" controlId="formEmail">
                          <Form.Label>user email</Form.Label>
                          <Form.Control type="email" placeholder="type your email" className='rounded-3 border border-2' />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formUsername">
                          <Form.Label>username</Form.Label>
                          <Form.Control type="text" placeholder="type your username" className='rounded-3 border border-2' />
                        </Form.Group>

                        <Row>
                        <Form.Group as={Col} controlId="formPassword">
                          <Form.Label>password</Form.Label>
                          <Form.Control type="password" placeholder="*************" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formRepeatPassword">
                          <Form.Label>repeat password</Form.Label>
                          <Form.Control type="password" placeholder="*************" />
                        </Form.Group>
                        </Row>

                        <div class="text-end col-12 my-4 ">
                            <Link to="/allusers"  class="btn btn-primary mx-2 px-5 text-decoration-none d-inline-block" style={{borderRadius: "35px",fontSize: "20px"}}>save</Link>
                            <Link to="/allusers" class="btn btn-danger mx-2 px-5 text-decoration-none d-inline-block" style={{borderRadius: "35px",fontSize: "20px"}}>cancel</Link>
                        </div>
                </Form>
            </div>
        </div> 
    </div>
    );
}
 
export default EditProfile;