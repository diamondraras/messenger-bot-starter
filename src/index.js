import "./config"
import app from './app'

const server = require("http").Server(app);

// Defining port setting
app.set("port", process.env.PORT || process.env.BOT_LOCAL_PORT);

// Listening on defined port
server.listen(app.get("port"), function () {
    console.log("Server started on port " + app.get("port"));
});
