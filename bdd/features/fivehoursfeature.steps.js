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

When('I request the time for 04:59:59', () => {
    mockDateHours(hourSpy,4)
    mockDateMinutes(minuteSpy,59)
    mockDateSecond(secondSpy,59)
    greeting = show_berlinclock()
})

Then('the second row is OFF', () => {
    expect(greeting[1]).toStrictEqual(["O","O","O","O"])
})

And('the second row is filled with O', () => {
    expect(greeting[1][0]).toBe("O")
})

Given('the API endpoint /time', () => {})

When('I request the time for 05:00:00', () => {
    mockDateHours(hourSpy,5)
    mockDateMinutes(minuteSpy,0)
    mockDateSecond(secondSpy,0)
    greeting = show_berlinclock()
})

Then('the second row is ON with 1 light', () => {
    expect(greeting[1]).toStrictEqual(["R","O","O","O"])
})

And('the second row\'s first element is R', () => {
    expect(greeting[1][0]).toBe("R")
})

Given('the API endpoint /time', () => {})

When('I request the time for 10:00:00', () => {
    mockDateHours(hourSpy,10)
    mockDateMinutes(minuteSpy,0)
    mockDateSecond(secondSpy,0)
    greeting = show_berlinclock()
})

Then('the second row is ON with 2 lights', () => {
    expect(greeting[1]).toStrictEqual(["R","R","O","O"])
})

And('the second row\'s second element is R', () => {
    expect(greeting[1][1]).toBe("R")
})

Given('the API endpoint /time', () => {})

When('I request the time for 15:00:00', () => {
    mockDateHours(hourSpy,15)
    mockDateMinutes(minuteSpy,0)
    mockDateSecond(secondSpy,0)
    greeting = show_berlinclock()
})

Then('the second row is ON with 3 lights', () => {
    expect(greeting[1]).toStrictEqual(["R","R","R","O"])
})

And('the second row\'s third element is R', () => {
    expect(greeting[1][2]).toBe("R")
})

Given('the API endpoint /time', () => {})

When('I request the time for 20:00:00', () => {
    mockDateHours(hourSpy,20)
    mockDateMinutes(minuteSpy,0)
    mockDateSecond(secondSpy,0)
    greeting = show_berlinclock()
})

Then('the second row is ON with 4 lights', () => {
    expect(greeting[1]).toStrictEqual(["R","R","R","R"])
})

And('the second row\'s fourth element is R', () => {
    expect(greeting[1][3]).toBe("R")
})

After(() => {
    hourSpy.mockReset()
    hourSpy.mockRestore()
    minuteSpy.mockReset()
    minuteSpy.mockRestore()
    secondSpy.mockReset()
    secondSpy.mockRestore()
})




Fusion("fivehours.feature")