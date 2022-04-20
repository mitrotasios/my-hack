import { marketHistoryApiKey, marketHistoryBaseUrl, marketHistoryRequestLimit } from "./config"
import { generateTimeSeriesData } from "./marketDataFuncs"

export function fetchMarketHistoryData(fromDateString, toDateString, marketIdentifierCode, setDataCallback) {
    var fetchUrl = `${marketHistoryBaseUrl}/${marketIdentifierCode}/range/1/day/${fromDateString}/${toDateString}?adjusted=true&sort=asc&limit=${marketHistoryRequestLimit}&apiKey=${marketHistoryApiKey}`
    fetch(fetchUrl)
        .then(res => res.json())
        .then(data => setDataCallback(generateTimeSeriesData(data)))
        .catch(err => console.log(err))
}