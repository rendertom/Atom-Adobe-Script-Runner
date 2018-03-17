const message = {
    success (message) {
        atom.notifications.addSuccess(message);
    },

    info (message) {
        atom.notifications.addInfo(message);
    },

    error (message) {
        atom.notifications.addError(message);
    }
}

module.exports = message;