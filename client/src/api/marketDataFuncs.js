export function generateTimeSeriesData(marketApiResponse) {
    return marketApiResponse.results.map(entry => [entry.t, entry.c])
}