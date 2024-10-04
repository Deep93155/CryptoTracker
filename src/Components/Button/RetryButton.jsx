// import { useNavigate } from "react-router-dom";
// import CoinData from "../coinData/CoinData";


function RetryButton(){
    // const navigator  = useNavigate()
    function retry(){
        console.log("in retryButton")
        console.log(window.location.pathname)
        return window.location.reload()
    }
    return <button className='btn bg-blue-600 w-[1/4] hover:bg-blue-700' onClick={()=>retry()}>Retry!</button>
}

export default RetryButton;