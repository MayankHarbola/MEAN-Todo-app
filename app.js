const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const bookingRoutes = require("./routes/bookingroutes");

app.use(require("./cors"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use("/", bookingRoutes);
app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log("error in server startign ", err);
  } else {
    console.log("server connected");
  }
});
