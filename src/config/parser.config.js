import app from "../app"
import bodyParser from 'body-parser'
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);

app.use(bodyParser.json());
