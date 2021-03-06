import React from 'react';
import './UploadPost.css';

const UploadPost = ({username}) => {

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