import { Outlet } from "react-router-dom";
import Navbar from "../Components/navbar/Navbar";

function MainLayout(){
    return(
        <>
        <Navbar/>
        <Outlet/>
        </>
    )
}
export default MainLayout;