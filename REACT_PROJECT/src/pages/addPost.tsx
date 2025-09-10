import { useEffect, useState } from "react";
import createPost from "../api/createPost"
import "../styles/createPost.css"

export default function AddPost(){
      const [message, setMessage] = useState("");
      const [key, setKey] = useState("1");
      const [userName, setUserName] = useState("");
      const [time, setTime] = useState(Date.now());
      const [imageUrl, setImageUrl] = useState("");
      const [post, setPost] = useState("");
      const [click, setClick]= useState(false)

      const obj = {
        key:key,
        userName:userName,
        time:time,
        imageUrl:imageUrl,
        post:post
      }

       async function addPost() {
          try {
            const res = await createPost(obj);
            if (!res.success) {
              setMessage(res.error || "Unknown error, please try again.");
              return;
            }
            if(res.success){
                setMessage(res.data.msg||" the post added")
            }
          } catch (err) {
            console.error("error is: ", err);
            setMessage("Sorry, there is a problem with the server. Try again later.");
          }
        }
      


      function send(){
        return setClick(!click)
      }

    useEffect(()=>{
        setMessage("connecting...")
        addPost()
    },[click])

    return(
        <>
        
       <div id="cardInputPost">
         <label >enter your name:</label>
        <input type="text" onChange={e=>setUserName((e).target.value)}/>

        {/* <label htmlFor="username">enter your name:</label>
        <input type="text" name="username" onChange={e=>setKey((e).target.value)}/> */}

         <label >Write your post</label>
        <input type="text" onChange={e=>setPost((e).target.value)}/>

        <button onClick={send} type="submit">submit</button>
        <p>{message}</p>
       </div>
        </>
    )
}