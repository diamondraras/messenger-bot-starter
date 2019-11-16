
export default (event, session) => {
    let senderID = event.sender.id;
    let recipientID = event.recipient.id;
    let timeOfMessage = event.timestamp;
    let message = event.quick_reply;
    let quick_reply = event.message.quick_reply;

    let payload = quick_reply.payload

    let param = payload.split(".")[1]
}