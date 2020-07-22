const findMatching = (drivers, name) => {
    let matchingDrivers = drivers.filter( driver => {
        return driver.toLowerCase() === name.toLowerCase()
    })
    return matchingDrivers
}

const fuzzyMatch = (drivers, letter) => {
    let matchingDrivers = drivers.filter(driver => {
        return driver[0].toLowerCase() === letter[0].toLowerCase()
    })
    return matchingDrivers
}

const matchName = (drivers, name) => {
    let matchingDrivers = drivers.filter( driver => {
        return driver["name"].toLowerCase() === name.toLowerCase()
    })
    return matchingDrivers
}