"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};


// Referencias a los elementos HTML
const selectElement = document.getElementById("items");
const imageElement = document.getElementById("displayImage");
const photographerInput = document.getElementById("photographer");
const descriptionInput = document.getElementById("description");
const scoreInput = document.getElementById("score");
const increaseBtn = document.getElementById("increaseScore");
const decreaseBtn = document.getElementById("decreaseScore");

// Estado actual del ítem seleccionado
let currentItemKey = null;

// Esperar a que cargue el DOM
document.addEventListener("DOMContentLoaded", () => {
    // Agrega las opciones al <select>
    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = item.name;
        selectElement.appendChild(option);
    });
});

// Escuchar cambio en el select
selectElement.addEventListener("change", (event) => {
    const selectedKey = event.target.value;
    const selectedItem = itemData[selectedKey];
    if (selectedItem) {
        currentItemKey = selectedKey;
        imageElement.src = selectedItem.image;
        photographerInput.value = selectedItem.photographer;
        descriptionInput.value = selectedItem.description;
        scoreInput.value = selectedItem.score;
    }
});

// Votar +1
increaseBtn.addEventListener("click", () => {
    if (currentItemKey) {
        itemData[currentItemKey].score++;
        scoreInput.value = itemData[currentItemKey].score;
    }
});

// Votar -1
decreaseBtn.addEventListener("click", () => {
    if (currentItemKey) {
        itemData[currentItemKey].score--;
        scoreInput.value = itemData[currentItemKey].score;
    }
});