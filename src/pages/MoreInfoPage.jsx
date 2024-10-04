import { useQuery } from "react-query";
// import { useParams } from "react-router-dom";
import fetchChartInfo from "../services/fetchChartInfo";
import store from "../zustandState/StateStore";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import MyLoader from "../Components/pageLoader/PageLoader";
// eslint-disable-next-line react/prop-types
function MoreInfo(){
    const {currency} = store();
    const {state}  = useLocation();
    console.log("in more info Id is",state)
    const {days,setdays} = useState(1)
    const {data:info , isLoading, isError, error} = useQuery(['chartInfo',state,currency,days],
        ()=>fetchChartInfo(state,currency,days),
        {
            cacheTime:1000*60*2,
            staleTime:1000*60*2,
            retry:2,
            retryDelay:10000,
        }
    )
    if(isLoading){
        return (
            <>
            <div className="font-semibold text-2xl">Loading Info..</div>
            <MyLoader/>
            </>
            
        )
    }
    if(isError){
        return <div>Error Occured {error}</div>
    }
    console.log("prices are",info)
    return(
        <div>
            <div>Prices: {info.data.prices.map((element,index)=>{
                console.log("index is",index)
                const date = new Date(element[0]);
                console.log("chart Date is",date); 
                let time = date.getHours() >12? `${date.getHours()-12}:${date.getMinutes()} PM`:`${date.getHours()}:${date.getMinutes()} AM`   
                
                if(days==1){
                    return <div className="p-1 mx-2 texr-xl font-semibold text-lime-400" key={date}>{time}</div>
                }else{
                    return <div className="p-1 mx-2 texr-xl font-semibold text-lime-400" key={date}>{date.toLocaleDateString()}</div>
                }
                })}</div>
        </div>
    )
}

export default MoreInfo;