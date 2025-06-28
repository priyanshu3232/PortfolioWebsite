const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
require('dotenv').config();
const app = express();
app.use(express.json());
const appendToSheet = require('./googleSheets');
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173"
}));

app.get('/',(req,res) => res.send("Working!"));

app.post('/', async (req, res) => {
    formData = req.body.formData;
    // Append to Google Sheet
    await appendToSheet([
        formData.name,
        formData.email,
        formData.company,
        formData.phone,
        formData.service,
        formData.budget,
        formData.message
    ]);
    res.send("Done!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});