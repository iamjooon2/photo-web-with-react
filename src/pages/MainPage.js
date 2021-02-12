import React from 'react';
import Header from '../components/common/Header';
import UploadButton from '../components/common/UploadButton';
import Post from '../components/common/Post';
import Body from '../components/common/Body';

// import {db} from '../firebase';

const MainPage = () => {
    // const [posts, setPosts] = useState([
    //     {
    //         username : "jamm-not-null",
    //         caption : "그 유명한 가천대 최재민씨",
    //         imageUrl : "https://avatars.githubusercontent.com/u/77920690?s=460&u=b5ef9f384e47c25a4bd10902f1b65b089608f84e&v=4"
    //     },
    //     {
    //         username : "98swooong",
    //         caption : "청첩장 드립니다",
    //         imageUrl : "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/142791015_1627353910798795_2115184596640290165_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=2ypcFUI4GCkAX8o36kO&_nc_ht=scontent-ssn1-1.xx&oh=14089d2e20d407716deadc8d2b5298e2&oe=60452E0E"
    //     },
    //     {
    //         username : "fkausqkwl",
    //         caption : "광주 큰 손",
    //         imageUrl : "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/49590962_1180059938837406_6237763763429179392_o.jpg?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_ohc=EkH6561CK98AX-pawv_&_nc_ht=scontent-ssn1-1.xx&oh=edd74909659101a8fdf4b0fbc02563bd&oe=60440C9E"
    //     }
    // ]);
    
//    useEffect(() => {
//        db.collection('posts').onSnapshot(snapshot=> {
//         setPosts(snapshot.docs.map(doc => doc.data()));
//        })
//    }, []);

    return (
        <>
            <Header />
            <br />
            <br />
            <br />
            <Post/>
            <Post/>
            <UploadButton />
        </>
    );
};

export default MainPage;