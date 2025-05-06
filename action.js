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
