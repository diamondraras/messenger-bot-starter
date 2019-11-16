import app from '../app'
import home from "../routes/home"
import webhook from "../routes/webhook"

app.use("/", home)
app.use("/webhook", webhook)