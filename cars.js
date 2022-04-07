const carElem = document.querySelector(".cars");
const colorElem = document.querySelector(".colors")
const brandElem = document.querySelector(".brands")
const filter = document.querySelector(".filterCars")
const brandSelec = document.querySelector(".brandSelect")
const colorSelec = document.querySelector(".colorSelect")
const btn = document.querySelector(".btnFilter")
const display = document.querySelector(".display")

const templateFilter = Handlebars.compile(filter.innerHTML)
var filterTheCars = []

btn.addEventListener("click", function(){
        var colors = colorSelec.value
        var makes = brandSelec.value

        axios
        .get("https://api-tutor.herokuapp.com/v1/cars/make/" + makes + '/color/' + colors)
        .then(results => results.data)
        .then(cars => {
            carElem.innerHTML = ""
            cars.forEach(function (car){
                console.log(car);
                const li = document.createElement("tr");
                li.innerHTML = `<tr>
                <td>${car.make}</td>
                <td>${car.model}</td>
                <td>${car.color}</td>
                <td>${car.price}</td>
                <td>${car.reg_number}</td>
            </tr>`
                carElem.appendChild(li)
            })
        })
        // var colors = colorSelec.value
        var makes = brandSelec.value

        axios
        .get("https://api-tutor.herokuapp.com/v1/cars/make/" + makes )
        .then(results => results.data)
        .then(cars => {
            carElem.innerHTML = ""
            cars.forEach(function (car){
                console.log(car);
                const li = document.createElement("tr");
                li.innerHTML = `<tr>
                <td>${car.make}</td>
                <td>${car.model}</td>
                <td>${car.price}</td>
                <td>${car.reg_number}</td>
            </tr>`
                carElem.appendChild(li)
            })
        })
        var colors = colorSelec.value

        axios
        .get("https://api-tutor.herokuapp.com/v1/cars/color/" + colors )
        .then(results => results.data)
        .then(cars => {
            carElem.innerHTML = ""
            cars.forEach(function (car){
                console.log(car);
                const li = document.createElement("tr");
                li.innerHTML = `<tr>
                <td>${car.color}</td>
                <td>${car.model}</td>
                <td>${car.price}</td>
                <td>${car.reg_number}</td>
            </tr>`
                carElem.appendChild(li)
            })
        })
})

axios
    .get("https://api-tutor.herokuapp.com/v1/colors")
    .then(function (results) {
        results.data.forEach(color => {

            const li = document.createElement("ul");
            li.innerHTML = `<ul>
            <li>${color}</li>
        </ul>`
            colorElem.appendChild(li)
        });
    })

    axios
    .get("https://api-tutor.herokuapp.com/v1/makes")
    .then(function (results) {
        results.data.forEach(makes => {

            const li = document.createElement("ul");
            li.innerHTML = `<ul>
            <li>${makes}</li>
        </ul>`
            brandElem.appendChild(li)
        });
    })

axios
    .get("https://api-tutor.herokuapp.com/v1/cars")
    .then(function (results) {
        results.data.forEach(car => {

            const li = document.createElement("tr");
            li.innerHTML = `<tr>
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.color}</td>
            <td>${car.price}</td>
            <td>${car.reg_number}</td>
        </tr>`
            carElem.appendChild(li)
        });
    })

    
