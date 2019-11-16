import sendText from "../senders/sendText";
import locales from "../../lang/data.json"
import QuickReply from "../senders/quick_reply/QuickReply";
import changeLanguage from "../utils/changeLanguage";
export default (event, session) => {
    let senderID = event.sender.id;
    let recipientID = event.recipient.id;
    let timeOfMessage = event.timestamp;
    let recipient = event.recipient;
    let timestamp = event.timestamp;
    let postback = event.postback;
    let payload = postback.payload


    switch (payload) {
        // case "BEGINING":
        //     say_welcome(senderID, session)
        //     break;
        case "LANG.FR":
            changeLanguage(senderID, session, "fr")
            break;
        case "LANG.MG":
            changeLanguage(senderID, session, "mg")
            break;
        case "LANG.EN":
            changeLanguage(senderID, session, "en")
            break;
        case "STAT":

            break;
        case "ABOUT":

            break;

        default:
            break;
    }

}