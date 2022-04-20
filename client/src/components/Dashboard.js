import React, { useEffect, useState, useMemo } from "react"

import HistoryChart from "./panels/HistoryChart"
import DropdownFilter from "./util-components/DropdownFilter"
import { DeltaLabel } from "./util-components/DeltaLabel"
import { fetchMarketHistoryData } from "../api/requests"
import { filterDataSeries } from "../utils"


export default function Dashboard() {

    const sampleData = [[1611205200000,141.4],[1611291600000,140.42],[1611550800000,142.3],[1611637200000,141.13],[1611723600000,141.2],[1611810000000,139.03],[1611896400000,135.27],[1612155600000,138.61],[1612242000000,142.61],[1612328400000,142.16],[1612414800000,143.57],[1612501200000,142.59],[1612760400000,142.45],[1612846800000,143.13],[1612933200000,142.47],[1613019600000,142.37],[1613106000000,141.99],[1613451600000,143.99],[1613538000000,144.69],[1613624400000,144.88],[1613710800000,144.43]]

    const defaultFromDateString = "2021-01-01"
    const defaultToDateString = "2022-03-28"
    const defaultMarketIndicator = "NDAQ"
    const marketIndicatorOptions = [
        {name: "Nasdaq", ticker: "NDAQ", isActive: false},
        {name: "Apple", ticker: "AAPL", isActive: false},
        {name: "Tesla", ticker: "TSLA", isActive: false},
    ]

    const [marketData, setMarketData] = useState([])
    const [filteredMarketData, setFilteredMarketData] = useState([])
    const [fromDateString, setFromDateString] = useState(defaultFromDateString)
    const [toDateString, setToDateString] = useState(defaultToDateString)
    const [marketIndicatorOptionsState, setMarketIndicatorOptionsState] = useState(
        marketIndicatorOptions.map(option => option.ticker===defaultMarketIndicator ? {...option, isActive: true} : option)
    )

    const [formInputs, setFormInputs] = useState({
        "fromDateString": defaultFromDateString,
        "toDateString": defaultToDateString,
    })

    const handleRequestResponse = (response) => {
        setMarketData(response)
        setFilteredMarketData(response)
    }

    useEffect(() => {
        fetchMarketHistoryData(defaultFromDateString, defaultToDateString, defaultMarketIndicator, handleRequestResponse)
        //setMarketData(sampleData)
        //setFilteredMarketData(marketData)
    }, [])


    const handleFromInput = (event, id) => {
        var newFormInputsState = {...formInputs}
        newFormInputsState[id] = event.target.value
        setFormInputs(newFormInputsState)
    }

    const handleDateRangeSearch = () => {
        var filterFromDate = new Date(formInputs.fromDateString)
        var filterToDate = new Date(formInputs.toDateString)
        var newFilteredMarketData = filterDataSeries(filterFromDate, filterToDate, marketData)
        setFilteredMarketData(newFilteredMarketData)
    }

    const resetDateRange = () => {
        setFilteredMarketData(marketData)
    }

    const handleFilterOptionClick = (ticker) => {
        var mewMarketIndicatorOptionsState = marketIndicatorOptions.map(option => option.ticker===ticker ? {...option, isActive: true} : option)
        setMarketIndicatorOptionsState(
            mewMarketIndicatorOptionsState
        )
        fetchMarketHistoryData(defaultFromDateString, defaultToDateString, ticker, handleRequestResponse)

        // var filterFromDate = new Date(formInputs.fromDateString)
        // var filterToDate = new Date(formInputs.toDateString)
        // var newFilteredMarketData = filterDataSeries(filterFromDate, filterToDate, marketData)
        // setFilteredMarketData(newFilteredMarketData)
    }

    return(
        <div className="bg-gray-100 h-screen py-10">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-between mb-2 items-center gap-5">
                    <div className="flex-1 flex justify-start items-center gap-5">
                        {filteredMarketData.length > 0 ? (
                            <>
                                <span className="text-slate-700 font-bold text-3xl">{marketIndicatorOptionsState.find(option => option.isActive).ticker}</span>
                                <span className="text-slate-700 text-3xl">{filteredMarketData[filteredMarketData.length - 1][1]}{
                                    
                                }</span>
                                    <DeltaLabel deltaType={(
                                        filteredMarketData[0][1] < filteredMarketData[filteredMarketData.length - 1][1] ? "increase" : "decrease"
                                    )}
                                    deltaValue={""}
                                />
                            </>
                        ) : null}
                    </div>
                    <div className="flex justify-between gap-2 items-center">
                        <input 
                            className="h-10 rounded-md border shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500" type="date"
                            defaultValue={fromDateString}
                            onChange={(e) => handleFromInput(e, "fromDateString")}
                        />
                        <span>to</span>
                        <input 
                            className="h-10 rounded-md border shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500" type="date"
                            defaultValue={toDateString}
                            onChange={(e) => handleFromInput(e, "toDateString")}
                        />
                        <button
                            className="h-10 bg-blue-500 rounded-md border shadow-sm px-4 py-2 bg-white text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500 flex items-center"
                            onClick={handleDateRangeSearch}
                        >
                            Search
                        </button>
                        <button onClick={resetDateRange}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <DropdownFilter filterOptions={marketIndicatorOptionsState} handleFilterOptionClick={handleFilterOptionClick}/>
                </div>
                <div className="relative w-full bg-white rounded shadow px-6 py-3">
                    <HistoryChart dataSeries={filteredMarketData}/>
                </div>
            </div>
        </div>
    )
}
