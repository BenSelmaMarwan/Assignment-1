const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3500;

// Middleware to disable caching
app.use((req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.header('Pragma', 'no-cache');
    res.header('Expires', '0');
    next();
});

// Define the directory containing your static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Define the route to serve the HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HTML', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});