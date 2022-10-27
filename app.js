const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(201).send({
        slackUsername: 'ebube', 
        backend: true, 
        age: 27, 
        bio: 'i am Ebube, a chemical engineer from delta state, Nigeria.i am new to coding, however i am convinced that my passion will keep me going.'
    })
})

const port = process.env.PORT || 5010;
app.listen(port, () => {
    console.log('listening on 5010');
});
