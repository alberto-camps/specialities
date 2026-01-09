const express = require('express');
const app = express();
const getContent = require('./template.js');
const PORT = 3000;
const usersData = require('./users-data.js');


const specialtyFilter = (specialty) => usersData.filter(user => user.specialty === specialty)


app.get('/', (req, res) => {
  res.send(`
    <nav>
      <a href="/">Home</a> |
      <a href="/developers">Developers</a> |
      <a href="/marketing">Marketings</a> |
      <a href="/ventas">Ventas</a> |
      <a href="/qas">QAs</a>
    </nav>
    <h1>Página principal</h1>`);
});

app.get('/developers', (req, res) => {
    const specialty = 'developers';
    const users = specialtyFilter(specialty);
    res.send(getContent(specialty, users));
});

app.get('/marketing', (req, res) => {
    const specialty = 'marketing';
    const users = specialtyFilter(specialty);
    res.send(getContent(specialty, users));
});

app.get('/ventas', (req, res) => {
    const specialty = 'ventas';
    const users = specialtyFilter(specialty);
    res.send(getContent(specialty, users));
});

app.get('/qas', (req, res) => {
    const specialty = 'QAs';
    const users = specialtyFilter(specialty);
    res.send(getContent(specialty, users));
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
