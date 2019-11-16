import redis from 'redis'
class Session {
    constructor() {
        this.client = redis.createClient({
            "port": process.env.REDIS_PORT,
            // "password": process.env.REDIS_PASSWORD || "",
            "host": process.env.REDIS_HOST
        })
    }

    get_session(senderID, cb) {
        this.client.get(senderID, (err, response) => {
            response = JSON.parse(response)
            if (!response) {
                response = {
                    lang: process.env.DEFAULT_LANG
                }
                this.client.set(senderID, JSON.stringify(response))
            }
            this.data = response
            cb(response)
        })
    }


    set_session(senderID, data, ttl = -1) {
        if (ttl != -1) {
            this.client.set(senderID, JSON.stringify(data), 'EX', ttl)
        } else {
            this.client.set(senderID, JSON.stringify(data))
        }
        this.data = data
    }
}

export default new Session()