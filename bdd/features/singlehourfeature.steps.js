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

const { mockDateHours, mockDateMinutes, mockDateSecond} = require("../../__tests__/mocktime")

let greeting
let secondSpy
let minuteSpy
let hourSpy

Before(() => {
    hourSpy = jest.spyOn(Date.prototype, "getHours")
    minuteSpy = jest.spyOn(Date.prototype, "getMinutes")
    secondSpy = jest.spyOn(Date.prototype, "getSeconds")
})
Given('the API endpoint /time', () => {})

When('I request the time for 05:59:59', () => {
    mockDateHours(hourSpy,4)
    mockDateMinutes(minuteSpy,59)
    mockDateSecond(secondSpy,59)
    greeting = show_berlinclock()
})

Then('the third row is OFF', () => {
    expect(greeting[2]).toStrictEqual(["O","O","O","O"])
})

And('the third row is filled with O', () => {
    expect(greeting[2][0]).toBe("O")
})

After(() => {
    hourSpy.mockReset()
    hourSpy.mockRestore()
    minuteSpy.mockReset()
    minuteSpy.mockRestore()
    secondSpy.mockReset()
    secondSpy.mockRestore()
})




Fusion("singlehour.feature")