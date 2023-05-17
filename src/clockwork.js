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
            this.rows[1][hourindex] = hours - 5 >= 0 ? "R" : "O"
            hours = hours -5
        }
    }

    addSingleHours() {
        let hours= this.time.getHours()
        this.rows[2] = ["O","O","O","O"]
        if(hours > 5) {
            this.rows[2][0] = "R"
        }
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