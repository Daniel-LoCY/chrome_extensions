let url = ""
let original_url_video = "https://www.youtube.com/watch"
let original_url_playlist = "https://www.youtube.com/playlist"

window.onload = function(){
  chrome.tabs.query({active:true, lastFocusedWindow:true}, tabs => {
    url = tabs[0].url
    if(url.includes(original_url_video) || url.includes(original_url_playlist)){
      let s = url.split("m/")[1]
      url = s.split('&')[0]
    }
    else{
      document.querySelector("#download").setAttribute('style', 'display:none')
      document.querySelector("div").innerHTML += `<pre>此頁面不支援</pre>`
    }
  })
}
  

document.querySelector("#download").addEventListener('click', newWindow)

function newWindow(){
  let strWindowFeatures = '\
    menubar=no,\
    location=no,\
    resizable=no,\
    scrollbars=no,\
    status=no,\
    height=200,\
    width=500\
  '
  window.open('./download.html?x='+url, '', strWindowFeatures)
}

// chrome.action.onClicked.addListener(() => {
//   console.log(123)
// })