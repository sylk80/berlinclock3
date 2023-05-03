class Clockwork {

    constructor() {
        this.time = new Date();
        this.rows = [[],[],[],[],[]]
    }

    addSeconds() {
        this.rows[0] = this.time.getSeconds() %2 === 0 ? ['Y'] : ['O']
    }

    addFiveHours() {
        let hours = this.time.getHours();
        for(let hourindex = 0 ; hourindex < 4 ; hourindex++) {
            let value = hours - 5 >= 0 ? "R" : "O"
            this.rows[1][hourindex] = value
            hours = hours -5
        }
    }

    addSingleHours() {
        this.rows[2] = ["O","O","O","O"]
    }


}

const show_berlinclock = () => {
    let clockwork = new Clockwork();
    clockwork.addSeconds()
    clockwork.addFiveHours()
    clockwork.addSingleHours()
    return clockwork.rows
};

module.exports = {Clockwork, show_berlinclock}