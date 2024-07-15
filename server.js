const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5500;

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
    const { fullName, email, password, confirmPassword, dateOfBirth, gender, newsletter } = req.body;

    // Basic server-side validation
    if (!fullName || !email || !password || !confirmPassword || !dateOfBirth || !gender) {
        return res.status(400).send('All fields are required');
    }

    if (password !== confirmPassword) {
        return res.status(400).send('Passwords do not match');
    }

    if (password.length < 8) {
        return res.status(400).send('Password must be at least 8 characters');
    }

    // Simulate successful registration
    res.status(200).send('Registration successful');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
