let url = ""
let original_url_video = "https://www.youtube.com/watch"
let original_url_playlist = "https://www.youtube.com/playlist"

let api_host = 'https://flaskapi.herokuapp.com'

const download = () => {
  chrome.tabs.query({active:true, lastFocusedWindow:true}, tabs => {
    url = tabs[0].url
    if(url.includes(original_url_video) || url.includes(original_url_playlist)){
      if(url.includes(original_url_playlist)){
        document.querySelector('#res').classList.add('d-none')
        document.querySelector("#download").value = `開始下載播放清單`
        // get_size(url)
        get_res('', '1')
      }
      else{
        // get_size(url)
        get_res(url)
      }
      let s = url.split("m/")[1]
      url = s.split('&')[0]
    }
    else{
      document.querySelector("#main").classList.add('d-none')
      document.querySelector("#not").classList.remove('d-none')
    }
  })
}

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
  let email = localStorage.getItem('email')
  let open_url = `./download.html?x=${url}`
  if(res != ''){
    open_url += `&res=${res}`
  }
  window.open(open_url, '', strWindowFeatures)
}

const enable_button =  () => {
  document.querySelector("#download").addEventListener('click', function(){newWindow('')})
  document.querySelector("#download_res").addEventListener('click', function(){download_res()})
  let button = document.querySelectorAll('input[type=button]')
  button.forEach(e => {
    e.disabled = false
  })
}

function get_res(url, type=''){
  if(type == ''){
    $.ajax({
      url : `${api_host}/res?url=${url}`,
      type: 'GET',
      success: function(data){
        if(data.res != 'error'){
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
        else{
          alert('發生錯誤')
          return
        }
      }
    }).then(enable_button())
  }
  else{enable_button()}
}

function download_res(){
  let res = document.querySelector('#select').value
  if(res != '')
    newWindow(res)
  else
    alert('請選擇畫質')
}

function load(){
  if(localStorage.getItem('email') == null){
    // document.querySelector('#main').setAttribute('style', 'display: none')
    let input = document.createElement('input')
    input.placeholder = '請輸入電子郵件'
    input.setAttribute('id', 'email_in')
    document.querySelector('body').append(input)
    document.addEventListener('keydown', (event) => { 
      if(event.key == 'Enter'){
        let max = Number.MAX_SAFE_INTEGER
        let email = document.querySelector('#email_in').value
        // document.cookie = `email=${val}; path=/; max-age=${max}`
        localStorage.setItem('email', email)
        document.querySelector('#email_in').remove()
        download()
      }  
    })
  }
  else
    download()
  document.querySelector('#main').classList.remove('d-none')
}

window.onload = () => {
  // load()
  document.querySelector('#main').classList.remove('d-none')
  // let button = document.querySelectorAll('input[type=button]')
  // button.forEach(e => {
  //   e.disabled = true
  // })
  document.querySelector('#download').disabled = true
  document.querySelector('#download_res').disabled = true
  download()
}

// function get_size(url, _async=true){
//     $.ajax({
//       url: `${api_host}/get_size?url=${url}`,
//       type: 'GET',
//       // async: _async,
//       success: function(data){
//         if(data.size > 360){
//           localStorage.setItem('need_email', true)
//         }
//         else{
//           localStorage.setItem('need_email', false)
//         }
//       }
//     }).then(() => {
//       if(_async==true)get_res(url)
//       document.querySelector("#download").addEventListener('click', function(){newWindow('')})
//       document.querySelector("#download_res").addEventListener('click', function(){download_res()})
//       let button = document.querySelectorAll('input[type=button]')
//       button.forEach(e => {
//         e.disabled = false
//       })
//     })
// }