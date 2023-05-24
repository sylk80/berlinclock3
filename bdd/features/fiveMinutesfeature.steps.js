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

const {  mockDateMinutes} = require("../../__tests__/mocktime")

let greeting
let minuteSpy

Before(() => {
    minuteSpy = jest.spyOn(Date.prototype, "getMinutes")
})
Given('the API endpoint /time', () => {})

When('I request the time for 00:00:xx', () => {
    mockDateMinutes(minuteSpy,0)
    greeting = show_berlinclock()
})

Then('the fourth row is OFF', () => {
    expect(greeting[3]).toStrictEqual(["O","O","O","O","O","O","O","O","O","O","O"])
})

And('the fourth row is filled with O', () => {
    expect(greeting[3][0]).toBe("O")
})

Given('the API endpoint /time', () => {})

When('I request the time for 00:05:xx', () => {
    mockDateMinutes(minuteSpy,5)
    greeting = show_berlinclock()
})

Then('the fourth row is ON with 1 light', () => {
    expect(greeting[3]).toStrictEqual(["Y","O","O","O","O","O","O","O","O","O","O"])
})

And('the fourth row\'s first element is Y', () => {
    expect(greeting[3][0]).toBe("Y")
})

Given('the API endpoint /time', () => {})

When('I request the time for 00:10:xx', () => {
    mockDateMinutes(minuteSpy,10)
    greeting = show_berlinclock()
})

Then('the fourth row is ON with 2 light', () => {
    expect(greeting[3]).toStrictEqual(["Y","Y","O","O","O","O","O","O","O","O","O"])
})

And('the fourth row\'s second element is Y', () => {
    expect(greeting[3][1]).toBe("Y")
})

Given('the API endpoint /time', () => {})

When('I request the time for 00:15:xx', () => {
    mockDateMinutes(minuteSpy,15)
    greeting = show_berlinclock()
})

Then('the fourth row is ON with 3 light', () => {
    expect(greeting[3]).toStrictEqual(["Y","Y","R","O","O","O","O","O","O","O","O"])
})

And('the fourth row\'s first two element is Y and the third is R', () => {
    expect(greeting[3][0]).toBe("Y")
    expect(greeting[3][1]).toBe("Y")
    expect(greeting[3][2]).toBe("R")
})

After(() => {
    minuteSpy.mockReset()
    minuteSpy.mockRestore()
})




Fusion("fiveMinutes.feature")