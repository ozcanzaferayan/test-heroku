const express = require('express');
const PORT = process.env.PORT || 3000;

express()
    //.use(express.static(path.join(__dirname, 'public')))
    .get('/', (req, res) => res.send("Hell"))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));