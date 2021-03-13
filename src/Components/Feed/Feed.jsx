import React, { useState } from "react";
import "./Feed.scss";
import InputOption from "./InputOption";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import Post from "./Post";

function Feed() {
  const [posts, setPosts] = useState([]);
  const sendPost = (event) => {
    event.preventDefault(); // stop refresh the page when click enter (Send btn)
    setPosts([...posts]);
  };
  return (
    <div className="feed">
      {/* Create Post Form */}
      <div className="feed__inputContainer">
        {/* Input */}
        <div className="feed__inputContainer__input">
          <Create />
          <form>
            <input type="text" />
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
      {posts.map((post) => (
        <Post
          name="name"
          decription="decription"
          message=" sdqsdsqd sdqsd qdqsdsq sdqs sdqsdsqd sqdsq dsqd sqd qsd qge"
          photoUrl="photoUrl"
        />
      ))}
    </div>
  );
}

export default Feed;
