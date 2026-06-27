require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/db/db");

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
}

start();