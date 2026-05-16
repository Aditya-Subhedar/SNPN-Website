# Society of Neuropeptides and Neuroendocrinology (SNPN) Website

A professional, full-stack web platform built for the Society of Neuropeptides and Neuroendocrinology. Designed to emulate the clean, spacious aesthetic of major scientific organizations, this site features a modern UI, dynamic data rendering, and a built-in admin portal.

## 🚀 Features

* **Modern UI/UX:** Features a striking diagonal split-screen hero section, soft-shadow overlaid feature cards, and a spacious, light-themed aesthetic.
* **Dynamic Event Management:** Upcoming events are loaded dynamically from the backend server.
* **Admin Dashboard:** Includes an admin panel with CRUD (Create, Read, Update, Delete) functionality to manage the events list in real-time.
* **Modular Architecture:** Uses EJS partials for a DRY (Don't Repeat Yourself) codebase, allowing easy updates to shared components like headers and footers.
* **Fully Responsive:** Navigation and layout adapt gracefully to different screen sizes.

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Custom variables, flexbox, linear gradients), FontAwesome
* **Backend:** Node.js, Express.js
* **Template Engine:** EJS (Embedded JavaScript)

## 📂 Directory Structure

```text
SNPN Website/
├── public/             # Static assets served to the client
│   ├── images/         # Logos, maps, profile pictures
│   └── style.css       # Main stylesheet
├── views/              # EJS templates (pages)
│   ├── partials/       # Reusable UI components (header, footer)
│   ├── index.ejs       # Main homepage
│   ├── admin.ejs       # Admin dashboard for event CRUD
│   └── *.ejs           # Subpages (about, contact, gallery, etc.)
├── server.js           # Main Express server and routing logic
└── package.json        # Project metadata and npm dependencies