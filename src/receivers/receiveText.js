import sendText from "../senders/sendText";
export default (event, session) => {
    var senderID = event.sender.id;
    var recipientID = event.recipient.id;
    var timeOfMessage = event.timestamp;
    var message = event.message;


    switch (message) {
        default:
            sendText({ text: "hello world" }, senderID, session)
            break;
    }

}