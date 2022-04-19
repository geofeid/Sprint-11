fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Alimos&units=metric&APPID=b3a87006f9541d262cbd02064735317e"
    )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));