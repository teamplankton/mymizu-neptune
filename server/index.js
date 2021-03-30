require("dotenv").config();
const app = require("./app");
const db = require("../knexfile");

const port = process.env.PORT || 4000;

(async () => {
  try {
    console.log("Running rollback");
    await db.rollback();

    console.log("Running migrations...");
    await db.migrate.latest();

    console.log("Seeding...");
    await db.seed.run();

    console.log("Starting express...");
    app.listen(port, () => {
      console.log("App listening on port " + port);
    });
  } catch (err) {
    console.error("Couldn't start app", err);
    process.exit(-1);
  }
})();
