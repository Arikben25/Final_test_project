import "../styles/homeStyle.css";
import myImage2 from "../../public/image.png";
import myImage from "../../public/IMG-20250907-WA0006.jpg";
import PostesPage from "../components/application-layout/PostesComps";

export default function HomePage() {
  return (
    <div id="home">
      <div className="headerWeb">
        <h1>Linkodkode</h1>
        <img src={myImage} alt="logo" />
      </div>
      {arr.map((item,index)=>(<PostesPage 
      key={index+1}
      userName={item.userName}
      time={item.time}
      imageUrl={item.imageUrl}
      post={item.post}
      />))}
    </div>
  );
}

const arr = [
  { userName: "arik", time: "10:20", imageUrl: myImage2,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
  { userName: "arik", time: "10:20", imageUrl: myImage2 ,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
  { userName: "arik", time: "10:20", imageUrl: myImage2 ,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
  { userName: "arik", time: "10:20", imageUrl: myImage2 ,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
  { userName: "arik", time: "10:20", imageUrl: myImage2 ,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
  { userName: "arik", time: "10:20", imageUrl: myImage2 ,post:"The only difference among those list items is their contents, their data. You will often need to show several instances of the same component using different data when building interfaces: "},
];
