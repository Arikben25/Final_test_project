import { Outlet } from "react-router";
import Logo from "../components/application-layout/logo";
import HomePage from "./HomePage";
import { useState } from "react";

export default function Layout(){
    const [Page, setPage] = useState("HomePage")
    return(
        <div>
            <Logo/>
            <HomePage/>
            <Outlet />
        </div>
    )
}