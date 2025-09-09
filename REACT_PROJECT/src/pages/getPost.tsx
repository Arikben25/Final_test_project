import Logo from "../components/application-layout/logo"
import PostesComps from "../components/application-layout/PostesComps"
import getOnePosts from "../api/getOnePost";
import { useState } from "react";
export default function getPosts(){
    
      const [posts, setPosts] = useState({});
      const [message, setMessage] = useState("");
    
       async function readOnePosts(key:number) {
        try {
          const res = await getOnePosts(key);
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
        

    return(
        <div>
            <Logo/>
            <div>
                <PostesComps/>
            </div>
            
        </div>
    )
}