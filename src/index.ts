import { getMatchup } from "./routes/matchup/matchup";

const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000

app.use(cors());

app.get('/', getMatchup);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});