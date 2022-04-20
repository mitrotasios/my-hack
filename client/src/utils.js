export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export function filterDataSeries(fromDate, toDate, timeSeries) {
    if (!fromDate || !fromDate) return timeSeries;
    timeSeries = timeSeries.filter((entry) => {
        var date = new Date(entry[0])
        return date.getTime() >= fromDate.getTime() &&
               date.getTime() <= toDate.getTime();
    });
    return timeSeries;
}