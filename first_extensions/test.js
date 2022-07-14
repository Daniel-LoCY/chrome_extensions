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
      $("#download").hide()
      $("div").append(`此頁面不支援`)
    }
  })
}
  

$("#download").click(function(){
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
})

// chrome.action.onClicked.addListener(() => {
//   console.log(123)
// })