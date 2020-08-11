const express = require('express');
const app = express();

const data = require('./data.json');

app.use(express.json());

app.get('/clients', (req, res) => {
  return res.json(data);
});

app.get('/clients/:id', (req, res) => {
  const { id } = req.params;

  const client = data.find((cli) => cli.id == id);

  if (!client) return res.status(204).json();

  return res.json(client);
});


app.post('/clients', (req, res) => {
  const { name } = req.body;

  return res.json({ name });
});

app.put('/clients/:id', (req, res) => {
  const { id } = req.params;
  const client = data.find(cli => cli.id == id);

  if (!client) return res.status(204).json();

  const { name } = req.body;

  client.name = name;

  return res.json(client);
});


app.delete('/clients/:id', (req, res) => {
  const { id } = req.params;
  const client = data.filter(cli => cli.id != id);

  return res.json(client);
});

app.listen(3333, () => {
  console.log('Server is running');
})