import sendText from "../senders/sendText";
import locales from "../../lang/data.json"
export default (senderID, session, lang) => {
    session.set_session(senderID, {
        ...session.data,
        lang
    })
    sendText({ text: locales.lang_changed[session.data.lang] }, senderID)
}