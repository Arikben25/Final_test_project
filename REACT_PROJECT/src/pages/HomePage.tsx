import "../styles/homeStyle.css";
import myImage2 from "../../public/image.png";
import myImage from "../../public/IMG-20250907-WA0006.jpg";
import PostesPage from "../components/application-layout/PostesComps";
import getPosts from "../api/getPosts";
import { useEffect, useState } from "react";
import Logo from "../components/logo";

type PostProp = { key: number; userName: string; time: string; imageUrl:string; post: string };

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
      setMessage("")
    } catch (err) {
      console.error("error is: ", err);
      setMessage("Sorry, there is a problem with the server. Try again later.");
    }
  }

  useEffect(()=>{
    setMessage("Loading...")
    readPosts()
  },[])
  return (
    <div id="home">
      <Logo/>
      <p id="message">{message}</p>
      <div id="posts">
        {posts.map((item) => (
        <PostesPage
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

// const arr = [
//   { userName: "arik", time: "10:20", imageUrl: myImage2,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
//   { userName: "arik", time: "10:20", imageUrl: myImage2 ,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
//   { userName: "arik", time: "10:20", imageUrl: myImage2 ,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
//   { userName: "arik", time: "10:20", imageUrl: myImage2 ,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
//   { userName: "arik", time: "10:20", imageUrl: myImage2 ,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
//   { userName: "arik", time: "10:20", imageUrl: myImage2 ,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
// ];
