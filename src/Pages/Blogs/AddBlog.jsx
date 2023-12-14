import React ,{ useCallback, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';

const AddBlog = () => {
    const onDrop = useCallback((acceptedFiles) => {
        // Handle dropped files
        console.log(acceptedFiles);
      }, []);
    
      const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
      } = useDropzone({
        onDrop,
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg'],
            'text/html': ['.html', '.htm'],
          }
      });
    
      const containerClass = useMemo(() => {
        if (isDragAccept) return 'accept';
        if (isDragReject) return 'reject';
        return '';
      }, [isDragAccept, isDragReject]);
        
    return ( 
    <div className="container mt-3">
        <h4 className='my-1 m-4'>add new blog</h4>
    <Form className='w-50 border py-5 px-3' style={{borderRadius:"30px"}}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formTitle">
          <Form.Label>title</Form.Label>
          <Form.Control type="text" placeholder="your blog title" className='border-2' />
        </Form.Group>

        <Form.Group as={Col} controlId="formTag">
          <Form.Label>tags</Form.Label>
          <Form.Control type="text" placeholder="enter tags" className='border-2'/>
        </Form.Group>
      </Row>

      <Row className="mb-3 pt-3">
        <Form.Group as={Col} controlId="formPhoto">
        <Form.Label>upload photo</Form.Label>
        <Card
            {...getRootProps({
              className: `dropzone ${containerClass}`,
            })}
          >
            <input {...getInputProps()} />
            <Card.Body>
              {isDragActive ? (
                <Card.Title>Drop the files here</Card.Title>
              ) : (
                <Card.Title className='text-center'><i className="fas fa-upload" style={{fontSize:"100px",color:"#878A8D"}}></i></Card.Title>
              )}
            </Card.Body>
          </Card>
        </Form.Group>
        <Form.Group as={Col} controlId="formTag">
          <Form.Label>categories</Form.Label>
          <Form.Control type="text" placeholder="your blog categories" className='border-2' />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="FormTextarea">
        <Form.Label>write down your blog</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='your blog' className='border-2' />
      </Form.Group>
     

      <div className='w-25 m-auto'>
      <Button type="submit" className='btn m-auto rounded-pill fw-bold mt-3' 
      style={{background:"#007bff" ,borderColor:"#007bff",width:"200px"}}>
        publish
      </Button>
      </div>
      </Form>
    </div> 
     );
}
 
export default AddBlog;