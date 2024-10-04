import CoinInstance from "../helpers/coinInstances";

async function fetchChartInfo(id,currency,days){
    console.log("chart id ",id)
    console.log("chart currency ",currency)
    console.log("chart days ",days)
    const chartData = await CoinInstance.get(`coins/${id}/market_chart?vs_currency=${currency}&days=${days}`);
    return chartData;
}
export default fetchChartInfo;