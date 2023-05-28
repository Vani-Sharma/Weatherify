const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temprealvalue = document.getElementById('temp-real-value');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = 'Please write the name before search';
        datahide.classList.add('data_hide');
    }
    else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            console.log(arrData);
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`;

            temprealvalue.innerHTML = arrData[0].main.temp;

            const tempmode = arrData[0].weather[0].main;
            if (tempmode == 'Haze') {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud-sun' style='color:#FBF073;'></i>"
            } else if (tempmode == 'Clear') {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            } else if (tempmode == 'Clouds') {
                temp_status.innerHTML =
                    "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            } else if (tempmode == 'Rain') {
                temp_status.innerHTML =
                    "<i class='fas fa-rain' style='color:#a4b0be;'></i>"
            } else {
                temp_status.innerHTML =
                    "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }

            datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = 'Please enter city name properly';
            datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo);