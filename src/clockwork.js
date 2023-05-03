class Clockwork {

    constructor() {
        this.time = new Date();
        this.rows = [[],[],[],[],[]]
    }

    addSeconds() {
        this.rows[0] = this.time.getSeconds() %2 === 0 ? ['Y'] : ['O']
    }


}

const show_berlinclock = () => {
    let clockwork = new Clockwork();
    clockwork.addSeconds()
    return clockwork.rows
};

module.exports = {Clockwork, show_berlinclock}