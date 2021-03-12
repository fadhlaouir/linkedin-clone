import React from "react";
import "./Feed.scss";
import InputOption from "./InputOption";
import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__inputContainer__input">
          <Create />
          <form>
            <input type="text" />
            <button type="submit">Send</button>
          </form>
        </div>
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
    </div>
  );
}

export default Feed;
