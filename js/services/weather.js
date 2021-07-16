const weekDays = [{
        'day': 'sun',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': '',
        'iconCode': ''
    },
    {
        'day': 'mon',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': '',
        'iconCode': ''
    },
    {
        'day': 'tue',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': '',
        'iconCode': ''
    },
    {
        'day': 'wed',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': '',
        'iconCode': ''
    },
    {
        'day': 'thu',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': '',
        'iconCode': ''
    },
    {
        'day': 'fri',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': '',
        'iconCode': ''
    },
    {
        'day': 'sat',
        'minTemp': 0,
        'maxTemp': 0,
        'validDate': '',
        'iconCode': ''
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
];

const iconsAnimatedPath = "asset/icons/animated/";
const apiKey1 = "231368692amsh4f5891a7ae2170cp154322jsn6a145049a038";
const apiKey2 = "210bad9669mshfbd1df1e66db7b2p12a274jsnd537df79dec7";

for (let i = 0; i < cities.length; i++) {

    let apiUrl = "https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=" + cities[i].lat + "&lon=" + cities[i].lon + "&units=metric";
    
    fetch(apiUrl, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": apiKey2,
            "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
        }
    })

    .then(response => response.json())
        .then(response => {

            rtTemp = response.data[0].temp;
            rtMinTemp = response.data[0].min_temp;
            rtMaxTemp = response.data[0].max_temp;
            rtDate = response.data[0].valid_date;
            rtWeekDay = new Date(response.data[0].valid_date.toString())
            rtIconCode = response.data[0].weather.code;

            //Meteo in real time
            document.getElementById(`${cities[i].name}-rt-weather`).innerHTML += `<h1 class="title" id="city-${cities[i].name}"></h1><img id="${cities[i].name}-icon" class="rt-icon"><p class="weather-desc" id="weather-${cities[i].name}"></p><h1 class="atm-temp" id="temp-${cities[i].name}"></h1><span id="minTemp-${cities[i].name}"></span><span>/</span><span id="maxTemp-${cities[i].name}"></span><br><span style="text-transform: uppercase" id="weekDay-${cities[i].name}"></span>&nbsp;<span style="margin: 0" id="date-${cities[i].name}"></span>`;

            document.getElementById(`city-${cities[i].name}`).innerHTML = response.city_name;
            document.getElementById(`weather-${cities[i].name}`).innerHTML = response.data[0].weather.description;
            document.getElementById(`temp-${cities[i].name}`).innerHTML = Math.round(rtTemp) + "<sup style='font-size: 3.5rem'>&deg;</sup>";
            document.getElementById(`maxTemp-${cities[i].name}`).innerHTML = Math.round(rtMaxTemp) + "°";
            document.getElementById(`minTemp-${cities[i].name}`).innerHTML = Math.round(rtMinTemp) + "°";

            rtIcon = document.getElementById(`${cities[i].name}-icon`);

            //Icone in base al tempo real time
            setWeatherIcon(rtIconCode, rtIcon)

            for (var index = 0; index < 7; index++) {

                //Controllo del giorno della settimana per previsione settimanale
                weekDay = new Date(response.data[index].valid_date.toString());
                mDay = weekDay.getDay();

                weekDays[mDay].minTemp = Math.round(response.data[index].min_temp);
                weekDays[mDay].maxTemp = Math.round(response.data[index].max_temp);
                weekDays[mDay].validDate = response.data[index].valid_date.toString();
                weekDays[mDay].iconCode = response.data[index].weather.code;

                weekIconCode = weekDays[mDay].iconCode;

                document.getElementById(`weather-week-${cities[i].name}`).innerHTML += `<div class="weather-week-day"><h4 id="${cities[i].name}-${weekDays[mDay].day}"></h4><img id="${cities[i].name}-${weekDays[mDay].day}-icon" src="" class="week-icon"><br><span id="${cities[i].name}-${weekDays[mDay].day}-minTemp"></span><span>/</span><span id="${cities[i].name}-${weekDays[mDay].day}-maxTemp"></span>`;

                document.getElementById(`${cities[i].name}-${weekDays[mDay].day}`).innerHTML = weekDays[mDay].day;
                document.getElementById(`${cities[i].name}-${weekDays[mDay].day}-minTemp`).innerHTML = weekDays[mDay].minTemp + "°";
                document.getElementById(`${cities[i].name}-${weekDays[mDay].day}-maxTemp`).innerHTML = weekDays[mDay].maxTemp + "°";

                weekIcon = document.getElementById(`${cities[i].name}-${weekDays[mDay].day}-icon`);

                setWeatherIcon(weekIconCode, weekIcon)

            }
        })

    .catch((error) => {
        console.log('Fetch failed', error);
    });
}

function setWeatherIcon(code, element) {
    if (code === 800) {
        element.src = iconsAnimatedPath + "day.svg";

    } else if (code === 801 || code === 802) {
        element.src = iconsAnimatedPath + "cloudy-day-1.svg";

    } else if (code === 803 || code === 804) {
        element.src = iconsAnimatedPath + "cloudy.svg";

    } else if (code >= 621 && code <= 623) {
        element.src = iconsAnimatedPath + "snowy-6.svg";

    } else if (code === 600 || code === 610) {
        element.src = iconsAnimatedPath + "snowy-1.svg";

    } else if (code >= 601 && code <= 609) {
        element.src = iconsAnimatedPath + "snowy-5.svg";

    } else if (code >= 500 && code <= 522) {
        element.src = iconsAnimatedPath + "rainy-6.svg";

    } else if (code >= 300 && code <= 302) {
        element.src = iconsAnimatedPath + "rainy-7.svg";

    } else if (code >= 200 && code <= 233) {
        element.src = iconsAnimatedPath + "thunder.svg";
    }
}