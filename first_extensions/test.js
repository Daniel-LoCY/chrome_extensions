let url = ""
let download_url = "http://daniel0422.ddns.net/";
let original_url = "https://www.youtube.com/"

window.onload = function(){
  chrome.tabs.query({active:true, lastFocusedWindow:true}, tabs => {
    url = tabs[0].url
    if(url.includes(original_url)){
      let s = url.split("&")
      url = s[0]
      url = url.replace(original_url, download_url)
    }
    else{
      $("#download").hide()
      $("div").append(`<span>此網站不支援<span>`)
    }
  })
}
  

$("#download").click(function(){
  let strWindowFeatures = `
    menubar=no,
    location=no,
    resizable=no,
    scrollbars=no,
    status=no
  `;
  window.open(url, '', strWindowFeatures)
})

chrome.action.onClicked.addListener(() => {
  console.log(123)
})