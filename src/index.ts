import { matchup, move, pokemon } from "./routes";

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/matchup', matchup);
app.get('/pokemon/:pokemon', pokemon);
app.get('/move/:move', move);

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`);
});