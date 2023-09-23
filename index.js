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




// Exported function to generate JSON response based on the argument
function generateResponseData(argument) {
    // Modify this function to return JSON data based on the argument
    if (argument === 'parameter1') {
        return { message: 'Response for parameter1' };
    } else if (argument === 'parameter2') {
        return { message: 'Response for parameter2' };
    } else {
        return { message: 'Invalid parameter' };
    }
}

// Define a dynamic endpoint that accepts an argument
app.get('/api/data', (req, res) => {
    const argument = req.query.parameter;
    const responseData = generateResponseData(argument);
    res.json(responseData);
});





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


