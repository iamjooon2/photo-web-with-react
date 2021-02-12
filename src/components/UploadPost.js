import React from 'react';
import './UploadPost.css';

const UploadPost = ({username}) => {
  const {image, setImage} = useState(null);
  const {progress, setProgress} = useState('');
  const {caption, setCaption} = useState('');

  const handleChange = (e) => {
    if (e.target.files[0]){
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref('images/${image.name}').put(img);

    uploadTask.on(
      "state changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      (error) => {

      }
    )
  }
  return (
    <div className = "UploadPost">
      <progress value = {progress} max = "100" />
        <input type = "text" placeholder = "enter a caption" onChange = {}/>
        <input file = "file" onChange = {handleChange} />
        <Button onClick = {handleUpload}>
          upload
        </Button>
    </div>
  )
}

export default UploadPost;