
export function getDateString() {
    const date = new Date()
    const day = addZero(date.getDate())
    const month = addZero((date.getMonth() + 1))
    const year = date.getFullYear()
    const hours = addZero(date.getHours())
    const minutes = addZero(date.getMinutes())
    const seconds = addZero(date.getSeconds())

    return `${day}.${month}.${year} ${hours}:${minutes}:${seconds}`
}

function addZero(number) {
    if (String(number).length == 1) {
        number = '0' + number
    }
    return number
}