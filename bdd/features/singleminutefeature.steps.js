/* eslint-disable new-cap */
const {
    Given,
    When,
    Then,
    And,
    Before,
    After,
    Fusion,
} = require("jest-cucumber-fusion")

const { show_berlinclock } = require('../../src/clockwork')

const { mockDateMinutes} = require("../../__tests__/mocktime")

let greetingSingleMinutes
let minuteSpy

Before(() => {
    minuteSpy = jest.spyOn(Date.prototype, "getMinutes")
})
Given('the API endpoint /time', () => {})

When('I request the time for 00:00:xx', () => {
    mockDateMinutes(minuteSpy,0)
    greetingSingleMinutes = show_berlinclock()
})

Then('the fifth row is OFF', () => {
    expect(greetingSingleMinutes[4]).toStrictEqual(["O","O","O","O"])
})

And('the fifth row is filled with O', () => {
    expect(greetingSingleMinutes[4][0]).toBe("O")
    expect(greetingSingleMinutes[4][1]).toBe("O")
    expect(greetingSingleMinutes[4][2]).toBe("O")
    expect(greetingSingleMinutes[4][3]).toBe("O")
})

Given('the API endpoint /time', () => {})

When('I request the time for 00:01:xx', () => {
    mockDateMinutes(minuteSpy,1)
    greetingSingleMinutes = show_berlinclock()
})

Then('the fifth row is ON with 1 light', () => {
    expect(greetingSingleMinutes[4]).toStrictEqual(["Y","O","O","O"])
})

And('the fifth row\'s first element is Y', () => {
    expect(greetingSingleMinutes[4][0]).toBe("Y")
})
After(() => {
    minuteSpy.mockReset()
    minuteSpy.mockRestore()
})


Fusion("singleminute.feature")