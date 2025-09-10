import PostesComps from "../components/application-layout/PostesComps";
import getOnePost from "../api/getOnePost";
import { useState, useEffect } from "react";
import "../styles/Post.css";

export default function GetPost() {
  const [choiceKey, setChoiceKey] = useState("");
  const [message, setMessage] = useState("");
  const [key, setKey] = useState(0);
  const [userName, setUserName] = useState("");
  const [time, setTime] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [post, setPost] = useState("");

  async function readOnePosts() {
    try {
      const res = await getOnePost(choiceKey);
      if (!res.success) {
        setMessage(res.error || "Unknown error, please try again.");
        return;
      }
      setKey(res.data.key);
      setUserName(res.data.userName);
      setTime(res.data.time);
      setImageUrl(res.data.imageUrl);
      setPost(res.data.post);
      setMessage("");
    } catch (err) {
      console.error("error is: ", err);
      setMessage("Sorry, there is a problem with the server. Try again later.");
    }
  }


  useEffect(() => {
    setMessage("Loading...");
    readOnePosts();
  }, [choiceKey]);

  return (
    <div id="a">
      <div id="inputKey">
        <label>Select post by number</label>
        <input type="text" onChange={(e) => setChoiceKey(e.target.value)} />
      </div>
     
      <div id="onePost">
        <PostesComps
          key={key}
          userName={userName}
          time={time}
          imageUrl={imageUrl}
          post={post}
        />
      </div>
      <p>{message}</p>
    </div>
  );
}
