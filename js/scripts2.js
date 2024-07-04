let currentPetIndex = 0;

const pets = [
    {
        name: "Golden Retriever",
        age: "6 meses",
        breed: "Golden Retriever",
        size: "Grande",
        health: "Vacunado, Desparasitado",
        history: "Rescatado de la calle necesita un hogar amoroso",
        image: "../imagenes/Golden.jpg",
        map: "../imagenes/mapagolden.jpg"
    },
    {
        name: "Labrador",
        age: "1 año",
        breed: "Labrador Retriever",
        size: "Grande",
        health: "Vacunado, Desparasitado",
        history: "Entregado por su dueño anterior",
        image: "../imagenes/Labrador.jpg",
        map: "../imagenes/mapalabrador.jpg"
    },
    {
        name: "Beagle",
        age: "8 meses",
        breed: "Beagle",
        size: "Mediano",
        health: "Vacunado",
        history: "Rescatado de un refugio",
        image: "../imagenes/Beagle.jpg",
        map: "../imagenes/mapabeagle.jpg"
    }
];

function updatePetInfo(index) {
    document.getElementById('pet-name').textContent = pets[index].name;
    document.getElementById('pet-age').textContent = pets[index].age;
    document.getElementById('pet-breed').textContent = pets[index].breed;
    document.getElementById('pet-size').textContent = pets[index].size;
    document.getElementById('pet-health').textContent = pets[index].health;
    document.getElementById('pet-history').textContent = pets[index].history;
    document.getElementById('pet-image').src = pets[index].image;
    document.getElementById('map-image').src = pets[index].map;
}

function nextPet() {
    currentPetIndex = (currentPetIndex + 1) % pets.length;
    updatePetInfo(currentPetIndex);
}

function previousPet() {
    currentPetIndex = (currentPetIndex - 1 + pets.length) % pets.length;
    updatePetInfo(currentPetIndex);
}

window.onload = function() {
    updatePetInfo(currentPetIndex);
};
