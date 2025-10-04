const API_KEY = "9e8f1a2";

    document.getElementById("searchBtn").addEventListener("click", () => {
      const movieTitle = document.getElementById("movieInput").value.trim();
      if (!movieTitle) {
        alert("Введіть назву фільму!");
        return;
      }

      const url = `http://www.omdbapi.com/?apikey=${API_KEY}&t=${movieTitle}`;

      fetch(url)
        .then(response => response.json())
        .then(data => {
          if (data.Response === "True") {
            document.getElementById("movie").innerHTML = `
              <h2>${data.Title} (${data.Year})</h2>
              <p><b>Жанр:</b> ${data.Genre}</p>
              <p><b>Режисер:</b> ${data.Director}</p>
              <p><b>Актори:</b> ${data.Actors}</p>
              <p><b>IMDB рейтинг:</b> ${data.imdbRating}</p>
              <img src="${data.Poster}" alt="Poster">
            `;
          } else {
            document.getElementById("movie").innerText = "Фільм не знайдено!";
          }
        })
        .catch(error => console.error("Сталася помилка:", error));
    });