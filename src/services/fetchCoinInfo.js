import CoinInstance from "../helpers/coinInstances"
async function fetchInfo(url){
    try {
        const info = await CoinInstance.get(`/coins/${url}/`)
        console.log("info is",info);
        return info;
    } catch (error) {
        console.log(error)
        return null;
    }
}
export default fetchInfo;
