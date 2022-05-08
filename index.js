const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');


app.use(bodyParser.json());


app.post('/api/shorten', (req, res) => {
    const url = req.body.url;
    const shortUrl = '' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    res.send({
        url: url,
        shortUrl: shortUrl
    });
}
);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);
