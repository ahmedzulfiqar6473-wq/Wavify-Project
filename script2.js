// ======================================
// AUTH (Waviify) — session from login page
// ======================================
let currentUser = null;
try { currentUser = JSON.parse(localStorage.getItem("waviify_session")); } catch (e) {}
const isLoggedIn = !!currentUser;
const loginPopup = document.getElementById("loginPopup");

if (!isLoggedIn) {
  window.location.replace("index.html");
}

document.getElementById("userName").textContent = currentUser ? currentUser.name : "";

document.getElementById("logoutBtn").addEventListener("click", () => {
  localStorage.removeItem("waviify_session");
  window.location.href = "index.html";
});
document.getElementById("goToLogin").addEventListener("click", () => {
  window.location.href = "index.html";
});
document.getElementById("closeLoginPopup").addEventListener("click", () => {
  loginPopup.classList.remove("show");
});

const songsDatabase = [
  // SEARCH ONLY
  { title: "Safar", artist: "Bayaan, Sherazam", category: "search-only", src: "songs/safar.aac", img: "images/safar.png" },
  { title: "Sapna", artist: "Bayaan, Sherazam, Rovalio", category: "search-only", src: "songs/sapna.aac", img: "images/sapna.png" },
  { title: "Nindiya-Re", artist: "Kaavish", category: "search-only", src: "songs/nindiyare.mp3", img: "images/nindiyare.png" },
  { title: "Inaam", artist: "Anuv Jain", category: "search-only", src: "songs/inaam.mp3", img: "images/inaam.png" },
  { title: "Beauty And A Beat", artist: "Justin Bieber, Nicki Minaj", category: "search-only", src: "songs/beautyansabeat.mp3", img: "images/beautyandbeat.png" },
  { title: "Spring Snow", artist: "10CM", category: "search-only", src: "songs/springsnow.mp3", img: "images/springsnow.png" },
  { title: "Sudden Shower", artist: "Eclipse", category: "search-only", src: "songs/suddenshower.mp3", img: "images/suddenshower.png" },
  { title: "Wildflower", artist: "Billie Ellish", category: "search-only", src: "songs/wildflower.aac", img: "images/wildflower.png" },
  { title: "Birds Of A Feather", artist: "Billie Ellish", category: "search-only", src: "songs/birdsofafeather.mp3", img: "images/birdsofafeather.png" },
  { title: "Sailor", artist: "Gigi Perez", category: "search-only", src: "songs/sailor.mp3", img: "images/sailor.png" },

  // MUSIC
  { title: "Arz Kia H", artist: "Anuv Jain", category: "music", src: "songs/arzkiahmusic.aac", img: "images/arzkiah.png" },
  { title: "Tum Hi Ho", artist: "Arijit Singh", category: "music", src: "songs/tumhihomusic.aac", img: "images/tumhiho.png" },
  { title: "Rockstar", artist: "Post Malone", category: "music", src: "songs/rockstar.aac", img: "images/rockstar.png" },

  // POP
  { title: "Night Changes", artist: "One Direction", category: "pop", src: "songs/nightchanges.mp3", img: "images/nightchanges.png" },
  { title: "Blinding Lights", artist: "The Weeknd", category: "pop", src: "songs/blindinglights.aac", img: "images/blindinglights.png" },
  { title: "Stay", artist: "The Kid Laroi", category: "pop", src: "songs/stay.aac", img: "images/stay.png" },
  { title: "Heat Waves", artist: "Glass Animals", category: "pop", src: "songs/heatwaves.aac", img: "images/heatwaves.png" },
  { title: "Believer", artist: "Imagine Dragons", category: "pop", src: "songs/believer.aac", img: "images/believer.png" },
  { title: "As It Was", artist: "Harry Styles", category: "pop", src: "songs/asitwas.aac", img: "images/as it was.png" },

  // MADE FOR YOU
  { title: "Hum", artist: "Murtaza Qizilbash", category: "made-for-you", src: "songs/hum.aac", img: "images/hum.png" },
  { title: "Khasara", artist: "Samar Jafri", category: "made-for-you", src: "songs/khasara.mp3", img: "images/khasara.png" },
  { title: "Sun Sawariya", artist: "Achaa Insaan", category: "made-for-you", src: "songs/sunsawariya.mp3", img: "images/sunsawariya.png" },
  { title: "Har Baar", artist: "Samar Jafri, Murtaza Qizilbash", category: "made-for-you", src: "songs/harbaar.mp3", img: "images/harbaar.png" },
  { title: "Bairan", artist: "Banjaare", category: "made-for-you", src: "songs/bairan.aac", img: "images/bairan.png" },
  { title: "Khat", artist: "Navjot Ahuja", category: "made-for-you", src: "songs/khat.aac", img: "images/khat.png" },

  // DESI
  { title: "Jhol", artist: "Maanu", category: "desi", src: "songs/jhol.aac", img: "images/jhol.png" },
  { title: "Pasoori", artist: "Ali Sethi & Shae Gill", category: "desi", src: "songs/pasoori.aac", img: "images/pasoori.png" },
  { title: "Raataan Lambiyan", artist: "Jubin Nautiyal", category: "desi", src: "songs/raatanlambiyan.aac", img: "images/raatanlambiyan.png" },
  { title: "Kesariya", artist: "Arijit Singh", category: "desi", src: "songs/kesariya.aac", img: "images/kesariya.png" },
  { title: "Woh Lamhe", artist: "Atif Aslam", category: "desi", src: "songs/wohlamhe.aac", img: "images/wohlamhe.png" },
  { title: "Ve Maahi", artist: "Arijit Singh & Asees Kaur", category: "desi", src: "songs/maahive.aac", img: "images/vemaahi.png" },

  // PUNJABI
  { title: "Excuses", artist: "AP Dhillon", category: "punjabi", src: "songs/excuses.aac", img: "images/excuses.png" },
  { title: "Brown Munde", artist: "AP Dhillon", category: "punjabi", src: "songs/brownmunde.aac", img: "images/brownmunde.png" },
  { title: "Lover", artist: "Diljit Dosanjh", category: "punjabi", src: "songs/lover.mp3", img: "images/lover.png" },
  { title: "G.O.A.T.", artist: "Diljit Dosanjh", category: "punjabi", src: "songs/goat.aac", img: "images/goat.png" },
  { title: "Illegal Weapon", artist: "Jasmine Sandlas", category: "punjabi", src: "songs/illegalweapon.aac", img: "images/illegalweapon.png" },

  // HIP-HOP
  { title: "Gods Plan", artist: "Drake", category: "hip-hop", src: "songs/god'splan.aac", img: "images/god'splan.png" },
  { title: "Sunflower", artist: "Post Malone & Swae Lee", category: "hip-hop", src: "songs/sunflower.aac", img: "images/sunflower.png" },

  // LIVE EVENTS
  { title: "Bohemian Rhapsody", artist: "Queen (Live)", category: "live-events", src: "songs/bohemianrhapsody.aac", img: "images/bohemianrhapsody.png" },
  { title: "Hotel California", artist: "Eagles (Live)", category: "live-events", src: "songs/hotelcalifornia.aac", img: "images/hotelcalifornia.png" },
];
// ======================================
// STATE
// ======================================
let currentPlayBtn = null;

// ======================================
// ELEMENT REFERENCES
// ======================================

const audioPlayer       = document.getElementById("audioPlayer");
const searchPage        = document.getElementById("searchPage");
const mainSearchInput   = document.getElementById("mainSearchInput");
const searchPageInput   = document.getElementById("searchPageInput");
const createPlaylistBtn = document.getElementById("createPlaylistBtn");
const playlistContainer = document.getElementById("playlistContainer");
const mainContent       = document.getElementById("mainContent");

const searchBackBtn  = document.getElementById("searchBackBtn");

// ======================================
// HELPERS
// ======================================

// ======================================
// SIDEBAR MENU
// ======================================

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    menuItems.forEach((m) => m.classList.remove("active"));
    item.classList.add("active");

    if (item.dataset.page === "search") {
      openSearchPage();
    } else if (item.dataset.page === "home") {
      closeSearchPage();
    }
  });
});

// Back button
searchBackBtn.addEventListener("click", closeSearchPage);

// Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchPage.classList.contains("show")) {
    closeSearchPage();
  }
});

// ======================================
// PLAY BUTTONS
// ======================================
function setupPlayButtons() {
  // ======================================
// UNIFIED PLAY HANDLER — Cards + Recent Grid + Player Bar
// ======================================
document.addEventListener("click", (e) => {

  // ── 1. PLAY BUTTON on a .card ──
  const playBtn = e.target.closest(".play-btn");
  if (playBtn) {
    const card = playBtn.closest(".card");
    if (!card) return;

    const songSrc = card.dataset.song;
    if (!songSrc) { showToast("No song file linked."); return; }

    const song = songsDatabase.find(s => s.src === songSrc);
    if (song) {
      currentTrackList  = songsDatabase.filter(s => s.category === song.category);
      currentTrackIndex = currentTrackList.findIndex(s => s.src === songSrc);
      playTrackInBar(song);
    } else {
      playerBar.style.display  = "flex";
      playerThumb.src          = card.querySelector("img")?.src || "";
      playerTitle.textContent  = card.querySelector("h4")?.textContent || "Unknown";
      playerArtist.textContent = card.querySelector("p")?.textContent  || "";
      audioPlayer.src = songSrc;
      audioPlayer.load();
      audioPlayer.play();
      playerPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    return;
  }

  // ── 2. RECENT GRID item or its play button ──
  const recentPlayBtn = e.target.closest(".recent-play-btn");
  const recentItem    = e.target.closest(".recent-item");

  const targetRecent = recentPlayBtn
    ? recentPlayBtn.closest(".recent-item")
    : recentItem;

  if (targetRecent) {
    const songSrc = targetRecent.dataset.song;
    if (!songSrc) return;

    const song = songsDatabase.find(s => s.src === songSrc);
    if (song) {
      currentTrackList  = songsDatabase.filter(s => s.category === song.category);
      currentTrackIndex = currentTrackList.findIndex(s => s.src === songSrc);
      playTrackInBar(song);
    } else {
      playerBar.style.display  = "flex";
      playerThumb.src          = targetRecent.querySelector("img")?.src  || "";
      playerTitle.textContent  = targetRecent.querySelector("span")?.textContent || "Unknown";
      playerArtist.textContent = "";
      audioPlayer.src = songSrc;
      audioPlayer.load();
      audioPlayer.play();
      playerPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    return;
  }

});
}


setupPlayButtons();

// ======================================
// SEARCH / FILTER CARDS
// ======================================

// ======================================
// SEARCH CLEAR BUTTON
// ======================================

const searchClearBtn = document.getElementById("searchClearBtn");
const searchDropdown = document.getElementById("searchDropdown");

mainSearchInput.addEventListener("input", handleSearchInput);

searchClearBtn.addEventListener("click", () => {
  mainSearchInput.value = "";
  searchClearBtn.style.display = "none";
  searchDropdown.classList.remove("visible");
  searchDropdown.innerHTML = "";
  document.getElementById("searchResults").style.display = "none";
  document.getElementById("searchResults").innerHTML = "";
  document.getElementById("Homepage").style.display = "flex";
  mainSearchInput.focus();
});

// Close dropdown when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrapper")) {
    searchDropdown.classList.remove("visible");
  }
});

async function handleSearchInput() {
  const query = mainSearchInput.value.trim();
  const searchResults = document.getElementById("searchResults");

  // Show/hide clear button
  searchClearBtn.style.display = query ? "inline-flex" : "none";

  if (!query) {
    searchDropdown.classList.remove("visible");
    searchDropdown.innerHTML = "";
    searchResults.style.display = "none";
    searchResults.innerHTML = "";
    document.getElementById("Homepage").style.display = "flex";
    return;
  }

  // --- DROPDOWN SUGGESTIONS (local database se) ---
  const lowerQ = query.toLowerCase();
  const matched = songsDatabase.filter(s =>
    s.title.toLowerCase().includes(lowerQ) ||
    s.artist.toLowerCase().includes(lowerQ)
  ).slice(0, 6);

  searchDropdown.innerHTML = "";

  // Text-only suggestions (title matches)
 // Text-only suggestions
const textSuggestions = matched.slice(0, 4).map(s => {
  const title = s.title;
  const idx = title.toLowerCase().indexOf(lowerQ);
  let highlighted = title;
  if (idx !== -1) {
    highlighted =
      title.substring(0, idx) +
      `<span class="bold-match">${title.substring(idx, idx + query.length)}</span>` +
      title.substring(idx + query.length);
  }
  return `
    <div class="dropdown-item" data-song="${s.src}" data-title="${s.title}">
      <i class="fa-solid fa-magnifying-glass dd-icon"></i>
      <div class="dd-text">
        <div class="dd-title">${highlighted}</div>
      </div>
    </div>`;
}).join("");

// Song suggestions (with thumbnail)
const songSuggestions = matched.map(s => {
  return `
    <div class="dropdown-item" data-song="${s.src}" data-title="${s.title}">
      <img class="dd-thumb" src="${s.img}" alt="${s.title}" />
      <div class="dd-text">
        <div class="dd-title">${s.title}</div>
        <div class="dd-sub">Song • ${s.artist}</div>
      </div>
      <div class="dropdown-play-btn"><i class="fa-solid fa-play"></i></div>
    </div>`;
}).join("");

  if (matched.length > 0) {
    searchDropdown.innerHTML = textSuggestions + songSuggestions;
    searchDropdown.classList.add("visible");

    searchDropdown.querySelectorAll(".dropdown-item").forEach(item => {

      // Play button click
      const playBtn = item.querySelector(".dropdown-play-btn");
      if (playBtn) {
        playBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          
          const songSrc = item.dataset.song;
          if (!songSrc) { showToast("No song file linked."); return; }

          if (currentPlayBtn) {
            currentPlayBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
          }

          audioPlayer.src = songSrc;
          audioPlayer.play();
          playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
          currentPlayBtn = playBtn;

          audioPlayer.onended = () => {
            playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            currentPlayBtn = null;
          };
        });
      }

      // Row click — search fill karo
      item.addEventListener("click", (e) => {
        if (e.target.closest(".dropdown-play-btn")) return;
        const title = item.dataset.title;
        mainSearchInput.value = title;
        searchClearBtn.style.display = "inline-flex";
        searchDropdown.classList.remove("visible");
        showSearchResults(title);
      });

    });
  } else {
    searchDropdown.classList.remove("visible");
  }

  // Main results bhi update karo
  showSearchResults(query);
}

function showSearchResults(query) {
  const searchResults = document.getElementById("searchResults");
  const lowerQ = query.toLowerCase();
  const matched = songsDatabase.filter(s =>
    s.title.toLowerCase().includes(lowerQ) ||
    s.artist.toLowerCase().includes(lowerQ)
  );

  document.getElementById("Homepage").style.display = "none";
  searchResults.style.display = "flex";
  searchResults.innerHTML = "";

  if (matched.length === 0) {
    searchResults.innerHTML = `<p style="color:#b3b3b3; padding:20px;">No results found for "<strong>${query}</strong>".</p>`;
    return;
  }
// Agar query empty hai toh recommendations dikhao
if (!q) {
  const recommended = songsDatabase
    .filter(s => s.category !== "search-only")
    .slice(0, 6);
  
  recommended.forEach(song => {
    const alreadyAdded = pl && pl.songs.some(s => s.title === song.title);
    const row = document.createElement("div");
    row.className = "pl-result-row";
    row.innerHTML = `
      <img class="pl-result-img" src="${song.img}" alt="${song.title}" />
      <div class="pl-result-info">
        <div class="pl-result-title">${song.title}</div>
        <div class="pl-result-artist">${song.artist}</div>
      </div>
      <button class="pl-add-btn ${alreadyAdded ? "added" : ""}">
        ${alreadyAdded ? "Added" : "Add"}
      </button>
    `;
    const addBtn = row.querySelector(".pl-add-btn");
    addBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (addBtn.classList.contains("added")) return;
      addSongToPlaylist(song);
      addBtn.textContent = "Added";
      addBtn.classList.add("added");
      showToast(`"${song.title}" added!`);
    });
    playlistSearchResults.appendChild(row);
  });
  return;
}
  matched.forEach(track => {
    const div = document.createElement("div");
    div.className = "card";
    div.dataset.song = track.src || "";
    div.innerHTML = `
      <div class="image-box">
        <img src="${track.img}" alt="${track.title}" />
        <div class="play-btn"><i class="fa-solid fa-play"></i></div>
      </div>
      <h4>${track.title}</h4>
      <p>${track.artist}</p>
    `;
    searchResults.appendChild(div);
  });

  setupPlayButtons();
}

  // Agar search empty ho toh normal cards dikhao

// ======================================
// SCROLL BUTTONS
// ======================================

const cardContainers = document.querySelectorAll(".card-container");

document.querySelectorAll("section").forEach((section) => {
  const leftBtn   = section.querySelector(".scroll-left");
  const rightBtn  = section.querySelector(".scroll-right");
  const container = section.querySelector(".card-container");

  if (leftBtn && container) {
    leftBtn.addEventListener("click", () => {
      container.scrollBy({ left: -300, behavior: "smooth" });
    });
  }
  if (rightBtn && container) {
    rightBtn.addEventListener("click", () => {
      container.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});
document.querySelectorAll("section").forEach((section) => {
  const leftBtn    = section.querySelector(".scroll-left");
  const rightBtn   = section.querySelector(".scroll-right");
  const container  = section.querySelector(".card-container");

  if (leftBtn && container) {
    leftBtn.addEventListener("click", () => {
      container.scrollBy({ left: -300, behavior: "smooth" });
    });
  }

  if (rightBtn && container) {
    rightBtn.addEventListener("click", () => {
      container.scrollBy({ left: 300, behavior: "smooth" });
    });
  }
});
// ======================================
// DRAG SCROLL
// ======================================

cardContainers.forEach((container) => {
  let isDragging = false;
  let startX, scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    container.classList.add("dragging");
    startX     = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => { isDragging = false; container.classList.remove("dragging"); });
  container.addEventListener("mouseup",    () => { isDragging = false; container.classList.remove("dragging"); });

  container.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x    = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2;
    container.scrollLeft = scrollLeft - walk;
  });
});

// ======================================
// CREATE PLAYLIST
// ======================================


// ======================================
// CARD PRESS EFFECT
// ======================================

document.querySelectorAll(".card, .artist-card").forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.add("card-pressed");
    setTimeout(() => card.classList.remove("card-pressed"), 150);
  });
});

// ======================================
// TOAST NOTIFICATION
// ======================================

function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id        = "toast";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("toast-visible");
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => toast.classList.remove("toast-visible"), 2800);
}

// ======================================
// SIDEBAR DRAG-TO-RESIZE
// ======================================

(function setupSidebarResize() {
  const sidebar = document.getElementById("sidebar");

  const handle = document.createElement("div");
  handle.style.cssText = `
    position: fixed;
    top: 0;
    height: 100%;
    width: 5px;
    cursor: col-resize;
    background: transparent;
    transition: background 0.2s;
    z-index: 9999;
  `;
  document.body.appendChild(handle); // sidebar ke andar nahi, body mein

  // Handle ko sidebar ke right edge pe rakho
  function updateHandlePosition() {
    const rect = sidebar.getBoundingClientRect();
    handle.style.left = rect.right + "px";
  }
  updateHandlePosition();

// Jab bhi sidebar-update event aaye, handle refresh ho
document.addEventListener("click", (e) => {
  const item = e.target.closest(".playlist-item");
  if (item && item.dataset.playlistId) {
    const id = parseInt(item.dataset.playlistId);
    openPlaylistPage(id);
  }
});

// Resize observer — sidebar width change hone pe bhi update ho
const resizeObserver = new ResizeObserver(updateHandlePosition);
resizeObserver.observe(sidebar);

  updateHandlePosition();

  handle.addEventListener("mouseenter", () => handle.style.background = "#1db954");
  handle.addEventListener("mouseleave", () => {
    if (!isResizing) handle.style.background = "transparent";
  });

  let isResizing = false;
  let startX, startWidth;

  handle.addEventListener("mousedown", (e) => {
    isResizing = true;
    startX     = e.clientX;
    startWidth = sidebar.offsetWidth;
    document.body.style.cursor     = "col-resize";
    document.body.style.userSelect = "none";
    e.preventDefault();
  });

document.addEventListener("mousemove", (e) => {
  if (!isResizing) return;
  const diff     = e.clientX - startX;
  const newWidth = Math.min(400, Math.max(180, startWidth + diff));
  sidebar.style.width = newWidth + "px";
  updateHandlePosition();
  // search page khula ho toh uska left bhi update karo
  if (searchPage.classList.contains("show")) {
    searchPage.style.left = newWidth + "px";
  }
});

  document.addEventListener("mouseup", () => {
    if (!isResizing) return;
    isResizing = false;
    handle.style.background        = "transparent";
    document.body.style.cursor     = "";
    document.body.style.userSelect = "";
    updateHandlePosition();
  });
})();
// ======================================
// BROWSER BACK / FORWARD BUTTONS
// ======================================

// Pehli entry — home
history.replaceState({ page: "home" }, "", "");

// Jab Search khule
function openSearchPage() {
  document.getElementById("mainContent").style.display = "none";
  searchPage.style.display = "block";
  
categoryPage.style.display = "none";
  closePlaylistPage(); // playlist page open ho to band karo

  history.pushState({ page: "search" }, "", "");
  if (searchPageInput) searchPageInput.focus();
}

// Jab Search band ho
function closeSearchPage() {
  searchPage.style.display = "none";
  categoryPage.style.display = "none";
  closePlaylistPage(); // playlist page open ho to band karo
  document.getElementById("mainContent").style.display = "";
  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((m) => m.classList.remove("active"));
  menuItems[0].classList.add("active");
}

// Browser back/forward arrow handle karo
window.addEventListener("popstate", (e) => {
  if (e.state?.page === "category") {
    // Category ke songs filter karo
categoryCards.innerHTML = "";
const categorySongs = songsDatabase.filter(s => s.category === cat);

if (categorySongs.length === 0) {
  categoryCards.innerHTML = `<p style="color:#b3b3b3; padding:20px;">No songs available yet.</p>`;
} else {
  categorySongs.forEach(song => {
    const div = document.createElement("div");
    div.className = "card";
    div.dataset.song = song.src;
    div.innerHTML = `
      <div class="image-box">
        <img src="${song.img}" alt="${song.title}" />
        <div class="play-btn"><i class="fa-solid fa-play"></i></div>
      </div>
      <h4>${song.title}</h4>
      <p>${song.artist}</p>
    `;
    categoryCards.appendChild(div);
  });
  setupPlayButtons();
}

categoryPage.style.display = "block";
history.pushState({ page: "category", cat: cat }, "", "");
    categoryPage.style.display = "block";
    searchPage.style.display = "block";
    document.getElementById("mainContent").style.display = "none";
  } else if (e.state?.page === "search") {
    categoryPage.style.display = "none";
    searchPage.style.display = "block";
    document.getElementById("mainContent").style.display = "none";
  } else {
    searchPage.style.display = "none";
    categoryPage.style.display = "none";
    document.getElementById("mainContent").style.display = "";
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((m) => m.classList.remove("active"));
    menuItems[0].classList.add("active");
  }
});
document.querySelector(".logo").addEventListener("click", () => {
  closeSearchPage();
});
// ======================================
// BROWSE CATEGORY COLOR MAP
// ======================================

const categoryColors = {
  "music": "#d90368",
  "live-events": "#7b00ff",
  "made-for-you": "#233b7a",
  "new-realeases": "#6b8e00",
  "desi": "#f24c00",
  "pop": "#5b8fa8",
  "hip-hop": "#4d8ca3",
  "punjabi": "#b12aa9",
  "charts": "#d90368",
  "educational": "#233b7a",
  "documentary": "#4d8ca3",
  "comedy": "#f24c00",
  "pop-culture": "#7b00ff",
  "equal": "#6b8e00",
  "indie": "#5b8fa8",
  "fresh-finds": "#b12aa9"
};
// ======================================
// BROWSE CATEGORY CLICK
// ======================================

const categoryPage   = document.getElementById("categoryPage");
const categoryHeader = document.getElementById("categoryHeader");
const categoryTitle  = document.getElementById("categoryTitle");
const categoryCards  = document.getElementById("categoryCards");

document.querySelectorAll(".browse-card").forEach((card) => {
  card.addEventListener("click", () => {
    const cat   = card.dataset.category;
    const name  = card.querySelector("h3").textContent;
    const color = categoryColors[cat] || "#1db954";

    // Header
    categoryHeader.style.background = `linear-gradient(to bottom, ${color} 0%, #252525ff 100%)`;
    categoryHeader.innerHTML = `<h1>${name}</h1>`;

    // Content background
    document.querySelector(".category-content").style.background =
      `linear-gradient(to bottom, ${color}33 0%, #121212 60%)`;

    // Songs inject karo
    categoryCards.innerHTML = "";
    const categorySongs = songsDatabase.filter(s => s.category === cat);

    if (categorySongs.length === 0) {
      categoryCards.innerHTML = `<p style="color:#b3b3b3; padding:20px; width:100%;">No songs available in this category yet.</p>`;
    } else {
      categorySongs.forEach(song => {
        const div = document.createElement("div");
        div.className = "card";
        div.dataset.song = song.src;
        div.innerHTML = `
          <div class="image-box">
            <img src="${song.img}" alt="${song.title}" />
            <div class="play-btn"><i class="fa-solid fa-play"></i></div>
          </div>
          <h4>${song.title}</h4>
          <p>${song.artist}</p>
        `;
        categoryCards.appendChild(div);
      });
      setupPlayButtons();
    }

    // Page show karo
    categoryPage.style.display = "block";
    history.pushState({ page: "category", cat: cat }, "", "");
  });
});
// Back button — category page band karo
// categoryBackBtn click — YE REPLACE KARO:

// categoryCards.innerHTML ke saath sample content show kar sakte ho
// card click handler ke andar, categoryPage show se pehle:


// Example placeholder cards (aap real data se replace karo)
// ======================================
// RECENT GRID — TAB FILTER + PLAY
// ======================================

document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.querySelectorAll(".recent-item").forEach(item => {
  item.addEventListener("click", () => {
    if (!isLoggedIn) {
      loginPopup.classList.add("show");
      return;

    }
    document.querySelectorAll(".recent-item").forEach(item => {
  const content = document.getElementById("mainContent");

  item.addEventListener("mouseenter", () => {
    content.style.background = "linear-gradient(to bottom, #2a2a2a, #000)";
  });

  item.addEventListener("mouseleave", () => {
    content.style.background = "linear-gradient(to bottom, #3b1f00, #000)";
  });

  // ... baaki click code waise hi rakho
});
    const src = item.dataset.song;
    if (!src) return;
    audioPlayer.src = src;
    audioPlayer.play();
    showToast("Now playing: " + item.querySelector("span").textContent);
  });
});
/* ====================================== */
/* PLAYLIST PAGE — JS PATCH               */
/* Yeh code script2.js ke end mein add karo */
/* ====================================== */

// ======================================
// PLAYLIST PAGE STATE
// ======================================
// ======================================
// PLAYLIST PAGE — COMPLETE JS
// Purana playlist-js-patch.js ka sara
// content delete karke yeh paste karo
// ======================================

// ======================================
// STATE
// ======================================
// ======================================
// PLAYLIST PAGE — COMPLETE JS (FINAL)
// ======================================

// STATE
let playlists         = {};
let currentPlaylistId = null;
let playlistPageCount = 0;

// REFS
const playlistPage          = document.getElementById("playlistPage");
const playlistNameDisplay   = document.getElementById("playlistNameDisplay");
const playlistNameInput     = document.getElementById("playlistNameInput");
const coverInput            = document.getElementById("coverInput");
const playlistCoverEl       = document.getElementById("playlistCover");
const playlistTracks        = document.getElementById("playlistTracks");
const playlistFindBox       = document.getElementById("playlistFindBox");
const plFindClose           = document.getElementById("plFindClose");
const playlistSearchInput   = document.getElementById("playlistSearchInput");
const playlistSearchResults = document.getElementById("playlistSearchResults");

// ======================================
// COVER OVERLAY
// ======================================
function buildCoverOverlay() {
  const ov = document.createElement("div");
  ov.className = "cover-overlay";
  ov.innerHTML = `<i class="fa-solid fa-pen"></i><span>Choose photo</span>`;
  ov.addEventListener("click", () => coverInput.click());
  return ov;
}

// ======================================
// OPEN PLAYLIST PAGE
// ======================================
function openPlaylistPage(id, name) {
  if (!playlists[id]) {
    playlists[id] = { id, name: name || "My Playlist #" + id, songs: [], cover: null };
  }

  currentPlaylistId = id;
  const pl = playlists[id];

  playlistNameDisplay.textContent   = pl.name;
  playlistNameInput.value           = pl.name;
  playlistNameDisplay.style.display = "";
  playlistNameInput.style.display   = "none";

  playlistCoverEl.innerHTML = "";
  if (pl.cover) {
    const img = document.createElement("img");
    img.src = pl.cover;
    playlistCoverEl.appendChild(img);
  } else {
    const icon = document.createElement("i");
    icon.className = "fa-solid fa-music";
    playlistCoverEl.appendChild(icon);
  }
  playlistCoverEl.appendChild(buildCoverOverlay());

  playlistSearchInput.value       = "";
  playlistFindBox.style.display   = "";

  renderPlaylistTracks();
  showPlaylistRecommendations();

  playlistPage.style.display = "flex";
  playlistPage.scrollTop     = 0;
  history.pushState({ page: "playlist", id }, "", "");
}

// ======================================
// CLOSE PLAYLIST PAGE
// ======================================
function closePlaylistPage() {
  playlistPage.style.display = "none";
}

// ======================================
// RENDER TRACKS
// ======================================
function renderPlaylistTracks() {
  const pl = playlists[currentPlaylistId];
  playlistTracks.innerHTML = "";

  if (!pl || pl.songs.length === 0) {
    return; // kuch nahi dikhana, sirf find box dikhega
  }

  // Header
  const header = document.createElement("div");
  header.style.cssText = "display:flex; align-items:center; gap:14px; padding:8px 12px; border-bottom:1px solid #333; margin-bottom:6px;";
  header.innerHTML = `
    <span style="width:24px; text-align:center; font-size:13px; color:#b3b3b3;">#</span>
    <span style="font-size:13px; color:#b3b3b3; letter-spacing:0.06em; text-transform:uppercase;">Title</span>
  `;
  playlistTracks.appendChild(header);

  pl.songs.forEach((song, i) => {
    const row = document.createElement("div");
    row.className = "pl-track-row";
    row.innerHTML = `
      <span class="pl-track-num">${i + 1}</span>
      <img class="pl-track-img" src="${song.img}" alt="${song.title}" />
      <div class="pl-track-info">
        <div class="pl-track-title">${song.title}</div>
        <div class="pl-track-artist">${song.artist}</div>
      </div>
      <button class="pl-track-play"><i class="fa-solid fa-play"></i></button>
      <button class="pl-track-dots"><i class="fa-solid fa-ellipsis"></i></button>
    `;

    // Play
    row.addEventListener("click", (e) => {
      if (e.target.closest(".pl-track-dots")) return;
      if (e.target.closest(".pl-track-play")) return;
      audioPlayer.src = song.src;
      audioPlayer.play();
      showToast("Now playing: " + song.title);
    });

    row.querySelector(".pl-track-play").addEventListener("click", (e) => {
      e.stopPropagation();
      audioPlayer.src = song.src;
      audioPlayer.play();
      showToast("Now playing: " + song.title);
    });

    // 3 dots menu
    row.querySelector(".pl-track-dots").addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll(".track-context-menu").forEach(m => m.remove());

      const menu = document.createElement("div");
      menu.className = "track-context-menu";
      menu.innerHTML = `
        <button class="track-menu-item">
          <i class="fa-solid fa-trash"></i> Remove from this playlist
        </button>
      `;
      document.body.appendChild(menu);

      const rect = e.currentTarget.getBoundingClientRect();
      menu.style.top  = rect.bottom + 8 + "px";
      menu.style.left = (rect.left - menu.offsetWidth + rect.width) + "px";

      menu.querySelector(".track-menu-item").addEventListener("click", () => {
        pl.songs.splice(i, 1);
        renderPlaylistTracks();
        showPlaylistRecommendations();
        menu.remove();
        showToast("Song removed!");
      });

      setTimeout(() => {
        document.addEventListener("click", () => menu.remove(), { once: true });
      }, 0);
    });

    playlistTracks.appendChild(row);
  });
}

// ======================================
// ADD SONG
// ======================================
function addSongToPlaylist(song) {
  const pl = playlists[currentPlaylistId];
  if (!pl) return;
  if (pl.songs.some(s => s.title === song.title)) return;
  pl.songs.push(song);
  renderPlaylistTracks();
  showPlaylistRecommendations();
  // Tracks upar scroll
  playlistTracks.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

// ======================================
// RECOMMENDATIONS
// ======================================
function showPlaylistRecommendations() {
  const pl = playlists[currentPlaylistId];
  playlistSearchResults.innerHTML = "";

  const recommended = songsDatabase
    .filter(s => s.category !== "search-only" && !(pl && pl.songs.some(x => x.title === s.title)));

  if (recommended.length === 0) {
    playlistSearchResults.innerHTML = `<p style="color:#b3b3b3; font-size:14px; padding:8px 10px;">All songs added!</p>`;
    return;
  }

  recommended.forEach(song => {
    const row = document.createElement("div");
    row.className = "pl-result-row";
    row.innerHTML = `
      <img class="pl-result-img" src="${song.img}" alt="${song.title}" />
      <div class="pl-result-info">
        <div class="pl-result-title">${song.title}</div>
        <div class="pl-result-artist">${song.artist}</div>
      </div>
      <button class="pl-add-btn">Add</button>
    `;
    row.querySelector(".pl-add-btn").addEventListener("click", (e) => {
      e.stopPropagation();
      addSongToPlaylist(song);
      showToast(`"${song.title}" added!`);
    });
    playlistSearchResults.appendChild(row);
  });
}

// ======================================
// SEARCH
// ======================================
playlistSearchInput.addEventListener("input", () => {
  const q = playlistSearchInput.value.trim().toLowerCase();
  playlistSearchResults.innerHTML = "";

  if (!q) {
    showPlaylistRecommendations();
    return;
  }

  const pl = playlists[currentPlaylistId];
  const matched = songsDatabase.filter(s =>
    s.title.toLowerCase().includes(q) || s.artist.toLowerCase().includes(q)
  );

  if (matched.length === 0) {
    playlistSearchResults.innerHTML = `<p style="color:#b3b3b3; font-size:14px; padding:8px 10px;">No results found.</p>`;
    return;
  }

  matched.forEach(song => {
    const alreadyAdded = pl && pl.songs.some(s => s.title === song.title);
    const row = document.createElement("div");
    row.className = "pl-result-row";
    row.innerHTML = `
      <img class="pl-result-img" src="${song.img}" alt="${song.title}" />
      <div class="pl-result-info">
        <div class="pl-result-title">${song.title}</div>
        <div class="pl-result-artist">${song.artist}</div>
      </div>
      <button class="pl-add-btn ${alreadyAdded ? "added" : ""}">
        ${alreadyAdded ? "Added" : "Add"}
      </button>
    `;
    const addBtn = row.querySelector(".pl-add-btn");
    addBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (addBtn.classList.contains("added")) return;
      addSongToPlaylist(song);
      addBtn.textContent = "Added";
      addBtn.classList.add("added");
      showToast(`"${song.title}" added!`);
    });
    playlistSearchResults.appendChild(row);
  });
});

// Close find box
plFindClose.addEventListener("click", () => {
  playlistFindBox.style.display = "none";
});

// ======================================
// CREATE PLAYLIST BUTTON
// ======================================
document.getElementById("createPlaylistBtn").addEventListener("click", () => {
  const id   = ++playlistPageCount;
  const name = "My Playlist #" + id;

  const item = document.createElement("div");
  item.classList.add("playlist-item");
  item.dataset.playlistId = id;
  item.innerHTML = `
    <div style="display:flex; align-items:center; gap:12px; position:relative;">
      <div id="sidebarThumb_${id}" style="width:44px; height:44px; background:#333; border-radius:4px; display:flex; align-items:center; justify-content:center; flex-shrink:0;">
        <i class="fa-solid fa-music" style="color:#aaa; font-size:16px;"></i>
      </div>
      <div style="flex:1; min-width:0;">
        <h4 id="sidebarName_${id}">${name}</h4>
        <div class="playlist-song">Playlist • Khadijaniaz</div>
      </div>
      <button class="sidebar-delete-btn" data-id="${id}" title="Delete">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  `;
  document.getElementById("playlistContainer").prepend(item);
  openPlaylistPage(id, name);
});

// ======================================
// SIDEBAR CLICK
// ======================================
document.addEventListener("click", (e) => {
  const item = e.target.closest(".playlist-item");
  if (item && item.dataset.playlistId) {
    const id = parseInt(item.dataset.playlistId);
    openPlaylistPage(id);
  }
});

// ======================================
// EDITABLE NAME
// ======================================
playlistNameDisplay.addEventListener("click", () => {
  playlistNameDisplay.style.display = "none";
  playlistNameInput.style.display   = "";
  playlistNameInput.value           = playlistNameDisplay.textContent;
  playlistNameInput.focus();
  playlistNameInput.select();
});

playlistNameInput.addEventListener("blur", commitName);
playlistNameInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter")  commitName();
  if (e.key === "Escape") {
    playlistNameInput.style.display   = "none";
    playlistNameDisplay.style.display = "";
  }
});

function commitName() {
  const v = playlistNameInput.value.trim();
  if (v && playlists[currentPlaylistId]) {
    playlists[currentPlaylistId].name = v;
    playlistNameDisplay.textContent   = v;
    const sidebarName = document.getElementById(`sidebarName_${currentPlaylistId}`);
    if (sidebarName) sidebarName.textContent = v;
  }
  playlistNameInput.style.display   = "none";
  playlistNameDisplay.style.display = "";
}

// ======================================
// COVER UPLOAD
// ======================================
playlistCoverEl.addEventListener("click", () => coverInput.click());

coverInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    const pl = playlists[currentPlaylistId];
    if (!pl) return;
    pl.cover = ev.target.result;

    playlistCoverEl.innerHTML = "";
    const img = document.createElement("img");
    img.src = pl.cover;
    playlistCoverEl.appendChild(img);
    playlistCoverEl.appendChild(buildCoverOverlay());

    const sidebarThumb = document.getElementById(`sidebarThumb_${currentPlaylistId}`);
    if (sidebarThumb) {
      sidebarThumb.innerHTML = `<img src="${pl.cover}" style="width:44px; height:44px; border-radius:4px; object-fit:cover;" />`;
    }
  };
  reader.readAsDataURL(file);
  coverInput.value = "";
});

// ======================================
// SIDEBAR DELETE
// ======================================
document.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".sidebar-delete-btn");
  if (!deleteBtn) return;
  e.stopPropagation();

  const id = parseInt(deleteBtn.dataset.id);

  const overlay = document.createElement("div");
  overlay.className = "delete-popup-overlay";
  overlay.innerHTML = `
    <div class="delete-popup">
      <h3>Delete Playlist?</h3>
      <p>Kya aap "${playlists[id]?.name || "this playlist"}" delete karna chahte hain?</p>
      <div class="delete-popup-btns">
        <button class="btn-quit">Quit</button>
        <button class="btn-delete">Delete</button>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.querySelector(".btn-quit").addEventListener("click", () => overlay.remove());
  overlay.querySelector(".btn-delete").addEventListener("click", () => {
    delete playlists[id];
    const sidebarItem = document.querySelector(`.playlist-item[data-playlist-id="${id}"]`);
    if (sidebarItem) sidebarItem.remove();
    if (currentPlaylistId === id) closePlaylistPage();
    overlay.remove();
    showToast("Playlist deleted!");
  });
  overlay.addEventListener("click", (e) => { if (e.target === overlay) overlay.remove(); });
});

// ======================================
// BROWSER BACK
// ======================================
window.addEventListener("popstate", () => {
  if (playlistPage && playlistPage.style.display === "flex") {
    closePlaylistPage();
  }
});
// ======================================
// BOTTOM PLAYER BAR
// ======================================

// ======================================
// BOTTOM PLAYER BAR — COMPLETE CODE
// script2.js ke end mein add karo
// (purana player bar code pehle delete karo)
// ======================================

const playerBar       = document.getElementById("playerBar");
const playerThumb     = document.getElementById("playerThumb");
const playerTitle     = document.getElementById("playerTitle");
const playerArtist    = document.getElementById("playerArtist");
const playerPlayPause = document.getElementById("playerPlayPause");
const playerPrev      = document.getElementById("playerPrev");
const playerNext      = document.getElementById("playerNext");
const progressBar     = document.getElementById("progressBar");
const playerCurrent   = document.getElementById("playerCurrent");
const playerDuration  = document.getElementById("playerDuration");
const volumeBar       = document.getElementById("volumeBar");
const playerThumbRight = document.getElementById("playerThumbRight");

let currentTrackIndex = -1;
let currentTrackList  = [];

// Volume initial set
audioPlayer.volume = 1;
volumeBar.value    = 100;

function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ":" + (s < 10 ? "0" + s : s);
}

function playTrackInBar(song) {
  if (!song) return;

  // Left side
  playerBar.style.display   = "flex";
  playerThumb.src            = song.img   || "";
  playerTitle.textContent    = song.title  || "Unknown";
  playerArtist.textContent   = song.artist || "";

  // Right side thumbnail
  if (playerThumbRight) {
    playerThumbRight.src           = song.img || "";
    playerThumbRight.style.display = song.img ? "block" : "none";
  }

  // Audio
  audioPlayer.src = song.src;
  audioPlayer.load();
  audioPlayer.play().catch(err => console.log("Play error:", err));
  playerPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';

  // Update Now Playing Sidebar
  updateNowPlayingSidebar(song);
}

// Play / Pause
playerPlayPause.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playerPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audioPlayer.pause();
    playerPlayPause.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
});

// Progress update
audioPlayer.addEventListener("timeupdate", () => {
  if (!audioPlayer.duration || isNaN(audioPlayer.duration)) return;
  const pct = (audioPlayer.currentTime / audioPlayer.duration) * 100;
  progressBar.value              = pct;
  playerCurrent.textContent      = formatTime(audioPlayer.currentTime);
  playerDuration.textContent     = formatTime(audioPlayer.duration);
});

// Seek
progressBar.addEventListener("input", () => {
  if (!audioPlayer.duration || isNaN(audioPlayer.duration)) return;
  audioPlayer.currentTime = (progressBar.value / 100) * audioPlayer.duration;
});

// Volume — REAL volume control
volumeBar.addEventListener("input", () => {
  const vol = parseFloat(volumeBar.value) / 100;
  audioPlayer.volume = vol;
});

// Song end
audioPlayer.addEventListener("ended", () => {
  playerPlayPause.innerHTML = '<i class="fa-solid fa-play"></i>';
  progressBar.value         = 0;
  playerCurrent.textContent = "0:00";

  if (currentTrackIndex >= 0 && currentTrackIndex < currentTrackList.length - 1) {
    currentTrackIndex++;
    playTrackInBar(currentTrackList[currentTrackIndex]);
  }
});

// Prev
playerPrev.addEventListener("click", () => {
  if (currentTrackIndex > 0) {
    currentTrackIndex--;
    playTrackInBar(currentTrackList[currentTrackIndex]);
  }
});

// Next
playerNext.addEventListener("click", () => {
  if (currentTrackIndex < currentTrackList.length - 1) {
    currentTrackIndex++;
    playTrackInBar(currentTrackList[currentTrackIndex]);
  }
});

// ======================================
// CARD PLAY BUTTON CLICK
// ======================================
document.addEventListener("click", (e) => {
  const playBtn = e.target.closest(".play-btn");
  if (!playBtn) return;

  const card = playBtn.closest(".card");
  if (!card) return;

  const songSrc = card.dataset.song;
  if (!songSrc) return;

  // Try exact match first, then filename match
  let song = songsDatabase.find(s => s.src === songSrc);

  // Fallback: match by filename without extension
  if (!song) {
    const baseName = songSrc.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
    song = songsDatabase.find(s =>
      s.src.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase() === baseName
    );
  }

  if (song) {
    currentTrackList  = songsDatabase.filter(s => s.category === song.category);
    currentTrackIndex = currentTrackList.findIndex(s => s.src === song.src);
    playTrackInBar(song);
  } else {
    // Song not in database — play directly but still update sidebar manually
    const title  = card.querySelector("h4")?.textContent || "Unknown";
    const artist = card.querySelector("p")?.textContent  || "";
    const img    = card.querySelector("img")?.src        || "";

    playerBar.style.display  = "flex";
    playerThumb.src          = img;
    playerTitle.textContent  = title;
    playerArtist.textContent = artist;
    audioPlayer.src = songSrc;
    audioPlayer.load();
    audioPlayer.play();
    playerPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';

    // Update sidebar manually for unknown songs
    const fakeSong = { title, artist, img, src: songSrc, category: "" };
    currentTrackList  = [fakeSong];
    currentTrackIndex = 0;
    updateNowPlayingSidebar(fakeSong);
  }
});

// ======================================
// RECENT ITEM CLICK
// ======================================
document.addEventListener("click", (e) => {
  const recentPlayBtn = e.target.closest(".recent-play-btn");
  const recentItem    = e.target.closest(".recent-item");
  const target        = recentPlayBtn ? recentPlayBtn.closest(".recent-item") : recentItem;
  if (!target) return;

  const songSrc = target.dataset.song;
  if (!songSrc) return;

  // Try exact match first, then filename match
  let song = songsDatabase.find(s => s.src === songSrc);

  if (!song) {
    const baseName = songSrc.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase();
    song = songsDatabase.find(s =>
      s.src.split("/").pop().replace(/\.[^.]+$/, "").toLowerCase() === baseName
    );
  }

  if (song) {
    currentTrackList  = songsDatabase.filter(s => s.category === song.category);
    currentTrackIndex = currentTrackList.findIndex(s => s.src === song.src);
    playTrackInBar(song);
  } else {
    const title = target.querySelector("span")?.textContent || "Unknown";
    const img   = target.querySelector("img")?.src          || "";

    playerBar.style.display  = "flex";
    playerThumb.src          = img;
    playerTitle.textContent  = title;
    playerArtist.textContent = "";
    audioPlayer.src = songSrc;
    audioPlayer.load();
    audioPlayer.play();
    playerPlayPause.innerHTML = '<i class="fa-solid fa-pause"></i>';

    const fakeSong = { title, artist: "", img, src: songSrc, category: "" };
    currentTrackList  = [fakeSong];
    currentTrackIndex = 0;
    updateNowPlayingSidebar(fakeSong);
  }
});

// ======================================
// PLAYLIST TRACK CLICK
// ======================================
document.addEventListener("click", (e) => {
  const row = e.target.closest(".pl-track-row");
  if (!row) return;
  if (e.target.closest(".pl-track-dots") || e.target.closest(".pl-track-play")) return;
  const title = row.querySelector(".pl-track-title")?.textContent;
  const song  = songsDatabase.find(s => s.title === title);
  if (song) playTrackInBar(song);
});

document.addEventListener("click", (e) => {
  const btn = e.target.closest(".pl-track-play");
  if (!btn) return;
  const row   = btn.closest(".pl-track-row");
  const title = row?.querySelector(".pl-track-title")?.textContent;
  const song  = songsDatabase.find(s => s.title === title);
  if (song) playTrackInBar(song);
});

// ======================================
// NOW PLAYING SIDEBAR
// ======================================

const nowPlayingSidebar = document.getElementById("nowPlayingSidebar");
const npCloseBtn        = document.getElementById("npCloseBtn");
const npArt             = document.getElementById("npArt");
const npArtPlaceholder  = document.getElementById("npArtPlaceholder");
const npArtGlow         = document.getElementById("npArtGlow");
const npTitle           = document.getElementById("npTitle");
const npArtistEl        = document.getElementById("npArtist");
const npQueue           = document.getElementById("npQueue");

npCloseBtn.addEventListener("click", () => {
  nowPlayingSidebar.classList.remove("open");
});

function updateNowPlayingSidebar(song) {
  if (!song) return;

  nowPlayingSidebar.classList.add("open");

  if (song.img) {
    npArt.src = song.img;
    npArt.style.display = "block";
    npArtPlaceholder.style.display = "none";
    npArtGlow.style.background = "#1db954";
  } else {
    npArt.style.display = "none";
    npArtPlaceholder.style.display = "flex";
  }

  npTitle.textContent    = song.title  || "Unknown";
  npArtistEl.textContent = song.artist || "—";

  npQueue.innerHTML = "";
  const list = currentTrackList.length > 0 ? currentTrackList : [song];

  list.forEach((track, idx) => {
    const isActive = track.src === song.src;
    const item = document.createElement("div");
    item.className = "np-queue-item" + (isActive ? " active" : "");
    item.innerHTML = `
      <img class="np-queue-img" src="${track.img}" alt="${track.title}" />
      <div class="np-queue-info">
        <div class="np-queue-title">${track.title}</div>
        <div class="np-queue-artist">${track.artist}</div>
      </div>
      ${isActive ? `<div class="np-playing-bars"><span></span><span></span><span></span></div>` : ""}
    `;
    item.addEventListener("click", () => {
      currentTrackIndex = idx;
      playTrackInBar(track);
    });
    npQueue.appendChild(item);
  });

  const activeItem = npQueue.querySelector(".np-queue-item.active");
  if (activeItem) {
    setTimeout(() => activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" }), 100);
  }
}