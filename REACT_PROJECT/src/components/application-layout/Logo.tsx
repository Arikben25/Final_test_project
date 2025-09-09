import myImage from "../../../public/IMG-20250907-WA0006.jpg"
import "../../styles/logo.css"

export default function Logo() {
  return (
    <div>
        <div className="headerWeb">
        <h1>Linkodkode</h1>
        <img src={myImage} alt="logo" />
      </div>
    </div>
  )
}


