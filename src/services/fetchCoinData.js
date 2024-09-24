import coinInstance from '../helpers/coinInstances';
async function fetchData(page,currency){
    console.log("fetching data")
    const perPage = 100;
    try {
        const data  = await coinInstance.get(`/coins/markets?vs_currency=${currency}&per_page=${perPage}&page=${page}`)
        console.log("data is",data);
        return data;
        
    } catch (error) {
        console.error("eror occured", error);
        return null;
    }
}

export default fetchData;