import { drawData, getFullURL, getRequestDataButton } from './pageElements.js'
import { writeLog, saveDataToFile } from './log.js'
import { updatePingAPIButton } from './pingAPI.js'

export function initializeRequestDataButton() {
    const requestDataButton = getRequestDataButton()
    requestDataButton.onclick = requestDataButtonClick
}

function requestDataButtonClick() {
    const url = getFullURL()
    getData(url)
}

function getData(url) {
    writeLog('STARTED: request data from ' + url)
    fetch(url).then(response => response.json()).then(data => {
        writeLog('FINISHED: got data from ' + url)
        saveDataToFile(data)
        updateData(data)
    })
}

function updateData(data) {
    drawData(data)
    updatePingAPIButton(data)
}