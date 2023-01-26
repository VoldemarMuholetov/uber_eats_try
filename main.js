console.log("Hi")
/*let RequestURl = 'https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/restaurants.json'
let Request = new XMLHttpRequest();
Request.open('GET', RequestURl);
Request.responseType = 'json';
Request.send();
let restaurants = ''
Request.onload = function() {
    let restaurants = Request.response.JSON;
}
console.log(Request.onload)*/
//let restaurants
/*fetch('https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/restaurants.json')
    .then(response => response.json())
    .then(json => console.log(json))
    .then()*/
//response = fetch('https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/restaurants.json')
//let restaurants = fetch('https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/restaurants.json').json()
//console.log(restaurants)


let restaurants = [];
let restaurantsCard = '';
let restaurantsCardsAll = '';
let types = []
const getData = async () => {
  const response = await fetch("https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/restaurants.json");
  const data = await response.json();
  restaurants = data;
  return data;
};

(async () => {
  await getData();
  for (let i = 0; i < restaurants.length; i++) {
    restaurantsCard = `
    <div class="article_cards_card">
        <div class="article_cards_card_icon">
            <img src="${restaurants[i].imageURL}">
        </div>
        <div class="article_cards_card_name">
            ${restaurants[i].name}
        </div>
        <div class="article_cards_card_average_price_tags">
            ${restaurants[i].average_price}${restaurants[i].tags.toString()}
        </div>
        <div class="article_cards_card_average_time">
            ${restaurants[i].average_time}
        </div>
    </div>`
    //types.push(restaurantsCard === undefined)
    //console.log(typeof restaurantsCard)
    
    restaurantsCardsAll += restaurantsCard
    //document.querySelector('#article-cards').innerHTML = restaurantsCardsAll
    //console.log(restaurantsCard)
    //console.log(restaurants[i].average_price, restaurants[i].tags.toString()*/)
}
    //$('.article-cards').append(restaurantsCardsAll);
    document.querySelector('#article-cards').innerHTML = restaurantsCardsAll
    //console.log(types)
    //console.log(restaurantsCardsAll)
    //console.log(restaurantsCard)
})();

//document.querySelector('#article-cards').innerHTML = restaurantsCardsAll
/*const getJson = async () => {
    const myJson = await (await fetch('https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/restaurants.json')).json();
    console.log('myJson', myJson);
  }*/