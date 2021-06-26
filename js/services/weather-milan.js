weekDays = [{
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


fetch("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=45.46&lon=9.18&units=metric", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "00f7e13c07mshcd12244b5c5f2d7p13c440jsna676b1c7c90d",
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"

        // 231368692amsh4f5891a7ae2170cp154322jsn6a145049a038

    }
})

.then(response => response.json())
    .then(response => {

        rtTemp = response.data[0].temp;
        rtMinTemp = response.data[0].min_temp;
        rtMaxTemp = response.data[0].max_temp;
        rtDate = response.data[0].valid_date;

        document.getElementById("city-milan").innerHTML = response.city_name;
        document.getElementById("weather-milan").innerHTML = response.data[0].weather.description;
        document.getElementById("temp-milan").innerHTML = Math.round(rtTemp) + "<sup style='font-size: 3.5rem'>&deg;</sup>";
        document.getElementById("maxTemp-milan").innerHTML = Math.round(rtMaxTemp) + "°";
        document.getElementById("minTemp-milan").innerHTML = Math.round(rtMinTemp) + "°";

        for (var index = 0; index < 7; index++) {

            weekDay = new Date(response.data[index].valid_date.toString())

            switch (weekDay.getDay()) {
                case 0:
                    weekDays[0].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[0].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[0].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-milan").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="milan-' + weekDays[0].day + '"></h4>' +
                        '<span id="milan-' + weekDays[0].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="milan-' + weekDays[0].day + '-maxTemp"></span>';
                 

                    document.getElementById("milan-sun").innerHTML = weekDays[0].day;
                    document.getElementById("milan-sun-minTemp").innerHTML = weekDays[0].minTemp + "°";
                    document.getElementById("milan-sun-maxTemp").innerHTML = weekDays[0].maxTemp + "°";
                    break;

                case 1:
                    weekDays[1].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[1].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[1].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-milan").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="milan-' + weekDays[1].day + '"></h4>' +
                        '<span id="milan-' + weekDays[1].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="milan-' + weekDays[1].day + '-maxTemp"></span>';
                 

                    document.getElementById("milan-mon").innerHTML = weekDays[1].day;
                    document.getElementById("milan-mon-minTemp").innerHTML = weekDays[1].minTemp + "°";
                    document.getElementById("milan-mon-maxTemp").innerHTML = weekDays[1].maxTemp + "°";
                    break;

                case 2:
                    weekDays[2].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[2].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[2].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-milan").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="milan-' + weekDays[2].day + '"></h4>' +
                        '<span id="milan-' + weekDays[2].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="milan-' + weekDays[2].day + '-maxTemp"></span>';
                    

                    document.getElementById("milan-tue").innerHTML = weekDays[2].day;
                    document.getElementById("milan-tue-minTemp").innerHTML = weekDays[2].minTemp + "°";
                    document.getElementById("milan-tue-maxTemp").innerHTML = weekDays[2].maxTemp + "°";
                    break;

                case 3:
                    weekDays[3].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[3].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[3].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-milan").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="milan-' + weekDays[3].day + '"></h4>' +
                        '<span id="milan-' + weekDays[3].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="milan-' + weekDays[3].day + '-maxTemp"></span>';
                   
                    document.getElementById("milan-wed").innerHTML = weekDays[3].day;
                    document.getElementById("milan-wed-minTemp").innerHTML = weekDays[3].minTemp + "°";
                    document.getElementById("milan-wed-maxTemp").innerHTML = weekDays[3].maxTemp + "°";
                    break;

                case 4:
                    weekDays[4].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[4].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[4].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-milan").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="milan-' + weekDays[4].day + '"></h4>' +
                        '<span id="milan-' + weekDays[4].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="milan-' + weekDays[4].day + '-maxTemp"></span>';

                    document.getElementById("milan-thu").innerHTML = weekDays[4].day;
                    document.getElementById("milan-thu-minTemp").innerHTML = weekDays[4].minTemp + "°";
                    document.getElementById("milan-thu-maxTemp").innerHTML = weekDays[4].maxTemp + "°";
                    break;

                case 5:
                    weekDays[5].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[5].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[5].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-milan").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="milan-' + weekDays[5].day + '"></h4>' +
                        '<span id="milan-' + weekDays[5].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="milan-' + weekDays[5].day + '-maxTemp"></span>';

                    document.getElementById("milan-fri").innerHTML = weekDays[5].day;
                    document.getElementById("milan-fri-minTemp").innerHTML = weekDays[5].minTemp + "°";
                    document.getElementById("milan-fri-maxTemp").innerHTML = weekDays[5].maxTemp + "°";
                    break;

                case 6:

                    weekDays[6].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[6].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[6].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-milan").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="milan-' + weekDays[6].day + '"></h4>' +
                        '<span id="milan-' + weekDays[6].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="milan-' + weekDays[6].day + '-maxTemp"></span>';
                        
                    document.getElementById("milan-sat").innerHTML = weekDays[6].day;
                    document.getElementById("milan-sat-minTemp").innerHTML = weekDays[6].minTemp + "°";
                    document.getElementById("milan-sat-maxTemp").innerHTML = weekDays[6].maxTemp + "°";
                    break;

                default:
            }
        }

        if (rtTemp >= 30) {
            document.getElementById("milan").classList.add("bg-gradient-30")
        } else if (rtTemp >= 20) {
            document.getElementById("milan").classList.add("bg-gradient-20")
        } else {
            document.getElementById("milan").classList.add("bg-gradient-10")
        }
    })
    .catch((error) => {
        console.log('Fetch failed', error);
    });