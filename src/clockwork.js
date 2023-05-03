class Clockwork {

    constructor() {
        this.time = new Date();
        this.rows = [[],[],[],[],[]]
    }

    addSeconds() {
        this.rows[0] = this.time.getSeconds() %2 === 0 ? ['Y'] : ['O']
    }

    addFiveHours() {
        this.rows[1] = ["O","O","O","O"]
        if(this.time.getHours() === 5 ) {
            this.rows[1][0] = "R"
        }
    }


}

const show_berlinclock = () => {
    let clockwork = new Clockwork();
    clockwork.addSeconds()
    clockwork.addFiveHours()
    return clockwork.rows
};

module.exports = {Clockwork, show_berlinclock}