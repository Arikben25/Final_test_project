import { useState } from "react";
import myImage from "../../../public/image.png";
import "../../styles/PostesComps.css"

type ProfileCardPropsb = {
  userName?: string;
  time?:string;
  imageUrl?: string;
  post?: string;
}

export default function PostesPage(props:ProfileCardPropsb) {
  const [count, setCount] = useState(0)

  function addCount(){
    setCount(count + 1)
  }
  return (
    <div id="postCard">
      <div className="headerPost">
        <p>{props.time}</p>
        <p>{props.userName}</p>
      </div>
      <p className="post">{props.post}</p>
      <img src={myImage||props.imageUrl} alt="Fighters in Gaza" />
      <button onClick={addCount}>like 👍 {count}</button>
    </div>
  );
}
