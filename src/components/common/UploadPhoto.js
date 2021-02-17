import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './UploadPhoto.css';
import BrBlock from './BrBlock';


const UploadPhotoBlock = () => {
  return (
    <>
      <BrBlock />
      <div className = 'UploadPhoto_container'> 
        <div className = 'photoupload_box'>
          <br />
          <br />
          <div className = 'photoupload'>  
            <Form.File id="exampleFormControlFile1" label="Upload your photo and share with others!"/>
          </div>
          <br />
          <div className = 'caption'>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
          </div>
          <br />
            <div className = 'uploadButton'>
              <Button variant="light" >upload</Button>
            </div>
            <br />
          </div>
        </div>
    </>
  )
}

export default UploadPhotoBlock;