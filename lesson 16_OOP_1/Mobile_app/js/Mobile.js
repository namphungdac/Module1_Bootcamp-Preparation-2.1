class Mobile {
    constructor(name) {
        this.name = name;
        this.battery = 100;
        this.status = false;
        this.message = "";
        this.inbox = [];
        this.outbox = [];
    }
    decreaseBattery() {
        if (this.battery > 0) {
            this.battery--;
        } else {
            this.turnOff();
        }
    }
    checkStatus() {
        this.decreaseBattery();
        return this.status;
    }
    writeMessage(text) {
        if (this.status) {
            this.decreaseBattery();
            this.message;
        }
        this.decreaseBattery();
        this.message = text;
    }
    turnOn() {
        this.status = true;
    }
    turnOff() {
        this.status = false;
    }
    changeBattery() {
        this.battery += 1;
    }
    sendMessage(phone) {
        let date = new Date();
        this.outbox.push(this.name + ":" + this.message + "time: " + date.getDate());
        phone.inbox.push(this.name + ":" + this.message + "time: " + date.getDate());
    }
    getInbox() {
        return this.inbox;
    }
    getOutbox() {
        return this.outbox;
    }
}