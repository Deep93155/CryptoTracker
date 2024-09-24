
import { useState } from 'react';
import {useQuery} from 'react-query';
import fetchData from '../../services/fetchCoinData';
import store from '../../zustandState/StateStore';
// import { currencyContext } from '../../Context.API/currencyContextAPI';
// import { useContext } from 'react';
// eslint-disable-next-line react/prop-types
function CoinData(){ 
    const valueObject = store()
    const [page,setPage] = useState(1)
    console.log(page)
    const {isLoading,data,isError}  = useQuery(
        ['coins',page,valueObject.currency],
        ()=>{return fetchData(page,valueObject.currency)},
        {
            retry:2,
            retryDelay:10000,
            cacheTime:1000*60*2,
            staleTime:1000*60*2,
        }
    )
  
    if(isLoading){
        
        return  <div className='text-white text-2xl font-semibold '>loading...</div>
        
    }
    if(isError){
       return <div className='text-3xl font-semibold'>Error Occured</div>
    }
    console.log("the fetched data is",data)
    if(data){
        return(
            
                // <div className='btn-primary' onClick={setPage(page+1)}>nextPage</div>
                <div className='w-[80vw] h-auto mx-auto flex flex-col justify-center items-center mt-5 '>
                    <div className='w-full bg-yellow-400 flex justify-center items-center font-semibold text-black text-xl py-5'>
                        <div className='basis-[35%] '>
                            coin
                        </div>
                        <div className='basis-[25%] ' >Price In {`${valueObject.currency}`}</div>
                        <div className='basis-[20%] '>24hr Change</div>
                        <div className='basis-[20%] '>Market Cap</div>
                    </div>
                    {data.data.map((coin)=>{
                        console.log("coin is", coin)
                        return(
                            
                            <div key={coin.id} className='w-full flex justify-center items-center py-4'>
                                <div className=' flex basis-1/3 justify-center items-center'>
                                    <div className='w-20 h-20 p-1 m-2 flex'>
                                        <img className='w-fit' src={coin.image} alt="not found" />
                                    </div>
                                    <div className='flex flex-col '>
                                        <div className='text-3xl'>{coin.name}</div>
                                        <div className='text-xl'>{coin.symbol} </div>
                                    </div>
                                </div>
                                <div className="basis-[25%]">
                                    {coin.current_price}
                                </div>
                                <div className="basis-[20%]">
                                    {coin.price_change_24h}
                                </div>
                                <div className="basis-[20%]">
                                    {coin.market_cap}
                                </div>
                            </div>
                            
                        )
                    })}
                    <div className='w-full flex flex-row gap-2 justify-center items-center mt-3'>
                        <button disabled={page==1} onClick={()=>setPage(page-1)} className='btn btn-primary text-2xl w-1/5'>prev</button>
                        <button className='btn bg-red-400 text-2xl font-semibold w-[7%] border rounded-md text-black hover hover:bg-red-500'>{page}</button>
                        <button onClick={()=>setPage(page+1)} className='btn btn-secondary text-2xl w-1/5  '>next</button>
                    </div>
                </div>
            
        )
    }else{
        return (
            <div className='text-3xl font-semibold text-yellow-400'> 
                data is null
            </div>
        )
    }
}
export default CoinData;