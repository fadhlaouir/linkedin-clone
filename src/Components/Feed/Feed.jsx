import React, { useState, useEffect } from "react";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../../firebase/firebase";
import firebase from "firebase";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import "./Feed.scss";

function Feed() {
  // Add Posts
  const [posts, setPosts] = useState([]);
  // to store the input
  const [input, setInput] = useState("");

  useEffect(() => {
    // connect to db
    db.collection("posts")
      .orderBy("timestamp", "desc") // sort by time
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  const sendPost = (event) => {
    // stop refresh the page when click enter (Send btn)
    event.preventDefault();
    // add post to firebase
    db.collection("posts").add({
      name: "Raed Fadhlaoui",
      description: "this is a test",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), // to change the time for each country
    });
    // clear the input after adding post
    setInput("");
  };
  return (
    <div className="feed">
      {/* Create Post Form */}
      <div className="feed__inputContainer">
        {/* Input */}
        <div className="feed__inputContainer__input">
          <Create />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        {/* Input Option Photo, Video, Event... */}
        <div className="feed__inputContainer__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {/*  Posts  */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  );
}

export default Feed;
