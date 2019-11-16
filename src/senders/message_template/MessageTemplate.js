export default class MessageTemplate {
    constructor() {
        this.elements = []
    }

    add_item(title, subtitle, image_url, buttons) {
        let json = { title, image_url, subtitle }
        json['buttons'] = buttons.parse()
        this.elements.push(json)
    }

    parse() {
        return {
            attachment: {
                type: "template",
                payload: {
                    template_type: "generic",
                    elements: this.elements
                }
            }
        }
    }
}