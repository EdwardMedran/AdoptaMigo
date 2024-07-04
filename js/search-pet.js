document.addEventListener('DOMContentLoaded', () => {
    const inputTipo = localStorage.getItem('tipo');
    if (inputTipo) {
        document.getElementById('tipo').value = inputTipo;
        filterPets();
    }
});

function filterPets() {
    // Obtener los valores de los filtros
    const type = document.getElementById('tipo').value;
    const breed = document.getElementById('raza').value.toLowerCase();
    const age = document.getElementById('edad').value;
    const size = document.getElementById('tamano').value;
    const location = document.getElementById('ubicacion').value.toLowerCase();
    const gender = document.getElementById('genero').value;

    // Filtrar los datos
    const filteredPets = pets.filter(pet => {
        return (
            (type === "" || pet.type === type) &&
            (breed === "" || pet.breed.toLowerCase().includes(breed)) &&
            (age === "" || pet.age == age) &&
            (size === "" || pet.size === size) &&
            (location === "" || pet.location.toLowerCase().includes(location)) &&
            (gender === "" || pet.gender === gender)
        );
    });

    // Mostrar los datos filtrados
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    filteredPets.forEach(pet => {
        const petCard = document.createElement('article');
        petCard.className = 'pet-card';

        petCard.innerHTML = `
            <img src="../imagenes/${pet.type}-${pet.id}.png" alt="${pet.name}" class="pet-card__image">
            <h3 class="pet-card__name">${pet.name}</h3>
            <p class="pet-card__details">Raza: ${pet.breed}</p>
            <p class="pet-card__details">Edad: ${pet.age} años</p>
            <p class="pet-card__details">Tamaño: ${pet.size}</p>
            <p class="pet-card__details">Ubicación: ${pet.location}</p>
            <p class="pet-card__details">Género: ${pet.gender}</p>
            <button class="pet-card__button"><a href="detalles-mascota.html">Ver Detalles</a></button>
        `;

        resultsContainer.appendChild(petCard);
    });
}

// Inicializar la búsqueda con todos los datos
filterPets();
