// Ejemplo de carga dinámica de mascotas (reemplaza con tu lógica real)
const mascotasGrid = document.querySelector('.mascotas-grid');

fetch('mascotas.json') // O donde tengas tus datos de mascotas
    .then(response => response.json())
    .then(mascotas => {
        mascotas.forEach(mascota => {
            const mascotaDiv = document.createElement('div');
            mascotaDiv.classList.add('mascota');
            mascotaDiv.innerHTML = `
                <img src="${mascota.imagen}" alt="${mascota.nombre}">
                <h3>${mascota.nombre}</h3>
                <p>${mascota.descripcion}</p>
                <a href="#" class="btn-mascota">Ver más</a>
            `;
            mascotasGrid.appendChild(mascotaDiv);
        });
    });

// ... (Lógica similar para cargar recursos, miembros del equipo, etc.) ...
