

let list = JSON.parse(localStorage.getItem("list")) || [];



function renderList() {
    const container = document.getElementById("second-container");
    container.innerHTML = "";

    for (let i = 0; i < list.length; i++) {
        container.innerHTML += `
        <div class="activity">
            <p class="activ costum">${list[i].name}</p>
            
            <div class="day-hour-content">
                <div class="day-hour">
                    <p class="costum">Day:</p>
                    <p class="costum">${list[i].day}</p>  
                </div>

                <div class="day-hour">
                    <p class="costum">Hour:</p>
                    <p class="costum">${list[i].hour}</p>
                </div>
            </div>

            <button class="remove" onclick="removeElement()">Remove</button>
        </div>`;
    }
}


function removeElement () {
    const button = document.querySelectorAll(".remove");

    button.forEach((element, index) => {
        element.addEventListener( 'click', function() {
            list.splice(index, 1);
            localStorage.setItem("list", JSON.stringify(list));
            renderList();
        })
    })
}


function addList() {

    const name = document.getElementById('activity-input');
    const day = document.getElementById('day-input');
    const hour = document.getElementById('hour-input');

    let nameValue = name.value.trim();
    let dayValue = day.value.trim();
    let hourValue = hour.value.trim();

    if(nameValue && dayValue && hourValue){
        list.push({
            name: nameValue,
            day: dayValue, 
            hour: hourValue
        });
        localStorage.setItem("list", JSON.stringify(list));
    }

    name.value = '';
    day.value = '';
    hour.value = '';

    renderList();
}

window.onload = renderList;



/*

let list = JSON.parse(localStorage.getItem("list")) || [];

function renderList() {
    let container = document.getElementById("container");

    container.innerHTML = `
        <input type="text" class="first-item-interface" placeholder="Type here...">
        <input type="submit" class="second-item-interface" value="Add" onclick="calcList()">`;

    for (let i = 0; i < list.length; i++) {
        container.innerHTML += `
            <p class="first-item">${list[i]}</p>
            <input type="submit" class="second-item" value="Remove" onclick="removeItem(${i})">`;
    }
}

function calcList() {
    let value = document.querySelector(".first-item-interface");
    let result = value.value.trim();

    if (result !== "") {
        list.push(result);
        localStorage.setItem("list", JSON.stringify(list));
        renderList();
    }
    value.value = "";
}

function removeItem(index) {
    list.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(list));
    renderList();
}

renderList();
*/