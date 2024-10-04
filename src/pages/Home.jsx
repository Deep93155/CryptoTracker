
import CoinData from '../Components/coinData/CoinData';
import Banner from '../Components/banner/Banner'
// import Navbar from '../Components/navbar/Navbar';
// import urlStore from '../zustandState/UrlStateStore';
// import CoinInfoPage from './CoinInfoPage';
function Home(){

    return (
        <>
        {/* <Navbar/> */}
        <Banner/>
        <CoinData/>
        </>
    )
}
export default Home;