import { useEffect,useState } from "react";

function useCurrencyInfo(currency){
    let link =`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(link).then((res)=>res.json())
        .then((res)=>setData(res[currency]));
        // console.log(data);
    },[currency])
    // console.log(data);  // we cannkot use return types inside the useEffect hook
    return data;
}

export default useCurrencyInfo;