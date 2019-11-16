import create_quick_replies from '../senders/quick_reply/create_quick_replies'
import submit from './submit.sender'
export default function (data, recipientId, session, cb) {

    let messageData = {
        text: data.text,
        metadata: "messageText"
    };

    if (data.qr) {
        messageData.quick_replies = create_quick_replies(data.qr)
    }

    submit(recipientId, messageData, cb);
}
