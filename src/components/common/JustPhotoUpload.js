const [attachment, setAttachment] = useState('');
// 
  const onSubmit = async (event) => {
    event.preventDefault();
    const fileRef = storageService.ref().child(`${userObj}/${uuidv4()}`);
    const response = await fileRef.putString(attachment, "data_url");
    console.log(response);
  }

// 
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
// 여기까지 사진 업로드 부분



// const [caption, setCaption] = useState('');
//   const onSubmit = (event) => {
//     event.preventDefault();
//     await dbService.collection("posts").add({
//       username,
//       caption
//     });
//     setCaption('');
//   };

//   const onChange = (event) => {
//     const {
//       target : {value},
//     } = event;
//   };
//   setNewPost(value);

게시글업로드맨