fetch("https://weatherbit-v1-mashape.p.rapidapi.com/forecast/daily?lat=34.05&lon=-118.2437&units=metric&lang=it", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "00f7e13c07mshcd12244b5c5f2d7p13c440jsna676b1c7c90d",
        "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com"

    }
})

.then(response => response.json())
    .then(response => {

        rtTemp = response.data[0].temp;
        rtMinTemp = response.data[0].min_temp;
        rtMaxTemp = response.data[0].max_temp;
        rtDate = response.data[0].valid_date;

        document.getElementById("city-losangeles").innerHTML = response.city_name;
        document.getElementById("weather-losangeles").innerHTML = response.data[0].weather.description;
        document.getElementById("temp-losangeles").innerHTML = Math.round(rtTemp) + "<sup style='font-size: 3.5rem'>&deg;</sup>";
        document.getElementById("maxTemp-losangeles").innerHTML = Math.round(rtMaxTemp) + "°";
        document.getElementById("minTemp-losangeles").innerHTML = Math.round(rtMinTemp) + "°";

        for (var index = 0; index < 7; index++) {

            weekDay = new Date(response.data[index].valid_date.toString())

            switch (weekDay.getDay()) {
                case 0:
                    weekDays[0].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[0].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[0].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-losangeles").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="losangeles-' + weekDays[0].day + '"></h4>' +
                        '<span id="losangeles-' + weekDays[0].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="losangeles-' + weekDays[0].day + '-maxTemp"></span>';

                    document.getElementById("losangeles-sun").innerHTML = weekDays[0].day;
                    document.getElementById("losangeles-sun-minTemp").innerHTML = weekDays[0].minTemp + "°";
                    document.getElementById("losangeles-sun-maxTemp").innerHTML = weekDays[0].maxTemp + "°";

                    break;

                case 1:
                    weekDays[1].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[1].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[1].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-losangeles").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="losangeles-' + weekDays[1].day + '"></h4>' +
                        '<span id="losangeles-' + weekDays[1].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="losangeles-' + weekDays[1].day + '-maxTemp"></span>';

                    document.getElementById("losangeles-mon").innerHTML = weekDays[1].day;
                    document.getElementById("losangeles-mon-minTemp").innerHTML = weekDays[1].minTemp + "°";
                    document.getElementById("losangeles-mon-maxTemp").innerHTML = weekDays[1].maxTemp + "°";

                    break;

                case 2:
                    weekDays[2].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[2].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[2].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-losangeles").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="losangeles-' + weekDays[2].day + '"></h4>' +
                        '<span id="losangeles-' + weekDays[2].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="losangeles-' + weekDays[2].day + '-maxTemp"></span>';

                    document.getElementById("losangeles-tue").innerHTML = weekDays[2].day;
                    document.getElementById("losangeles-tue-minTemp").innerHTML = weekDays[2].minTemp + "°";
                    document.getElementById("losangeles-tue-maxTemp").innerHTML = weekDays[2].maxTemp + "°";

                    break;

                case 3:
                    weekDays[3].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[3].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[3].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-losangeles").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="losangeles-' + weekDays[3].day + '"></h4>' +
                        '<span id="losangeles-' + weekDays[3].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="losangeles-' + weekDays[3].day + '-maxTemp"></span>';

                    document.getElementById("losangeles-wed").innerHTML = weekDays[3].day;
                    document.getElementById("losangeles-wed-minTemp").innerHTML = weekDays[3].minTemp + "°";
                    document.getElementById("losangeles-wed-maxTemp").innerHTML = weekDays[3].maxTemp + "°";

                    break;

                case 4:
                    weekDays[4].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[4].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[4].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-losangeles").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="losangeles-' + weekDays[4].day + '"></h4>' +
                        '<span id="losangeles-' + weekDays[4].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="losangeles-' + weekDays[4].day + '-maxTemp"></span>';

                    document.getElementById("losangeles-thu").innerHTML = weekDays[4].day;
                    document.getElementById("losangeles-thu-minTemp").innerHTML = weekDays[4].minTemp + "°";
                    document.getElementById("losangeles-thu-maxTemp").innerHTML = weekDays[4].maxTemp + "°";

                    break;

                case 5:
                    weekDays[5].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[5].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[5].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-losangeles").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="losangeles-' + weekDays[5].day + '"></h4>' +
                        '<span id="losangeles-' + weekDays[5].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="losangeles-' + weekDays[5].day + '-maxTemp"></span>';

                    document.getElementById("losangeles-fri").innerHTML = weekDays[5].day;
                    document.getElementById("losangeles-fri-minTemp").innerHTML = weekDays[5].minTemp + "°";
                    document.getElementById("losangeles-fri-maxTemp").innerHTML = weekDays[5].maxTemp + "°";

                    break;

                case 6:

                    weekDays[6].minTemp = Math.round(response.data[index].min_temp);
                    weekDays[6].maxTemp = Math.round(response.data[index].max_temp);
                    weekDays[6].validDate = response.data[index].valid_date.toString();

                    document.getElementById("weather-week-losangeles").innerHTML += '<div class="weather-week-day">' +
                        '<h4 id="losangeles-' + weekDays[6].day + '"></h4>' +
                        '<span id="losangeles-' + weekDays[6].day + '-minTemp"></span>' +
                        '<span>/</span>' +
                        '<span id="losangeles-' + weekDays[6].day + '-maxTemp"></span>';

                    document.getElementById("losangeles-sat").innerHTML = weekDays[6].day;
                    document.getElementById("losangeles-sat-minTemp").innerHTML = weekDays[6].minTemp + "°";
                    document.getElementById("losangeles-sat-maxTemp").innerHTML = weekDays[6].maxTemp + "°";

                    break;
                    
                default:
            }
        }

        if (rtTemp >= 30) {
            document.getElementById("losangeles").classList.add("bg-gradient-30")
        } else if (rtTemp >= 20) {
            document.getElementById("losangeles").classList.add("bg-gradient-20")
        } else {
            document.getElementById("losangeles").classList.add("bg-gradient-10")
        }
    })
    .catch((error) => {
        console.log('Fetch failed', error);
    });
