import { getDateString } from './getDateString.js'

export function writeLog(data) {
    eel.write_log(getDateString() + ': ' + data)
}

export function saveDataToFile(data) {
    eel.save_data_to_file(data)
}