// Code your solution here
const findMatching = (drivers, name) => {
    return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}
const fuzzyMatch = (drivers, string) => {
    return drivers.filter(driver => driver.startsWith(string))
}

const matchName = (drivers, string) => {
    return drivers.filter(driver => driver.name === string)
}