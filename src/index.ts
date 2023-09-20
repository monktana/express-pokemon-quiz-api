import { initialize } from "./lib";
import { getMatchup, getMove, getPokemon } from "./routes";

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.get('/', getMatchup);
app.get('/pokemon/:pokemon', getPokemon);
app.get('/move/:move', getMove);

app.listen(port, async () => {
  console.log(`initializing cache...`);
  initialize();
  console.log(`Example app listening on port ${port}`);
});