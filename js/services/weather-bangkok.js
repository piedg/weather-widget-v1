fetch("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=13.75&lon=100.5167&units=metric&lang=it", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "",
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"
    }
})

.then(response => response.json())
    .then(response => {

        rtTemp = response.data[0].temp;
        rtMinTemp = response.data[0].min_temp;
        rtMaxTemp = response.data[0].max_temp;
        rtDate = response.data[0].valid_date;

        document.getElementById("city-bangkok").innerHTML = response.city_name;
        document.getElementById("weather-bangkok").innerHTML = response.data[0].weather.description;
        document.getElementById("temp-bangkok").innerHTML = Math.round(rtTemp) + "<sup style='font-size: 3.5rem'>&deg;</sup>";
        document.getElementById("maxTemp-bangkok").innerHTML = Math.round(rtMaxTemp) + "°";
        document.getElementById("minTemp-bangkok").innerHTML = Math.round(rtMinTemp) + "°";

        for (var index = 0; index < 7; index++) {

            weekDay = new Date(response.data[index].valid_date.toString())

            switch (weekDay.getDay()) {
                case 0:
                    weekDays[0].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[0].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[0].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-bangkok").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="bangkok-' + weekDays[0].day + '"></h4>' +
                        '<span id="bangkok-' + weekDays[0].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="bangkok-' + weekDays[0].day + '-maxTemp"></span>';

                    document.getElementById("bangkok-sun").innerHTML = weekDays[0].day;
                    document.getElementById("bangkok-sun-minTemp").innerHTML = weekDays[0].minTemp + "°";
                    document.getElementById("bangkok-sun-maxTemp").innerHTML = weekDays[0].maxTemp + "°";

                    break;

                case 1:
                    weekDays[1].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[1].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[1].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-bangkok").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="bangkok-' + weekDays[1].day + '"></h4>' +
                        '<span id="bangkok-' + weekDays[1].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="bangkok-' + weekDays[1].day + '-maxTemp"></span>';

                    document.getElementById("bangkok-mon").innerHTML = weekDays[1].day;
                    document.getElementById("bangkok-mon-minTemp").innerHTML = weekDays[1].minTemp + "°";
                    document.getElementById("bangkok-mon-maxTemp").innerHTML = weekDays[1].maxTemp + "°";

                    break;

                case 2:
                    weekDays[2].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[2].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[2].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-bangkok").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="bangkok-' + weekDays[2].day + '"></h4>' +
                        '<span id="bangkok-' + weekDays[2].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="bangkok-' + weekDays[2].day + '-maxTemp"></span>';

                    document.getElementById("bangkok-tue").innerHTML = weekDays[2].day;
                    document.getElementById("bangkok-tue-minTemp").innerHTML = weekDays[2].minTemp + "°";
                    document.getElementById("bangkok-tue-maxTemp").innerHTML = weekDays[2].maxTemp + "°";

                    break;

                case 3:
                    weekDays[3].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[3].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[3].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-bangkok").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="bangkok-' + weekDays[3].day + '"></h4>' +
                        '<span id="bangkok-' + weekDays[3].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="bangkok-' + weekDays[3].day + '-maxTemp"></span>';

                    document.getElementById("bangkok-wed").innerHTML = weekDays[3].day;
                    document.getElementById("bangkok-wed-minTemp").innerHTML = weekDays[3].minTemp + "°";
                    document.getElementById("bangkok-wed-maxTemp").innerHTML = weekDays[3].maxTemp + "°";

                    break;

                case 4:
                    weekDays[4].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[4].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[4].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-bangkok").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="bangkok-' + weekDays[4].day + '"></h4>' +
                        '<span id="bangkok-' + weekDays[4].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="bangkok-' + weekDays[4].day + '-maxTemp"></span>';

                    document.getElementById("bangkok-thu").innerHTML = weekDays[4].day;
                    document.getElementById("bangkok-thu-minTemp").innerHTML = weekDays[4].minTemp + "°";
                    document.getElementById("bangkok-thu-maxTemp").innerHTML = weekDays[4].maxTemp + "°";

                    break;

                case 5:
                    weekDays[5].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[5].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[5].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-bangkok").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="bangkok-' + weekDays[5].day + '"></h4>' +
                        '<span id="bangkok-' + weekDays[5].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="bangkok-' + weekDays[5].day + '-maxTemp"></span>';

                    document.getElementById("bangkok-fri").innerHTML = weekDays[5].day;
                    document.getElementById("bangkok-fri-minTemp").innerHTML = weekDays[5].minTemp + "°";
                    document.getElementById("bangkok-fri-maxTemp").innerHTML = weekDays[5].maxTemp + "°";

                    break;

                case 6:

                    weekDays[6].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[6].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[6].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-bangkok").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="bangkok-' + weekDays[6].day + '"></h4>' +
                        '<span id="bangkok-' + weekDays[6].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="bangkok-' + weekDays[6].day + '-maxTemp"></span>';

                    document.getElementById("bangkok-sat").innerHTML = weekDays[6].day;
                    document.getElementById("bangkok-sat-minTemp").innerHTML = weekDays[6].minTemp + "°";
                    document.getElementById("bangkok-sat-maxTemp").innerHTML = weekDays[6].maxTemp + "°";

                    break;
                    
                default:
            }
        }

        if (rtTemp >= 30) {
            document.getElementById("bangkok").classList.add("bg-gradient-30")
        } else if (rtTemp >= 20) {
            document.getElementById("bangkok").classList.add("bg-gradient-20")
        } else {
            document.getElementById("bangkok").classList.add("bg-gradient-10")
        }
    })
    .catch((error) => {
        console.log('Fetch failed', error);
    });
