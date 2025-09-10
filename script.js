let playlist = [];

function renderPlaylist(filteredList = playlist) {
  const ul = document.getElementById("playlist");
  ul.innerHTML = "";

  for (let [index, music] of filteredList.entries()) {
    const li = document.createElement("li");
    li.className = "list-group-item playlist-item";

    li.innerHTML = `
      <span>${music}</span>
      <div>
        <button onclick="editMusic(${index})" class="btn btn-sm btn-secondary me-2">Editar</button>
        <button onclick="deleteMusic(${index})" class="btn btn-sm btn-danger">Excluir</button>
      </div>
    `;

    ul.appendChild(li);
  }
}

function addMusic() {
  const input = document.getElementById("musicInput");
  const musicName = input.value.trim();

  if (musicName) {
    playlist.push(musicName); 
    input.value = "";
    renderPlaylist();
  }
}

function removeLast() {
  playlist.pop(); 
  renderPlaylist();
}

function sortPlaylist() {
  playlist.sort(); 
  renderPlaylist();
}

function deleteMusic(index) {
  playlist.splice(index, 1);
  renderPlaylist();
}

function editMusic(index) {
  const newName = prompt("Editar nome da música:", playlist[index]);
  if (newName !== null && newName.trim() !== "") {
    playlist[index] = newName.trim();
    renderPlaylist();
  }
}

function searchMusic() {
  const query = document.getElementById("searchInput").value.toLowerCase();

  const filtered = playlist.filter(music => music.toLowerCase().includes(query)); 
  renderPlaylist(filtered);
}