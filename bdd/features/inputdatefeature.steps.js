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

let greetingValidTime

Given('the API endpoint /time', () => {})

When('I request the time for 04:59:59', () => {
    greetingValidTime = show_berlinclock("04:59:59")
})

Then('the berlin clock is shown', () => {
    expect(greetingValidTime).toBeDefined()
})

And('it has 5 rows', () => {
    expect(greetingValidTime).toHaveLength(5)
})

And('the first row has one length with Y', () => {
    expect(greetingValidTime[0]).toStrictEqual(["Y"])
})

And('the second row has fourth length with OOOO', () => {
    expect(greetingValidTime[1]).toStrictEqual(["OOOO"])
})

And('the third row has four length with RRRR', () => {
    expect(greetingValidTime[2]).toStrictEqual(["RRRR"])
})

And('the fourth row has eleven length with YYRYYRYYRYY', () => {
    expect(greetingValidTime[3]).toStrictEqual(["YYRYYRYYRYY"])
})

And('the fifth row has four length with YYYY', () => {
    expect(greetingValidTime[4]).toStrictEqual(["YYYY"])
})


Given('the API endpoint /time', () => {})

When('I request the time for 05:00:00', () => {
    greetingValidTime = show_berlinclock("05:00:00")
})

Then('the berlin clock is shown', () => {
    expect(greetingValidTime).toBeDefined()
})

And('it has 5 rows', () => {
    expect(greetingValidTime).toHaveLength(5)
})

And('the first row has one length with O', () => {
    expect(greetingValidTime[0]).toStrictEqual(["O"])
})

And('the second row has fourth length with ROOO', () => {
    expect(greetingValidTime[1]).toStrictEqual(["ROOO"])
})

And('the third row has four length with OOOO', () => {
    expect(greetingValidTime[2]).toStrictEqual(["OOOO"])
})

And('the fourth row has eleven length with OOOOOOOOOOO', () => {
    expect(greetingValidTime[3]).toStrictEqual(["OOOOOOOOOOO"])
})

And('the fifth row has four length with OOOO', () => {
    expect(greetingValidTime[4]).toStrictEqual(["OOOO"])
})

Fusion("inputdate.feature")