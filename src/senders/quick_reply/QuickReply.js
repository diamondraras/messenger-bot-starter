class QuickReply {
    constructor() {
        this._quick_replies = []
    }


    add_item(title, payload, image_url) {
        let json = {}
        json['content_type'] = 'text'
        json['title'] = title
        json['payload'] = payload
        json['image_url'] = image_url
        this._quick_replies.push(json)
    }

    add_location() {
        this._quick_replies.push({ content_type: "location" })
    }

    randomize() {
        this._quick_replies.sort(() => .5 - Math.random());
    }
}
export default QuickReply
