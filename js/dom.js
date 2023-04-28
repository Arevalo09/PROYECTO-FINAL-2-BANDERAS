const $ = selector => document.querySelector(selector);

// Crear lista de regiones seleccionables
const presentregions = (regions, where) => {
    const listofregions = $(where);

    regions.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = `${element}`;
        li.className = `dropdown-item`;
        listofregions.appendChild(li);
        return li;
    });
}
// Crear una card
const newCard = (element) => {
    const div = document.createElement('div');

    
    div.innerHTML = `
    <div class="cardclic" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">
        <img src="${element.flags.png}" class="card-img-top my-2" alt="...">
        <div class="card-body">
        <h3 class="fw-bold countrys-title text-start">${element.name.common}</h3>
              <div class="card-text">
              
                <p class="mb-1 text-start">Population:${element.population}</p>
                <p class="mb-1 text-start">Region:${element.region}</p>
                <p class="mb-1 text-start">Capital:${element.capital}</p>
              </div>
        </div>
    <div>
    `;

    div.className = "card p-0";
    return div;
}
// Mostrar todas las cards 
const showCards = (arr) => {
    countryscont.innerHTML = '';

    arr.forEach(element => {
        const card = newCard(element);
        countryscont.appendChild(card);
    });
}
 
// Presentar card individual
const showbigcard = (element) => {
    const div = document.createElement('div');
    div.className = "offcanvas-body row";
    
    div.innerHTML = `
    <div class="row">
            <div class="col mt-2">
              <img class="img-fluid" src="${element[0].flags.svg}" alt="">
            </div>
            <div class="card-body col col-md-2 ps-4 mt-2">
              <h3 class="fw-bold fs-4">${element[0].name.common}</h3>
              <div class="card-text text-start row row-cols-md-2">

                <div class="col">

                  <p class="mb-1"> Common Name: ${element[0].name}</p>
                  <p class="mb-1"> Population: ${element[0].population}</p>
                  <p class="mb-1"> Region: ${element[0].region}</p>
                  <p class="mb-1"> Sub Region: ${element[0].subregion}</p>
                  <p class="mb-1"> Capital: ${element[0].capital}</p>

                </div>


                <div class="col">

                  <p class="mb-1">Top Level Doamin: ${element[0].tld}</p>
                  <p class="mb-1">Currencies: ${element[0].currencies}</p>
                  <p class="mb-1">Language: ${element[0].languages}</p>

                </div>

              </div>

              
            </div>
          </div>
    `;
    offcanvascontainer.innerHTML = '';
    offcanvascontainer.appendChild(div);
}

export default {
    $,
    presentregions,
    newCard,
    showCards,
    showbigcard
}