const getData = async () => {
    const data = fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(json => json)

    return data;
}

const takeregions = (data) => {
    let regions = data.map((element) => `${element.region}`);
    regions = new Set(regions);
    regions = ['All', ...regions];
    return regions;
}

const countryfilter = (arr, filtro) => {
    let filtered = arr.filter (element =>element.name.common==filtro);
    return filtered;
}

const regionfilter = (arr, filtro) => {
    let filtered = arr.filter(element => element.region === filtro);
    return filtered;
}

const namefilter = (arr, filtro) => {
    let filtered = arr.filter (element =>element.name.common.includes(filtro));
    return filtered;
}


export default {
    getData,
    takeregions,
    regionfilter,
    namefilter,
    countryfilter
}