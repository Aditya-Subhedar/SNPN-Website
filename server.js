const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Setup EJS and Static Files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true })); 

// Helper function to read events asynchronously
const getEventsData = () => {
    const filePath = path.join(__dirname, 'events.json');
    const rawData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(rawData);
};

// --- APP PAGE ROUTING ---
app.get('/', (req, res) => {
    try {
        const masterEvents = getEventsData();
        
        // Filter out upcoming official SNPN events automatically
        const snpnUpcoming = masterEvents.filter(e => e.type === 'snpn' && e.status === 'upcoming');
        
        // Map into the format index.ejs demands
        const homepageEvents = snpnUpcoming.map(e => ({
            title: e.title,
            date: `${e.month} ${e.day}, ${e.year}`
        }));

        res.render('index', { events: homepageEvents });
    } catch (error) {
        console.error("Error reading data file:", error);
        res.render('index', { events: [] });
    }
});

app.get('/events', (req, res) => {
    try {
        const masterEvents = getEventsData();
        res.render('events', { allEvents: masterEvents });
    } catch (error) {
        console.error("Error loading events pipeline:", error);
        res.render('events', { allEvents: [] });
    }
});

// Basic view rendering routes
app.get('/about', (req, res) => res.render('about')); 
app.get('/council', (req, res) => res.render('council')); 
app.get('/membership', (req, res) => res.render('membership')); 
app.get('/gallery', (req, res) => res.render('gallery'));
app.get('/workshops', (req, res) => res.render('workshops')); 
app.get('/newsletter', (req, res) => res.render('newsletter'));
app.get('/awards', (req, res) => res.render('awards'));

const PORT = 4500;
app.listen(PORT, () => {
    console.log(`Server running successfully at http://localhost:${PORT}`);
});
