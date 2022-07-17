let url = ""
let original_url_video = "https://www.youtube.com/watch"
let original_url_playlist = "https://www.youtube.com/playlist"

window.onload = function(){
  chrome.tabs.query({active:true, lastFocusedWindow:true}, tabs => {
    url = tabs[0].url
    if(url.includes(original_url_video) || url.includes(original_url_playlist)){
      if(url.includes(original_url_playlist)){
        document.querySelector('#res').classList.add('d-none')
        document.querySelector("#download").value = `開始下載播放清單`
      }
      else
        get_res(url)
      let s = url.split("m/")[1]
      url = s.split('&')[0]
    }
    else{
      document.querySelector("#main").setAttribute('style', 'display:none')
      document.querySelector("#not").removeAttribute('style')
    }
  })
}
  

document.querySelector("#download").addEventListener('click', function(){newWindow('')})
document.querySelector("#download_res").addEventListener('click', function(){download_res()})

function newWindow(res=0){
  let strWindowFeatures = '\
    menubar=no,\
    location=no,\
    resizable=no,\
    scrollbars=no,\
    status=no,\
    height=200,\
    width=500\
  '
  if(res == '')
    window.open(`./download.html?x=${url}`, '', strWindowFeatures)
  else
    window.open(`./download.html?x=${url}&res=${res}`, '', strWindowFeatures)
}

// chrome.action.onClicked.addListener(() => {
//   console.log(123)
// })

function get_res(url){
  $.ajax({
    url : `https://heroku--html.herokuapp.com/res?url=${url}`,
    type: 'GET',
    success: function(data){
      $.each(data.res, function(i, item){
        let select = document.querySelector("#select")
        let option = document.createElement('option')
        option.innerHTML = item
        option.value = item
        select.append(option)
        if(i == data.res.length-1)
          document.querySelector("#download").value = `直接下載最高畫質(${item})`
      })
    }
  })
}

function download_res(){
  let res = document.querySelector('#select').value
  if(res != '')
    newWindow(res)
  else
    alert('請選擇畫質')
}