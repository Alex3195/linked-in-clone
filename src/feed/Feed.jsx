import React, { useEffect, useState } from 'react'
import CreateIcon from '@material-ui/icons/Create';
import '../styles/Feed.css';
import InputOption from './input options/InputOption';
import { Image, Subscriptions, EventNote, CalendarViewDay } from '@material-ui/icons';
import Post from './post/Post';
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    // setDoc,
    // updateDoc,
    // doc,
    serverTimestamp,
} from "firebase/firestore";
import {
    // getStorage,
    // ref,
    // uploadBytesResumable,
    // getDownloadURL,
} from 'firebase/storage';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import FlipMove from 'react-flip-move';
function Feed() {
    const [post, setPosts] = useState([]);
    const [input, setInput] = useState('');
    const user = useSelector(selectUser);
    function loadMessages() {
        // Create the query to load the last 12 messages and listen for new ones.
        const recentMessagesQuery = query(collection(getFirestore(), 'post'), orderBy('timestamp', 'desc'), limit(12));
        // Start listening to the query.
        onSnapshot(recentMessagesQuery, function (snapshot) {
            setPosts(snapshot.docChanges().map((doc) => ({
                id: doc.doc.id,
                data: doc.doc.data()
            })));
        });
    }

    // async function getPosts() {
    //     const postsCol = collection(getFirestore(firebaseApp), 'post');
    //     const postSnapshot = await getDocs(postsCol);
    //     const postList = postSnapshot.docs.map(doc => ({
    //         id: doc.id,
    //         data: doc.data()
    //     }));
    //     setPosts(postSnapshot.docs.map(doc => ({
    //         id: doc.id,
    //         data: doc.data()
    //     })));
    // }

    async function savePosts() {
        console.log("save post");
        // Add a new message entry to the Firebase database.
        try {
            console.log(user);

            await addDoc(collection(getFirestore(), 'post'), {
                name: user.displayName,
                description: 'This is description',
                message: input,
                photoUrl: user.photoURL || "",
                timestamp: serverTimestamp(),
            });
            setInput("");

        }
        catch (error) {
            console.error('Error writing new message to Firebase Database', error);
        }
    }

    useEffect(() => {
        loadMessages();
    }, [post])

    const sendPost = (e) => {
        e.preventDefault();
        savePosts();
        console.log('called');
    }
    return (
        <div className='feed'>
            <div className='feed_inputContainer'>
                <div className='feed_input'>
                    <CreateIcon />
                    <form>
                        <input type="text" value={input} onChange={e => { setInput(e.target.value) }} />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed_inputOptions'>
                    <InputOption Icon={Image} title="Photo" color="#70B5f9" />
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
                    <InputOption Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
                </div>
            </div>
            <FlipMove>
                {
                    post.map((data) => {
                        return <Post key={data.id}
                            name={data.data.name}
                            description={data.data.description}
                            message={data.data.message}
                            photoUrl={data.data.photoUrl} />
                    })
                }
            </FlipMove>


        </div>
    )
}

export default Feed;
