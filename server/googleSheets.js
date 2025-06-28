const { google } = require('googleapis');
const fs = require('fs');
require('dotenv').config();

// 🔄 Load and parse manually to avoid hidden character issues
const raw = fs.readFileSync('./priyanshu-chauhan-portfolio-4019ac552c31.json', 'utf-8');
const CREDENTIALS = JSON.parse(raw);

const auth = new google.auth.JWT({
  email: CREDENTIALS.client_email,
  key: CREDENTIALS.private_key,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

async function appendToSheet(data) {
  await auth.authorize();  // Make sure the auth token is initialized
  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.SPREADSHEET_ID,
    range: 'Sheet1!A1',
    valueInputOption: 'RAW',
    insertDataOption: 'INSERT_ROWS',
    resource: {
      values: [data],
    },
  });
}

module.exports = appendToSheet;
