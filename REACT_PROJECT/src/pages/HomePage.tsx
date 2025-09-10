import "../styles/homeStyle.css";
import PostesComps from "../components/application-layout/PostesComps";
import getPosts from "../api/getPosts";
import { useEffect, useState } from "react";

type PostProp = {
  key: number;
  userName: string;
  time: string;
  imageUrl: string;
  post: string;
};

export default function HomePage() {

  const [posts, setPosts] = useState<PostProp[]>([]);
  const [message, setMessage] = useState("");

  async function readPosts() {
    try {
      const res = await getPosts();
      if (!res.success) {
        setMessage(res.error || "Unknown error, please try again.");
        return;
      }
      setPosts(res.data);
      setMessage("");
    } catch (err) {
      console.error("error is: ", err);
      setMessage("Sorry, there is a problem with the server. Try again later.");
    }
  }

  useEffect(() => {
    setMessage("Loading...");
    readPosts();
  }, []);
  return (
    <div id="home">
      <p id="message">{message}</p>
      <div id="posts">
        {posts.map((item) => (
          <PostesComps
            key={item.key}
            userName={item.userName}
            time={item.time}
            imageUrl={item.imageUrl}
            post={item.post}
          />
        ))}
      </div>
    </div>
  );
}
