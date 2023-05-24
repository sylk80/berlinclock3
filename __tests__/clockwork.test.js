const { Clockwork, show_berlinclock} = require('../src/clockwork.js');
const lang = require('lodash/lang');

describe('BerlinClock testing for first row containing odd and even seconds...', () => {
    const clockwork = new Clockwork();
    clockwork.addSeconds()
    test('should be a Clockwork class...', () => {
      expect(clockwork).toBeDefined();
    });
    test('should be a show_berlinclock method...', () => {
      expect(show_berlinclock()).toBeDefined();
    });
    test('berlin clock should have access to time', () => {
        expect(clockwork.time).toBeDefined();
    });
    test('berlin clock should have rows', () => {
        expect(clockwork.rows).toBeDefined();
    });
    test('berlin clock should have multiple rows', () => {
        expect(clockwork.rows).not.toHaveLength(1);
    });
    test('berlin clock\'s first row has 1 length', () => {
        expect(clockwork.rows[0]).toHaveLength(1);
    });
    test('berlin clock should show rows when asked...', () => {
        let berlinclock = show_berlinclock()
        expect(lang.isArray(berlinclock)).toBe(true);
    });
    test('Berlin clock with time xx:xx:x1 should have 0 in first row...', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setSeconds(1)
        clockwork2.addSeconds()
        expect(clockwork2.rows[0]).toStrictEqual(["O"]);
    });
    test('Berlin clock with time xx:xx:x3 should have 0 in first row...', () => {
        const clockwork3 = new Clockwork();
        clockwork3.time.setSeconds(3)
        clockwork3.addSeconds()
        expect(clockwork3.rows[0]).toStrictEqual(["O"]);
    });
    test('Berlin clock with time xx:xx:00 should have Y in first row...', () => {
        const clockwork4 = new Clockwork();
        clockwork4.time.setSeconds(0)
        clockwork4.addSeconds()
        expect(clockwork4.rows[0]).toStrictEqual(["Y"]);
    });
    test('Berlin clock with time xx:xx:02 should have Y in first row...', () => {
        const clockwork5 = new Clockwork();
        clockwork5.time.setSeconds(2)
        clockwork5.addSeconds()
        expect(clockwork5.rows[0]).toStrictEqual(["Y"]);
    });
  });


describe('BerlinClock testing for second row for five hours each...', () => {
    const clockwork = new Clockwork();
    clockwork.addFiveHours()
    test('berlin clock\'s second row has 4 length', () => {
        expect(clockwork.rows[1]).toHaveLength(4);
    });
    test('Berlin clock with time 04:xx:xx should have Os in second row...', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setHours(4)
        clockwork2.addFiveHours()
        expect(clockwork2.rows[1]).toStrictEqual(["O","O","O","O"]);
    });
    test('Berlin clock with time 04:59:59 should have O in second rows first element...', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setHours(4,59,59)
        clockwork2.addFiveHours()
        expect(clockwork2.rows[1][0]).toStrictEqual("O");
    });
    test('Berlin clock with time 05:00:00 should have R in second rows first element...', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setHours(5)
        clockwork2.addFiveHours()
        expect(clockwork2.rows[1][0]).toStrictEqual("R");
    });
    test('Berlin clock with time 10:00:00 should have R in second rows second element...', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setHours(10)
        clockwork2.addFiveHours()
        expect(clockwork2.rows[1][1]).toStrictEqual("R");
    });
    test('Berlin clock with time 15:00:00 should have R in second rows third element...', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setHours(15)
        clockwork2.addFiveHours()
        expect(clockwork2.rows[1][2]).toStrictEqual("R");
    });
    test('Berlin clock with time 20:00:00 should have R in second rows third element...', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setHours(20)
        clockwork2.addFiveHours()
        expect(clockwork2.rows[1][3]).toStrictEqual("R");
    });
    test('Berlin clock with time 23:59:59 should have R in second rows all element...', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setHours(23,59,59)
        clockwork2.addFiveHours()
        expect(clockwork2.rows[1]).toStrictEqual(["R","R","R","R"]);
    });
    test('Berlin clock with time 00:00:00 should have R in second rows all element...', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setHours(0,0,0)
        clockwork2.addFiveHours()
        expect(clockwork2.rows[1]).toStrictEqual(["O","O","O","O"]);
    });
});

describe('BerlinClock testing for third row for single hours...', () => {
    test('berlin clock\'s third row has 4 length', () => {
        const clockwork = new Clockwork();
        clockwork.addSingleHours()
        expect(clockwork.rows[2]).toHaveLength(4);
    });
    test('Berlin clock with time 05:xx:xx should have Os in second row...', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setHours(5)
        clockwork2.addSeconds()
        clockwork2.addFiveHours()
        clockwork2.addSingleHours()
        expect(clockwork2.rows[2]).toStrictEqual(["O","O","O","O"]);
    });
    test('Berlin clock with time 06:xx:xx should have R in third row first element...', () => {
        const clockwork3 = new Clockwork();
        clockwork3.time.setHours(6)
        clockwork3.addSeconds()
        clockwork3.addFiveHours()
        clockwork3.addSingleHours()
        expect(clockwork3.rows[2]).toStrictEqual(["R","O","O","O"]);
    });
    test('Berlin clock with time 07:xx:xx should have R in third row second element...', () => {
        const clockwork4 = new Clockwork();
        clockwork4.time.setHours(7)
        clockwork4.addSeconds()
        clockwork4.addFiveHours()
        clockwork4.addSingleHours()
        expect(clockwork4.rows[2]).toStrictEqual(["R","R","O","O"]);
    });
    test('Berlin clock with time 08:xx:xx should have R in third row third element...', () => {
        const clockwork5 = new Clockwork();
        clockwork5.time.setHours(8)
        clockwork5.addSeconds()
        clockwork5.addFiveHours()
        clockwork5.addSingleHours()
        expect(clockwork5.rows[2]).toStrictEqual(["R","R","R","O"]);
    });
    test('Berlin clock with time 09:xx:xx should have R in third row fourth element...', () => {
        const clockwork6 = new Clockwork();
        clockwork6.time.setHours(9)
        clockwork6.addSeconds()
        clockwork6.addFiveHours()
        clockwork6.addSingleHours()
        expect(clockwork6.rows[2]).toStrictEqual(["R","R","R","R"]);
    });
    test('Berlin clock with time 10:xx:xx should have O in every element of the third row...', () => {
        const clockwork7 = new Clockwork();
        clockwork7.time.setHours(10)
        clockwork7.addSeconds()
        clockwork7.addFiveHours()
        clockwork7.addSingleHours()
        expect(clockwork7.rows[2]).toStrictEqual(["O","O","O","O"]);
    });
});

describe('BerlinClock testing for fourth row for five minutes in hours...', () => {
    test('berlin clock\'s fourth row has 11 length', () => {
        const clockwork = new Clockwork();
        clockwork.addFiveMinutes()
        expect(clockwork.rows[3]).toHaveLength(11);
    });
    test('Berlin clock with time 00:00:xx  should have Os the fourth row', () => {
        const clockwork2 = new Clockwork();
        clockwork2.time.setMinutes(0)
        clockwork2.addFiveMinutes()
        expect(clockwork2.rows[3]).toStrictEqual(["O","O","O","O","O","O","O","O","O","O","O"])
    });
    test('Berlin clock with time 00:05:xx  should have Y in the first element of the fourth row', () => {
        const clockwork3 = new Clockwork();
        clockwork3.time.setMinutes(5)
        clockwork3.addFiveMinutes()
        expect(clockwork3.rows[3]).toStrictEqual(["Y","O","O","O","O","O","O","O","O","O","O"])
    });
    test('Berlin clock with time 00:10:xx  should have Y in the first two element of the fourth row', () => {
        const clockwork3 = new Clockwork();
        clockwork3.time.setMinutes(10)
        clockwork3.addFiveMinutes()
        expect(clockwork3.rows[3]).toStrictEqual(["Y","Y","O","O","O","O","O","O","O","O","O"])
    });
    test('Berlin clock with time 00:15:xx  should have Y in the first two element of the fourth row and R in the third', () => {
        const clockwork4 = new Clockwork();
        clockwork4.time.setMinutes(15)
        clockwork4.addFiveMinutes()
        expect(clockwork4.rows[3]).toStrictEqual(["Y","Y","R","O","O","O","O","O","O","O","O"])
    });
});

