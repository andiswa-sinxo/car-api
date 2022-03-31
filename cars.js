const carElem = document.querySelector(".cars");


axios
    .get("http://api-tutor.herokuapp.com/v1/cars")
    .then(function (resutls) {
        resutls.data.forEach(car => {

            const li = document.createElement("tr");
            li.innerHTML = `<tr>
            <td>${car.make}</td>
            <td>${car.model}</td>
            <td>${car.color}</td>
        </tr>`
            carElem.appendChild(li)
        });
    })

    
