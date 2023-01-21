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
/*let restaurants = [
    {
        "name": "Макдоналдс — Газетный",
        "average_price": "₽₽ • ",
        "tags": ["Бургеры"],
        "average_time": "25 - 35 мин",
        "imageURL": "https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/img/macdonalds.png"
   },
   {
        "name": "DimSum & Co — ЦДМ",
        "average_price": "₽ • ",
        "tags": ["Японская", "Китайская", "Азиатская"],
        "average_time": "40 - 50 мин",
        "imageURL": "https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/img/dimsum.png"
   },
   {
        "name": "ДвижОК — Манежная",
        "average_price": "₽ • ",
        "tags": ["Американская", "Европейская"],
        "average_time": "35 - 45 мин",
        "imageURL": "https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/img/dvijok.png"
    },
    {
        "name": "НЯ — NHA",
        "average_price": "₽₽ • ",
        "tags": ["Вьетнамская"],
        "average_time": "30 - 40 мин",
        "imageURL": "https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/img/njahna.png"
    },
    {
        "name": "Точка Дзы — Цветной",
        "average_price": "₽₽ • ",
        "tags": ["Вьетнамская"],
        "average_time": "40 - 50 мин",
        "imageURL": "https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/img/dotdzy.png"
    },
    {
        "name": "Cinnabon",
        "average_price": "₽ • ",
        "tags": ["Выпечка", "Десерты", "Капкейки"],
        "average_time": "25 - 35 мин",
        "imageURL": "https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/img/cinnabon.png"
    },
    {
        "name": "PIZZELOVE",
        "average_price": "₽₽ • ",
        "tags": ["Пицца"],
        "average_time": "15 - 25 мин",
        "imageURL": "https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/img/pizzalove.png"
    },
    {
        "name": "Zю кафе — Тверская",
        "average_price": "₽₽ • ",
        "tags": ["Японская"],
        "average_time": "25 - 35 мин",
        "imageURL": "https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/img/zucafe.png"
    },
    {
        "name": "Bar BQ Cafe — Манежная",
        "average_price": "₽₽₽ • ",
        "tags": ["Европейская"],
        "average_time": "30 - 40 мин",
        "imageURL": "https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/img/barbqcafe.png"
    }
]*/
let restaurants;

const getData = async () => {
  const response = await fetch("https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/restaurants.json");
  const data = await response.json();
  restaurants = data;
  return data;
};

(async () => {
  await getData();
  for (let i = 0; i < restaurants.length; i++) {
    console.log(restaurants[i].average_price, restaurants[i].tags.toString())
}
})();


/*const getJson = async () => {
    const myJson = await (await fetch('https://raw.githubusercontent.com/VoldemarMuholetov/uber_eats_try/master/restaurants.json')).json();
    console.log('myJson', myJson);
  }*/