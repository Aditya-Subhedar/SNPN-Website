const express = require('express');
const app = express();
const path = require('path');

// Setup HTML View Engine and Static Resource Asset Folders
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 

// --- STATIC STATIC DATA MOCK ---
let upcomingEvents = [
    { 
        id: 2, 
        title: "Annual Meeting and International Conference-Cum-Workshop", 
        date: "Jan 14-17, 2027" 
    }
];

// --- APP PAGE ROUTING ---
app.get('/', (req, res) => {
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

// Boot App Listen Port
const PORT = 4500;
app.listen(PORT, () => {
    console.log(`Server running successfully at http://localhost:${PORT}`);
});
