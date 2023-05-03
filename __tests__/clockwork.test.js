const { Clockwork, show_berlinclock} = require('../src/clockwork.js');
const lang = require('lodash/lang');

describe('BerlinClock testing...', () => {
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