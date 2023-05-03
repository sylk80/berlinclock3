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

const { mockDateSecond} = require("../../__tests__/mocktime")

let greeting
let dateSpy

Before(() => {
    dateSpy = jest.spyOn(Date.prototype, "getSeconds")
})
Given('the API endpoint /time', () => {})

When('I request the time for 00:00:01', () => {
    mockDateSecond(dateSpy,1)
    greeting = show_berlinclock()
})

Then('the seconds lightbulb is OFF', () => {
    expect(greeting[0][0]).toBe("O")
})

And('the seconds is O', () => {
    expect(greeting[0][0]).toBe("O")
})

Given('the API endpoint /time', () => {})

When('I request the time for 00:00:00', () => {
    mockDateSecond(dateSpy,0)
    greeting = show_berlinclock()
})

Then('the seconds lightbulb is ON', () => {
    expect(greeting[0][0]).toBe("Y")
})

And('the seconds is Y', () => {
    expect(greeting[0][0]).toBe("Y")
})

After(() => {
    dateSpy.mockReset()
    dateSpy.mockRestore()
})




Fusion("second.feature")