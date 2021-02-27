import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './UploadPhoto.css';
import { v4 as uuidv4 } from "uuid";
import BrBlock from './BrBlock';
import { dbService, storageService } from '../../fbase';

const UploadPhotoBlock = ({userObj}) => {
  const [caption, setCaption] = useState('');

  // useEffect(() => {
  //   dbService.collection('posts').onSnapshot((snapshot) => {
  //     const postArray = snapshot.docs.map((doc) => ({
  //       id : doc.id,
  //       ...doc.data(),
  //     }));
  //     setPosts(postArray);
  //   });
  // }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("posts").add({
      // attachmentUrl ,
      caption,
      
    });
    setCaption('');
  };

  const onChange = (event) => {
    const { 
      target : {value},
    } = event;
    setCaption(value);
  };
  return (
    <>
      <BrBlock />
      <Form onSubmit = {onSubmit}>
      <div className = 'UploadPhoto_container'> 
        <div className = 'photoupload_box' >
          <br />
          <br />
          <div className = 'photoupload'>  
            <Form.File id="exampleFormControlFile1" 
                        label="Upload your photo and share with others!" 
                        accept ='image/*' />
          </div>
          <br />
          <div className = 'caption'>
              <Form.Control as="textarea" rows={1} value = {caption} onChange = {onChange} />
          </div>
          <br />
            <div className = 'uploadButton' >
              <Button variant="secondary" type = 'submit' >upload</Button>
            </div>
            <br />
          </div>
      </div>
      </Form>
    </>
  )
}

export default UploadPhotoBlock;