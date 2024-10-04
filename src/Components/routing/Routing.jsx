import { Route, Routes } from "react-router-dom";
// import Home from "../../pages/Home";
// import CoinInfoPage from "../../pages/CoinInfoPage";
import MainLayout from "../../pages/Layout";
// import MoreInfo from "../../pages/MoreInfoPage";
import Button from "../Button/Button";
// import MoreInfo from "../../pages/MoreInfoPage";
import { lazy,Suspense } from "react";
import MyLoader from "../pageLoader/PageLoader";

function Routing(){
    const Home = lazy(()=>import('../../pages/Home'))
    const CoinInfoPage =lazy(()=>import('../../pages/CoinInfoPage'))
    const MoreInfo = lazy(()=>import('../../pages/MoreInfoPage'))
    console.log('In routing, id is')
    return(
        <Routes>
            <Route path="/" element={<MainLayout/>}>
            <Route index element={
                <Suspense fallback={<MyLoader/>}>
                    <Home/>
                </Suspense>
                } />
            <Route path="/details/:Id" element={
                <Suspense fallback={<MyLoader/>} >
                    <CoinInfoPage/>
                </Suspense>
                }>
            <Route index element = {<Button/>}/>
            <Route path="moreInfo" element={
                <Suspense fallback={<div>Loading More Info
                    <MyLoader/>
                </div>}>
                    <MoreInfo/>
                </Suspense>
                }/>

            </Route>
            </Route>
        </Routes>
    )
}
export default Routing;