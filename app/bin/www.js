const colors = require("colors");
const logger = require("../src/config/logger");
const app = require("../app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  logger.info(" 🟢  Server started on port 3000".green);
});
