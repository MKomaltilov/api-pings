export function getFullURL() {
    const url = getURL()
    return url
}

export function drawData(data) {
    const contentDiv = getContentDiv()
    clearElement(contentDiv)
    data.map(site => {
        const element = createDataElement(site)
        contentDiv.appendChild(element)
    })
}

export function getRequestDataButton() {
    return document.getElementById('request-data')
}

export function getPingAPIButton() {
    return document.getElementById('start-ping')
}

export function showErrorMessage(msg) {
    alert(msg)
}

export function getAPIElement(index) {
    return document.getElementById('api-' + index)
}


function createDataElement(data) {
    const div = document.createElement('div')
    div.className = 'api'
    div.id = 'api-' + countElementsByClassName('api')
    const ul = document.createElement('ul')
    for (let key in data) {
        const li = document.createElement('li')
        li.innerText = `${key}: ${data[key]}`
        ul.appendChild(li)
    }
    div.appendChild(ul)
    return div
}

function getContentDiv() {
    return document.getElementById('content')
}

function getURL() {
    return  document.getElementById('url').value
}

function clearElement(element) {
    element.innerText = ''
}

function countElementsByClassName(className) {
    return document.getElementsByClassName(className).length
}
