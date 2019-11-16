export default class TemplateButtons {
    constructor() {
        this.buttons = []
    }

    add_button(title, payload, type = "postback") {
        this.buttons.push({ title, payload, type })
    }

    parse() {
        return this.buttons
    }
}