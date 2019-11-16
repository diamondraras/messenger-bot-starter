import sendText from "../senders/sendText"
import receiveText from "../receivers/receiveText";
import receivePostback from "../receivers/receivePostback";
import session from "../config/session.config";
import receiveQuickReply from "../receivers/receiveQuickReply";
const router = require('express').Router()

router.get('/', function (req, res) {

    console.log("webhook verification...");
    if (req.query['hub.verify_token'] === process.env.VERIFY_TOKEN) {

        console.log("webhook verification success");
        res.send(req.query['hub.challenge'])
    } else {
        res.send('Error, wrong token')
    }
})

router.post('/', function (req, res) {
    let messaging_events = req.body.entry[0].messaging
    for (let i = 0; i < messaging_events.length; i++) {
        let event = req.body.entry[0].messaging[i]
        let sender = event.sender.id

        session.get_session(sender, (_) => {
            if (event.message) {
                if (event.message.quick_reply) {
                    receiveQuickReply(event, session)
                } else {
                    receiveText(event, session)
                }
            } else if (event.postback) {
                receivePostback(event, session)
            }
        })
    }
    res.sendStatus(200)
})

module.exports = router;
