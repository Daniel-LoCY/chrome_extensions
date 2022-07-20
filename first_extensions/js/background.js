chrome.runtime.onInstalled.addListener(async () => {
    let url = chrome.runtime.getURL("onInstalled.html")
    await chrome.tabs.create({url})
})