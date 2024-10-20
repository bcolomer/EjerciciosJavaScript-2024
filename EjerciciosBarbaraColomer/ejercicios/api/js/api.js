"use strict";
const form = document.getElementById("movieForm");
const movieTitleInput = document.getElementById("movieTitle");
const movieResultDiv = document.getElementById("movieResult");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Evitar el envío del formulario

    const title = movieTitleInput.value;
    const apiKey = "851c5016"; // Tu clave API de OMDB
    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(
        title
    )}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            movieResultDiv.innerHTML = `
                        <h2>${data.Title} (${data.Year})</h2>
                        <img src="${data.Poster}" alt="Poster de ${data.Title}">
                        <p><strong>Director:</strong> ${data.Director}</p>
                        <p><strong>Género:</strong> ${data.Genre}</p>
                        <p><strong>Resumen:</strong> ${data.Plot}</p>
                    `;
        } else {
            movieResultDiv.innerHTML = `<p>Película no encontrada.</p>`;
        }
    } catch (error) {
        console.error("Error:", error);
        movieResultDiv.innerHTML = `<p>Hubo un error al buscar la película.</p>`;
    }
});
