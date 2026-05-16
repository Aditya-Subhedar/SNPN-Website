const express = require('express');
const app = express();
const path = require('path');

// Setup EJS and Static Files
app.set('view engine', 'ejs');
// Express needs to serve all static images from public/images
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 

// --- MOCK DATABASE ---
let upcomingEvents = [
    { 
        id: 1, 
        title: "International Conference on Neuropeptides", 
        date: "Nov 14-16, 2026" 
    },
    { 
        id: 2, 
        title: "Symposium on Neuroendocrine Signaling", 
        date: "Sept 10-12, 2027" 
    }
];

// --- PUBLIC ROUTES ---
app.get('/', (req, res) => {
    // Crucial: pass the events data to the homepage
    res.render('index', { events: upcomingEvents });
});

// Assuming these other files exist as placeholders or point to standard pages
app.get('/about', (req, res) => res.render('gallery')); 
app.get('/council', (req, res) => res.render('gallery'));
app.get('/membership', (req, res) => res.render('gallery'));
app.get('/newsletter', (req, res) => res.render('gallery'));
app.get('/awards', (req, res) => res.render('gallery'));
app.get('/gallery', (req, res) => res.render('gallery'));
app.get('/contact', (req, res) => res.render('gallery'));
app.get('/workshops', (req, res) => res.render('workshop')); 

// Placeholders for legacy history if activated
app.get('/history', (req, res) => res.render('gallery'));


// --- ADMIN ROUTES (CRUD Operations maintained) ---

app.get('/admin', (req, res) => {
    res.render('admin', { events: upcomingEvents });
});

app.post('/admin/add-event', (req, res) => {
    const newEvent = { 
        id: Date.now(), 
        title: req.body.title, 
        date: req.body.date 
    };
    upcomingEvents.push(newEvent);
    res.redirect('/admin');
});

app.post('/admin/delete-event/:id', (req, res) => {
    const eventId = parseInt(req.params.id);
    upcomingEvents = upcomingEvents.filter(event => event.id !== eventId);
    res.redirect('/admin');
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running! Open http://localhost:${PORT} in your browser.`);
});