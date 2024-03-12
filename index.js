const express = require('express')
const app = express()
const port = 3000;
const msg = require('./src/msg');
const client = require('./src/whatsapp');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world')
});
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.post('/msg', async (req, res) => {
    const data = req.body;
    const response = await msg.chat(data);
    if (response.status) {
        res.status(200);
        res.send('succes');
    } else {
        res.status(500);
        res.send('failed');
    }
});

app.post('/reminder', async (req, res) => {
    const data = req.body;
    const response = await msg.reminder(data);
    if (response.status) {
        res.status(200);
        res.send('succes');
    } else {
        res.status(500);
        res.send('failed');
    }
});

app.listen(port, () => {
    console.log(`whatsapp api running on port ${port}`)
});