const mockDateSecond = (dateSpy, seconds) => {
    dateSpy.mockReturnValue(seconds)
}

const mockDateHours = (dateSpy, hours) => {
    dateSpy.mockReturnValue(hours)
}

const mockDateMinutes = (dateSpy, minutes) => {
    dateSpy.mockReturnValue(minutes)
}

module.exports = {mockDateSecond, mockDateMinutes, mockDateHours}