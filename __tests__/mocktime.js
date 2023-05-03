const mockDateSecond = (dateSpy, seconds) => {
    dateSpy.mockReturnValueOnce(seconds)
}

const mockDateHours = (dateSpy, hours) => {
    dateSpy.mockReturnValueOnce(hours)
}

const mockDateMinutes = (dateSpy, minutes) => {
    dateSpy.mockReturnValueOnce(minutes)
}

module.exports = {mockDateSecond, mockDateMinutes, mockDateHours}