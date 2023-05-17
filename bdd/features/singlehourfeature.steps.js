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

let greetingSingleHours
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
    mockDateHours(hourSpy,5)
    mockDateMinutes(minuteSpy,59)
    mockDateSecond(secondSpy,59)
    greetingSingleHours = show_berlinclock()
})

Then('the third row is OFF', () => {
    expect(greetingSingleHours[2]).toStrictEqual(["O","O","O","O"])
})

And('the third row is filled with O', () => {
    expect(greetingSingleHours[2][0]).toBe("O")
})

Given('the API endpoint /time', () => {})

When('I request the time for 06:00:00', () => {
    mockDateHours(hourSpy,6)
    mockDateMinutes(minuteSpy,0)
    mockDateSecond(secondSpy,0)
    greetingSingleHours = show_berlinclock()
})

Then('the third row is ON with 1 light', () => {
    expect(greetingSingleHours[2]).toStrictEqual(["R","O","O","O"])
})

And('the third row\'s first element is R', () => {
    expect(greetingSingleHours[2][0]).toBe("R")
})

Given('the API endpoint /time', () => {})

When('I request the time for 07:59:59', () => {
    mockDateHours(hourSpy,7)
    mockDateMinutes(minuteSpy,59)
    mockDateSecond(secondSpy,59)
    greetingSingleHours = show_berlinclock()
})

Then('the third row is ON with 2 light', () => {
    expect(greetingSingleHours[2]).toStrictEqual(["R","R","O","O"])
})

And('the third row\'s second element is R', () => {
    expect(greetingSingleHours[2][1]).toBe("R")
})

Given('the API endpoint /time', () => {})

When('I request the time for 08:59:59', () => {
    mockDateHours(hourSpy,8)
    mockDateMinutes(minuteSpy,59)
    mockDateSecond(secondSpy,59)
    greetingSingleHours = show_berlinclock()
})

Then('the third row is ON with 3 light', () => {
    expect(greetingSingleHours[2]).toStrictEqual(["R","R","R","O"])
})

And('the third row\'s third element is R', () => {
    expect(greetingSingleHours[2][2]).toBe("R")
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