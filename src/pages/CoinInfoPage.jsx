import { useQuery } from "react-query";
import fetchInfo from "../services/fetchCoinInfo";
import { Outlet,  useParams } from "react-router-dom";
import parse from "html-react-parser"
import MyLoader from "../Components/pageLoader/PageLoader";
function CoinInfoPage(){
    const coinIdObject = useParams();
    console.log("in the coininfoPage id is",coinIdObject.Id )
    console.log("location is",location)
    console.log("url is",coinIdObject);

    const {data, isLoading,isError} = useQuery(['coinInfo',coinIdObject.Id],
        ()=>{return fetchInfo(coinIdObject.Id)},
        {
            retry:2,
            retryDelay:10000,
            cacheTime:1000*60*2,
            staleTime:1000*60*2,
        }
    )
    if(isLoading){
        return(
            <>
            <div className="flex flex-col">
                <div>
                    Loading Coin Info..
                </div>
                <div>
                    <MyLoader/>
                </div>
            </div>
            </>
            
        )
    }
    if(isError){
        return(
            <div>
                Error Occurred..
            </div>
        )
    }

    console.log("info is",data);
    console.log("image is",data.data.image)
        if(data == ''){
            return(
                <div>coin id is {''}</div>
            )
        }else{
            return(
                <>
                <div className="w-[100vw] h-[100vh] flex flex-row gap-3">   
                    <div className="w-1/3 h-full flex flex-col mx-auto  content-center items-center border-r border-slate-200">
                        <div className="w-[30%] flex content-center items-center mt-2 p-1"><img className="object-cover w-full" src={data.data.image.thumb} alt="not found"  /></div>
                        <div className="text-2xl text-pink-500 font-bold p-2 "> {data.data.id}</div>
                        <div className="w-full p-1 text-sm text-justify ">{parse(data.data.description.en)}</div>
                    </div>
                    <div className="w-2/3 m-1">
                        <Outlet/>
                    </div>
                </div>
                {/* <MoreInfo id = {data.data.id} days = {days}/> */}
                </>
            )
        }
}
export default CoinInfoPage;