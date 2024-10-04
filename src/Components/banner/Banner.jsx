import BannerImage from "../../assets/Banner3.jpeg";
// import BannerImg from "../../assets/banner1.jpeg";
function Banner(){
    return(
        <>
        <div className=" w-full h-[25rem] relative shadow-custom-dark text-center border border-black rounded-lg shadow-lg shadow-yellow-300">
            <img src={BannerImage} className="h-full w-full border-inherit rounded-lg" alt="" />
            <div className="w-full absolute z-1 top-20 right-0 left-0 flex justify-center justify-items-center">
            <div className="w[25rem] flex flex-col gap-y-2  ">
                <div className="w-full m-auto font-bold text-4xl text-white">
                    Crypto Tracker
                </div>
                <div className="w-full m-auto font-semibold text-white">
                    Get the info of crypto here
                </div>
            </div>
            </div>
            
        </div>
        </>
    )
}
export default Banner;