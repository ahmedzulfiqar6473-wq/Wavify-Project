// ======================================
// WAVIIFY — LOGIN / SIGNUP LOGIC
// (frontend-only demo: users are kept in localStorage)
// ======================================

const USERS_KEY   = "waviify_users";
const SESSION_KEY = "waviify_session";
const DASHBOARD   = "dashboard.html";

// Already logged in? Go straight to the dashboard
if (localStorage.getItem(SESSION_KEY)) {
  window.location.replace(DASHBOARD);
}

const loginForm      = document.getElementById("loginForm");
const signupForm     = document.getElementById("signupForm");
const loginEmail     = document.getElementById("loginEmail");
const loginPassword  = document.getElementById("loginPassword");
const loginError     = document.getElementById("loginError");
const signupName     = document.getElementById("signupName");
const signupEmail    = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");
const signupError    = document.getElementById("signupError");

// ---------- helpers ----------
function getUsers() {
  try { return JSON.parse(localStorage.getItem(USERS_KEY)) || {}; }
  catch (e) { return {}; }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

async function hashPassword(password) {
  if (window.crypto && crypto.subtle) {
    const data = new TextEncoder().encode(password);
    const buf  = await crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, "0")).join("");
  }
  return btoa(unescape(encodeURIComponent(password))); // fallback
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(el, message) {
  el.textContent = message;
  el.classList.add("visible");
}

function clearErrors() {
  [loginError, signupError].forEach(el => { el.textContent = ""; el.classList.remove("visible"); });
  document.querySelectorAll(".field input").forEach(i => i.classList.remove("invalid"));
}

function startSession(email, name) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({ email, name }));
  window.location.href = DASHBOARD;
}

// ---------- switch forms ----------
document.getElementById("showSignup").addEventListener("click", () => {
  clearErrors();
  loginForm.classList.add("hidden");
  signupForm.classList.remove("hidden");
  document.title = "Waviify | Sign up";
  signupName.focus();
});

document.getElementById("showLogin").addEventListener("click", () => {
  clearErrors();
  signupForm.classList.add("hidden");
  loginForm.classList.remove("hidden");
  document.title = "Waviify | Log in";
  loginEmail.focus();
});

// ---------- show / hide password ----------
document.querySelectorAll(".toggle-pass").forEach(btn => {
  btn.addEventListener("click", () => {
    const input = document.getElementById(btn.dataset.target);
    const show  = input.type === "password";
    input.type  = show ? "text" : "password";
    btn.innerHTML = show ? '<i class="fa-solid fa-eye-slash"></i>' : '<i class="fa-solid fa-eye"></i>';
  });
});

// ---------- login ----------
loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearErrors();

  const email    = loginEmail.value.trim().toLowerCase();
  const password = loginPassword.value;

  if (!email || !password) {
    if (!email)    loginEmail.classList.add("invalid");
    if (!password) loginPassword.classList.add("invalid");
    return showError(loginError, "Please enter your email and password.");
  }
  if (!isValidEmail(email)) {
    loginEmail.classList.add("invalid");
    return showError(loginError, "Please enter a valid email address.");
  }

  const user = getUsers()[email];
  if (!user) {
    loginEmail.classList.add("invalid");
    return showError(loginError, "No account found with this email. Please sign up.");
  }

  if (user.password !== await hashPassword(password)) {
    loginPassword.classList.add("invalid");
    return showError(loginError, "Incorrect password. Please try again.");
  }

  startSession(email, user.name);
});

// ---------- signup ----------
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  clearErrors();

  const name     = signupName.value.trim();
  const email    = signupEmail.value.trim().toLowerCase();
  const password = signupPassword.value;

  if (!name || !email || !password) {
    if (!name)     signupName.classList.add("invalid");
    if (!email)    signupEmail.classList.add("invalid");
    if (!password) signupPassword.classList.add("invalid");
    return showError(signupError, "Please fill in all fields.");
  }
  if (!isValidEmail(email)) {
    signupEmail.classList.add("invalid");
    return showError(signupError, "Please enter a valid email address.");
  }
  if (password.length < 6) {
    signupPassword.classList.add("invalid");
    return showError(signupError, "Password must be at least 6 characters.");
  }

  const users = getUsers();
  if (users[email]) {
    signupEmail.classList.add("invalid");
    return showError(signupError, "An account with this email already exists. Please log in.");
  }

  users[email] = { name, password: await hashPassword(password) };
  saveUsers(users);
  startSession(email, name);
});
