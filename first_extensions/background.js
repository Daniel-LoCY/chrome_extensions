console.log("Background Js")
chrome.action.onClicked.addListener((tab) => {
    // chrome.scripting.executeScript({
    //   target: {tabId: tab.id},
    //   files: ['content.js']
    // });
    alert(123)
});