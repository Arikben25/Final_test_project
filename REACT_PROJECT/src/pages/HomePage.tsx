import "../styles/homeStyle.css";
import myImage2 from "../../public/image.png";
import myImage from "../../public/IMG-20250907-WA0006.jpg";
import PostesPage from "../components/application-layout/PostesComps";

export default function HomePage() {
const a= arr.map(pro=>(<div>
     userName={pro.userName}
         time={pro.time}
         imageUrl={pro.imageUrl}
</div>))
  return (
    <div id="home">
      <div className="headerWeb">
        <h1>Linkodkode</h1>
        <img src={myImage} alt="logo" />
      </div>
      <PostesPage>
        
        {/* {arr.map(product=>
        (<div>
         userName={product.userName}
         time={product.time}
         imageUrl={product.imageUrl}
       </div>)} */}
     </PostesPage>
    </div>
  );
}

const arr = [
  { userName: "arik", time: "10:20", imageUrl: myImage2 },
  { userName: "arik", time: "10:20", imageUrl: myImage2 },
  { userName: "arik", time: "10:20", imageUrl: myImage2 },
  { userName: "arik", time: "10:20", imageUrl: myImage2 },
  { userName: "arik", time: "10:20", imageUrl: myImage2 },
  { userName: "arik", time: "10:20", imageUrl: myImage2 },
];
