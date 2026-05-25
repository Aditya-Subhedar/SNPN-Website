const express = require('express');
const app = express();
const path = require('path');

// Setup EJS and Static Files
app.set('view engine', 'ejs');
// Express needs to serve all static images from public/images
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 

// --- MOCK DATABASE ---
// (I kept this here just in case your index.ejs relies on this data to load the homepage)
let upcomingEvents = [
    { 
        id: 2, 
        title: "Annual Meeting and International Conference-Cum-Workshop", 
        date: "Jan 14-17, 2027" 
    }
];

// --- PUBLIC ROUTES ---
app.get('/', (req, res) => {
    // Crucial: pass the events data to the homepage
    res.render('index', { events: upcomingEvents });
});

app.get('/about', (req, res) => res.render('about')); 
app.get('/council', (req, res) => res.render('council')); 
app.get('/membership', (req, res) => res.render('membership')); 
app.get('/gallery', (req, res) => res.render('gallery'));
app.get('/workshops', (req, res) => res.render('workshops')); 
app.get('/newsletter', (req, res) => res.render('newsletter'));
app.get('/awards', (req, res) => res.render('awards'));
app.get('/events', (req, res) => res.render('events'));
app.get('/contact', (req, res) => res.render('contact'));
app.get('/history', (req, res) => res.render('history'));

// ---> YOUR NEWLY ADDED EVENTS ROUTE <---
app.get('/events', (req, res) => res.render('events'));


// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running! Open http://localhost:${PORT} in your browser.`);
});