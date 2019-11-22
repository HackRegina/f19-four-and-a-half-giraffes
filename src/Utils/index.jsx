const EventEmitter = {
    events: [],
    dispatch: (event, data) => {
        if (!this.events[event]) {
            return;
        }
        this.events[event].forEach(cb => cb(data));
    },
    subscribe: (event, cb) => {
        if (!this.events[event]) {
            return;
        }
        this.events[event].push(cb);
    }
}

module.exports = {
    EventEmitter,
};
