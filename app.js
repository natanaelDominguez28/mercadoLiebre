const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

app.listen(3000, () =>{
    console.log('Servidor corriendo en el puerto 3002');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});

app.use(express.static('public'))

const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.log(`Server up on PORT: http://localhost:${PORT}`)
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});