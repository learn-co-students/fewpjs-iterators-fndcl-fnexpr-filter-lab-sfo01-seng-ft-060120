// Code your solution here

const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}

const fuzzyMatch = (drivers, name) => {
    let matches = drivers.filter(driver => driver.charAt(0) === name.charAt(0))
    return matches
}

const matchName = (drivers, name) => {
    return drivers.filter(driver => driver.name === name)
}