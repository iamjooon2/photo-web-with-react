import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './UploadPhoto.css';
import { v4 as uuidv4 } from "uuid";
import BrBlock from './BrBlock';
import { storageService } from '../../fbase';

const UploadPhotoBlock = ({userObj}) => {

  const [attachment, setAttachment] = useState([]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const fileRef = storageService.ref().child(`${userObj}/${uuidv4()}`);
    const response = await fileRef.putString(attachment, "data_url");
    console.log(response);
  }

  const onFileChange = (event) => {
    const {
      target: {files},
    } = event;
    const theFile = files[0];
    //파일 하나만 받게 함
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget : { result },
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => setAttachment(null);

  return (
    <>
      <BrBlock />
      <div className = 'UploadPhoto_container'> 
        <div className = 'photoupload_box'>
          <br />
          <br />
          <div className = 'photoupload'>  
            <Form.File id="exampleFormControlFile1" 
                        label="Upload your photo and share with others!" 
                        accept ='image/*'
                        onChange = {onFileChange}
                        />
          </div>
          <br />
          <div className = 'caption'>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control as="textarea" rows={1} />
            </Form.Group>
          </div>
          <br />
            <div className = 'uploadButton' onClick ={onSubmit}>
              <Button variant="light" >upload</Button>
            </div>
            <br />
          </div>
        </div>
    </>
  )
}

export default UploadPhotoBlock;