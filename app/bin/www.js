const colors = require("colors");
const app = require("../app");
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(" 🟢  Server started on port 3000".green);
});
