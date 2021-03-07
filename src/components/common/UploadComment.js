import React, {useState, useEffect} from 'react';
import {InputGroup, Button, FormControl, Form} from 'react-bootstrap';
import './UploadComment.css';
import { v4 as uuidv4 } from "uuid";
import BrBlock from './BrBlock';
import { dbService, storageService, authService} from '../../fbase';

const UploadComment = () => {

  const [comment, setComment] = useState('');
  const [userObj, setUserObj] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=> {
    authService.onAuthStateChanged((user)=> { // onAuthService에서 실제로 로그인 되어있는지 확인 가능
      if (user){
          setIsLoggedIn(true);
          setUserObj(user);
          } else {
           setIsLoggedIn(false); 
          }
      }); 
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection('comments').add({
      comment : comment,
      username : userObj.displayName,
    });
    setComment('');
  }

  const onChange = (event) => {
    const {
      target : {value},
    } = event;
    setComment(value);
  }
  


  return (
    <>
      <div className = 'input_container'>
        <InputGroup className="mb-3" onSubmit = {onSubmit}>
          <FormControl
            placeholder="leave a comment"
            value = {comment} onChange = {onChange}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" type = 'submit'>
              post
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      <br />
    </>
  );
};

export default UploadComment;