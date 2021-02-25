import React from 'react';
import {InputGroup, Button, FormControl} from 'react-bootstrap';
import './UploadComment.css';

const UploadComment = () => {
  return (
    <>
      <div className = 'input_container'>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="leave a comment"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary">
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