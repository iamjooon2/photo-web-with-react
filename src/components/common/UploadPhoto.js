import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';
import './UploadPhoto.css';
import { v4 as uuidv4 } from "uuid";
import BrBlock from './BrBlock';
import { dbService, storageService, authService} from '../../fbase';

const UploadPhotoBlock = () => {
  const [caption, setCaption] = useState(''); 
  const [attachment, setAttachment]  = useState(); 

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);
  
  useEffect(()=> {
    authService.onAuthStateChanged((user)=> {     // onAuthService에서 실제로 로그인 되어있는지 확인 가능
      if (user){
          setIsLoggedIn(true);
          setUserObj(user);
          } else {
           setIsLoggedIn(false); 
          }
      }); //setInit이 false면 router 자체를 숨길 수도 있음
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    const fileRef = storageService.ref().child(`${uuidv4()}`);
    const response = await fileRef.putString(attachment, "data_url");
    const attachmentUrl = await response.ref.getDownloadURL();
    const postObj = {
      username : userObj.uid,
      caption : caption,
      attachmentUrl
    }
    await dbService.collection("posts").add(postObj);
    setCaption(''); 
  };

  const onChange = (event) => {
    const { 
      target : {value},
    } = event;
    // event안에서 target 속으로 가 파일을 받아온다
    setCaption(value);
  };
  
  const onFileChange = (event) => {
    const { 
      target: { files}
    } = event;
    const theFile = files[0];
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget : {result},
      } = finishedEvent;
      setAttachment(result);
    };
    reader.readAsDataURL(theFile);
  }

  return (
    <>
      <BrBlock />
      <Form onSubmit = {onSubmit}>
      <div className = 'UploadPhoto_container'> 
        <div className = 'photoupload_box' >
          <br />
          <br />
          <div className = 'photoupload'>  
            <Form.File  type = 'file'
                        id="exampleFormControlFile1" 
                        label="Upload your photo and share with others!" 
                        accept ='image/*' 
                        onChange = {onFileChange}/>
          </div>
          <br />
          <div className = 'caption'>
              <Form.Control as="textarea" rows={1} value = {caption} onChange = {onChange} />
          </div>
          <br />
            <div className = 'uploadButton' >
              <Button variant="secondary" type = 'submit'>upload</Button>
            </div>
            <br />
          </div>
      </div>
      </Form>
    </>
  )
}

export default UploadPhotoBlock;