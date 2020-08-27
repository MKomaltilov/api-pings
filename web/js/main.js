import { initializePingAPIButton }  from './pingAPI.js'
import { initializeRequestDataButton }  from './requestData.js'

document.addEventListener("DOMContentLoaded", () => {
    initializeRequestDataButton()
    initializePingAPIButton()
})
