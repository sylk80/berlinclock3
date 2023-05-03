const mockDateSecond = (dateSpy, seconds) => {
    dateSpy.mockReturnValueOnce(seconds)
}

module.exports = {mockDateSecond}