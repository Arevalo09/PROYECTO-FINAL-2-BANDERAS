import data from './data.js';
import dom from './dom.js';

const datos = await data.getData();

const regions = data.takeregions(datos);

const html = document.querySelector("html");

const darkBtn = document.querySelector("#switch");

darkBtn.addEventListener("click",()=>{
    html.dataset.bsTheme=html.dataset.bsTheme=="ligth" ? "dark": "ligth";
})

dom.presentregions(regions, '#list')
dom.showCards(datos);


// Filtro escribiendo el nombre del país
const search = dom.$('#search')

search.addEventListener('keyup', () => {
    let filtro = search.value;

    const filtername = filtro === '' ? datos : data.namefilter(datos, filtro);
    dom.showCards(filtername);
    showCanvasInfo()
})

// Filtro de regiones
let filterregion = [];
const list = [...dom.$('#list').children];

list.forEach((region) => {

    region.addEventListener('click', () => {
        let filtro = region.textContent;
        filterregion = filtro === 'All' ? datos : data.regionfilter(datos, filtro);

        let dropdown = dom.$('#region');
        
        dropdown.textContent = `${filtro === "All" ? "Filter by region" : filtro}`;

        dom.showCards(filterregion);
        showCanvasInfo()

    })
})

showCanvasInfo()

function showCanvasInfo() {
    // Para mostrar la información de un país
    const cardcountrys = [...countryscont.children];

    cardcountrys.forEach((card) => {
        card.addEventListener('click', () => {
            let selectedcountry = '';
            selectedcountry = card.children[0];
            selectedcountry = selectedcountry.children[1];
            selectedcountry = selectedcountry.children[0];
            selectedcountry = selectedcountry.textContent;
            
            let filtered = data.countryfilter(datos, selectedcountry);
            dom.showbigcard(filtered)
            dom.borderCountries(filtered);
        })
    });



}