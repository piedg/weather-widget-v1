const weekDays = [{
        'day': 'sun',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': ''
    },
    {
        'day': 'mon',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': ''
    },
    {
        'day': 'tue',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': ''
    },
    {
        'day': 'wed',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': ''
    },
    {
        'day': 'thu',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': ''
    },
    {
        'day': 'fri',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': ''
    },
    {
        'day': 'sat',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': ''
    }
];

const cities = [{
        'name': 'milan',
        'lat': 45.46,
        'lon': 9.18
    },
    {
        'name': 'london',
        'lat': 51.50,
        'lon': -0.1257
    },
    {
        'name': 'bangkok',
        'lat': 13.75,
        'lon': 100.5167
    },
    {
        'name': 'losangeles',
        'lat': 34.05,
        'lon': -118.2437
    },
    {
        'name': 'nairobi',
        'lat': -1.28,
        'lon': 36.8167
    }
]

for (let i = 0; i < cities.length; i++) {

    let apiUrl = "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=" + cities[i].lat + "&lon=" + cities[i].lon + "&units=metric";

    fetch(apiUrl, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "210bad9669mshfbd1df1e66db7b2p12a274jsnd537df79dec7",
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
        }
    })

    .then(response => response.json())
        .then(response => {

                console.log(response);

                rtTemp = response.data[0].temp;
                rtMinTemp = response.data[0].min_temp;
                rtMaxTemp = response.data[0].max_temp;
                rtDate = response.data[0].valid_date;
                rtWeekDay = new Date(response.data[0].valid_date.toString())
                rtIconCode = response.data[0].weather.code;

                //Meteo in real time
                document.getElementById(`${cities[i].name}-rt-weather`).innerHTML += `<h1 class="title" id="city-${cities[i].name}"></h1><i id="${cities[i].name}-icon" class="main-icon fas"></i><p class="weather-desc" id="weather-${cities[i].name}"></p><h1 class="atm-temp" id="temp-${cities[i].name}"></h1><span id="minTemp-${cities[i].name}"></span><span>/</span><span id="maxTemp-${cities[i].name}"></span><br><span style="text-transform: uppercase" id="weekDay-${cities[i].name}"></span>&nbsp;<span style="margin: 0" id="date-${cities[i].name}"></span>`;

                document.getElementById(`city-${cities[i].name}`).innerHTML = response.city_name;
                document.getElementById(`weather-${cities[i].name}`).innerHTML = response.data[0].weather.description;
                document.getElementById(`temp-${cities[i].name}`).innerHTML = Math.round(rtTemp) + "<sup style='font-size: 3.5rem'>&deg;</sup>";
                document.getElementById(`maxTemp-${cities[i].name}`).innerHTML = Math.round(rtMaxTemp) + "°";
                document.getElementById(`minTemp-${cities[i].name}`).innerHTML = Math.round(rtMinTemp) + "°";
                //document.getElementById("date-" + cities[i].name).innerHTML = rtDate;
                //document.getElementById("weekDay-" + cities[i].name).innerHTML = weekDays[rtWeekDay.getDay()].day;

                rtIcon = document.getElementById(`${cities[i].name}-icon`);

                //Icone in base al tempo
                if (rtIconCode === 800) {
                    rtIcon.classList.add("fa-sun");

                } else if (rtIconCode === 801 || rtIconCode === 802) {
                    rtIcon.classList.add("fa-cloud-sun");

                } else if (rtIconCode === 803 || rtIconCode === 804) {
                    rtIcon.classList.add("fa-cloud");

                } else if (rtIconCode > 599 && rtIconCode < 611) {
                    rtIcon.classList.add("fa-snowflake");

                } else if (rtIconCode > 299 && rtIconCode < 523) {
                    rtIcon.classList.add("fa-cloud-sun-rain");

                } else if (rtIconCode > 199 && rtIconCode < 234) {
                    rtIcon.classList.add("fa-cloud-showers-heavy");
                } 
                //Controllo del giorno della settimana per previsione settimanale
                for (var index = 0; index < 7; index++) {

                    weekDay = new Date(response.data[index].valid_date.toString());
                    mDay = weekDay.getDay();

                    weekDays[mDay].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[mDay].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[mDay].validDate = response.data[index].valid_date.toString();

                    document.getElementById(`weather-week-${cities[i].name}`).innerHTML += `<div class="weather-week-day"><h4 id="${cities[i].name}-${weekDays[mDay].day}"></h4><span id="${cities[i].name}-${weekDays[mDay].day}-minTemp"></span><span>/</span><span id="${cities[i].name}-${weekDays[mDay].day}-maxTemp"></span>`;

                    document.getElementById(`${cities[i].name}-${weekDays[mDay].day}`).innerHTML = weekDays[mDay].day;
                    document.getElementById(`${cities[i].name}-${weekDays[mDay].day}-minTemp`).innerHTML = weekDays[mDay].minTemp + "°";
                    document.getElementById(`${cities[i].name}-${weekDays[mDay].day}-maxTemp`).innerHTML = weekDays[mDay].maxTemp + "°";

                }

        
            // Color Background in base alla temperatura
            if (rtTemp >= 30) {
                document.getElementById(cities[i].name).classList.add("bg-gradient-30")
            } else if (rtTemp >= 20) {
                document.getElementById(cities[i].name).classList.add("bg-gradient-20")
            } else if (rtTemp >= 10) {
                document.getElementById(cities[i].name).classList.add("bg-gradient-10")
            } else if (rtTemp >= 0) {
                document.getElementById(cities[i].name).classList.add("bg-gradient-0")
            } else {
                document.getElementById(cities[i].name).classList.add("bg-gradient-subzero")
            }
        })
.catch((error) => {
    console.log('Fetch failed', error);
});
}