const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.send('¡Hola desde Docker!'));

// Operación matemática: /suma?a=2&b=3
app.get('/suma', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return res.status(400).json({ error: 'Parámetros a y b deben ser números' });
  }
  res.json({ a, b, resultado: a + b });
});

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));