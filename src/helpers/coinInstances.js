import axios from 'axios';
import coinGeckoUrl from "./constants"
const  CoinInstance = axios.create(
    {
        baseURL: coinGeckoUrl,
    }
)
export default CoinInstance;