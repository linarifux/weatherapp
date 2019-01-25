const input = document.querySelector(".input-box");
const action = document.querySelector(".action");
const city = document.querySelector(".city-name");
const temp = document.querySelector(".temp");
const wind = document.querySelector(".wind");
const dayNight = document.querySelector(".day-night");


action.addEventListener('click', f => {
    var q = input.value;
    var KEY = "fd837d12a98443f2a9b193101192401";
    var BASE = "https://api.apixu.com/v1";
    if (input.value === "") {
        window.alert("please enter a valid city name")
    } else {
        fetch(`${BASE}/current.json?key=${KEY}&q=${q}`)
            .then(response => response.json())
            .then(boom => {
                city.innerHTML = `${boom.location.name}`;
                temp.innerHTML = `${boom.current.temp_c} &#8451;`;
                wind.innerHTML = `${boom.current.wind_kph} km/h`;
                if (boom.current.is_day === 0) {
                    dayNight.innerHTML = "Night";
                } else {
                    dayNight.innerHTML = "Day";
                }
            })
    }

    input.value = "";
})