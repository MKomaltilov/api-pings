import { getPingAPIButton, showErrorMessage, getAPIElement } from './pageElements.js'
import { writeLog } from './log.js'

export function initializePingAPIButton() {
    const pingAPIButton = getPingAPIButton()
    pingAPIButton.onclick = defaultPingAPIClick
    pingAPIButton.setAttribute('disabled', true)
}

export function updatePingAPIButton(data) {
    const pingAPIButton = getPingAPIButton()
    pingAPIButton.removeAttribute('disabled')
    pingAPIButton.innerText = 'Start ping'

    pingAPIButton.onclick = () => {
        startPingAPI(data)
    }
}


function defaultPingAPIClick() {
    showErrorMessage('Please request data first!')
}

function startPingAPI(data) {
    writeLog('START PINGING')
    const intervals = data.map((site, index) => setInterval(() => {
        writeLog(`STARTED: ping to ${site.url}`)
        fetch(site.url).then(response => {
            updatePingData(response, index)
        })
    }, 2000))
    const pingAPIButton = getPingAPIButton()
    pingAPIButton.innerText = 'Stop ping'

    pingAPIButton.onclick = () => {
        stopPingAPI(data, intervals)
    }
}

function stopPingAPI(data, intervals) {
    writeLog('STOP PINGING')
    for (let interval of intervals) {
        clearInterval(interval)
    }
    updatePingAPIButton(data)
}



function updatePingData(response, index) {
    writeLog(`FINISHED: ping to ${response.url} with status ${response.status}`)
    const el = getAPIElement(index)
    if (response.status >= 200 && response.status < 300) {
        el.style.color = 'green'
    } else {
        el.style.color = 'red'
    }
}