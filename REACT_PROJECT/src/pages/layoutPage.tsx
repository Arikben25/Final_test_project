import { Outlet } from "react-router";
import Logo from "../components/application-layout/Logo";
import "../styles/layOutPage.css";
import { useNavigate } from "react-router-dom";


export default function Layout() {
    const navigate = useNavigate();

  return (
    <div>
      <div id="page">
        <Logo />
        <div id="buttenRoute">
        <button onClick={() => navigate("/")}>HOME</button>
        <button onClick={() => navigate("/getPost")}>SEARCH</button>
        <button onClick={() => navigate("/addPost")}>CREATE</button>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
