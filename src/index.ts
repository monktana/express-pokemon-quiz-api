import { initialize } from "./lib";
import { getMatchup } from "./routes/matchup/matchup";

const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000

app.use(cors());

app.get('/', getMatchup);

app.listen(port, async () => {
  console.log(`initializing cache...`);
  initialize();
  console.log(`Example app listening on port ${port}`);
});