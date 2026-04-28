const token = localStorage.getItem("token");

if (!token) {
  window.location.href = "login.html";
}

async function loadGames() {
  const res = await fetch("http://localhost:3000/api/games", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();

  const container = document.getElementById("games");
  container.innerHTML = "";

  data.forEach(g => {
    container.innerHTML += `
      <div class="game-card">
        ${g.title} - ⭐ ${g.rating}
      </div>
    `;
  });
}