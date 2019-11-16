import QuickReply from './QuickReply'

export default (qr) => {
    let quick_replies = []
    let current_json = {}
    for (let i = 0; i < qr._quick_replies.length; i++) {
        if (qr._quick_replies[i]['content_type'] == "location") {
            current_json['content_type'] = qr._quick_replies[i]['content_type']
        } else {
            current_json['content_type'] = qr._quick_replies[i]['content_type']
            current_json['title'] = qr._quick_replies[i]['title']
            current_json['payload'] = qr._quick_replies[i]['payload']
            if (qr._quick_replies[i]['image_url']) {
                current_json['image_url'] = qr._quick_replies[i]['image_url']
            }
        }
        quick_replies.push(current_json)
        current_json = {}
    }
    return quick_replies
}