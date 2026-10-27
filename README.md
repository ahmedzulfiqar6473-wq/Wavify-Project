# Waviify

Waviify is a music streaming web app built with HTML, CSS and JavaScript. Users can sign up, log in, browse songs by category, search, build their own playlists and play music through a built in player.

The project runs fully in the browser. There is no backend, so accounts are saved in `localStorage`.

## Features

* Login and signup page with form validation and a show/hide password option
* Dashboard protected by login. Visitors who are not logged in are redirected to the login page
* Home page with Trending Songs, Popular Artists and Recently Played sections
* Browse page with categories such as Desi, Pop, Hip Hop, Punjabi and K Pop
* Search bar to find songs quickly
* Playlists: create, rename, add a cover photo, add or remove songs, and delete
* Bottom player bar with play, pause, next, previous, progress and volume controls
* Now Playing sidebar with the current song and the upcoming queue
* Resizable sidebar

## Built With

* HTML5
* CSS3
* JavaScript (ES6)
* Font Awesome for icons

## Project Structure

```
index.html        Login and signup page
style.css         Styles for the login page
script.js         Login and signup logic
dashboard.html    Main application page
style2.css        Styles for the dashboard
script2.js        Dashboard logic
images/           Cover art, artist photos and category images
songs/            Audio files
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

Open `index.html` in your browser. You can also serve the folder with a local server, for example:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500` in your browser.

Create an account on the login page and you will be taken to the dashboard. An internet connection is required to load the Font Awesome icons.

## Authentication

Signup details are stored in the browser's `localStorage`, and passwords are hashed with SHA-256 before they are saved. After a successful login, a session entry is stored and the user is redirected to `dashboard.html`. Logging out removes that session.

This setup is meant for learning and demonstration only. A production application should use a proper backend for authentication.

## Planned Improvements

* Backend and database for user accounts
* Permanent storage for playlists
* Shuffle and repeat modes
* Liked songs and a personal library
* Better layout for mobile screens

## License

This project is for educational use. Songs and images belong to their respective owners.
