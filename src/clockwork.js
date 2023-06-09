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
        let singleHour = hours % 5
        for(let hourindex = 0 ; hourindex < 4 ; hourindex++) {
            this.rows[2][hourindex] = --singleHour >= 0 ? "R" : "O"
        }
    }

    addFiveMinutes() {
        this.rows[3] = ["O","O","O","O","O","O","O","O","O","O","O"]
        let minutes = this.time.getMinutes()
        for(let minuteindex = 0 ; minuteindex < 11 ; minuteindex++) {
            this.rows[3][minuteindex] = minutes - 5 >= 0 ? (minuteindex+1) % 3 === 0 ? "R" : "Y" : "O"
            minutes = minutes -5
        }
    }

    addSingleMinutes() {
        this.rows[4] = ["O","O","O","O"]
        let minutes = this.time.getMinutes()
        let singleMinute = minutes % 5
        for(let minuteindex = 0 ; minuteindex < 4 ; minuteindex++) {
            this.rows[4][minuteindex] = --singleMinute >= 0 ? "Y" : "O"
        }
    }

}

const show_berlinclock = () => {
    let clockwork = new Clockwork();
    clockwork.addSeconds()
    clockwork.addFiveHours()
    clockwork.addSingleHours()
    clockwork.addFiveMinutes()
    clockwork.addSingleMinutes()
    return clockwork.rows
};

module.exports = {Clockwork, show_berlinclock}