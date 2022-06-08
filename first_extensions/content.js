// content.js
// Notification.requestPermission().then(function(){
//     if(Notification.permission == 'granted'){
//         new Notification("測試提示視窗")
//     }
// })

// Notification.requestPermission()

console.log("Background Start")

function close_stop_window(){
    let stop_window = document.getElementsByTagName("yt-confirm-dialog-renderer")[0] //停止視窗
    if(stop_window != undefined){
        let s = stop_window.getElementsByTagName("yt-formatted-string")
        for(let i=0; i<s.length; i++){
            if(s[i].innerHTML == "是"){
                s[i].click()
                document.getElementsByTagName("ytd-popup-container")[0].innerHTML = ""
                console.log("Close")
            }
        }
        
        // let btn = stop_window.getElementsByTagName("yt-formatted-string")[0] //確認按鈕
        // btn.click()
    }
}

setInterval(function(){ close_stop_window() }, 1000)

{/* <yt-confirm-dialog-renderer dialog="" class="style-scope ytd-popup-container" tabindex="-1"><!--css-build:shady--><div id="spinner" class="style-scope yt-confirm-dialog-renderer" hidden="">
  <tp-yt-paper-spinner class="style-scope yt-confirm-dialog-renderer" aria-hidden="true"><!--css-build:shady--><div id="spinnerContainer" class="  style-scope tp-yt-paper-spinner"><div class="spinner-layer layer-1 style-scope tp-yt-paper-spinner"><div class="circle-clipper left style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div><div class="circle-clipper right style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div></div><div class="spinner-layer layer-2 style-scope tp-yt-paper-spinner"><div class="circle-clipper left style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div><div class="circle-clipper right style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div></div><div class="spinner-layer layer-3 style-scope tp-yt-paper-spinner"><div class="circle-clipper left style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div><div class="circle-clipper right style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div></div><div class="spinner-layer layer-4 style-scope tp-yt-paper-spinner"><div class="circle-clipper left style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div><div class="circle-clipper right style-scope tp-yt-paper-spinner"><div class="circle style-scope tp-yt-paper-spinner"></div></div></div></div></tp-yt-paper-spinner>
</div>
<yt-img-shadow id="thumbnail" notify-on-loaded="" width="256" class="style-scope yt-confirm-dialog-renderer no-transition" hidden=""><!--css-build:shady--><img id="img" class="style-scope yt-img-shadow" alt="" width="256"></yt-img-shadow>
<div id="main" class="style-scope yt-confirm-dialog-renderer" style="width: 100%;">
  <yt-img-shadow id="header-image" notify-on-loaded="" class="style-scope yt-confirm-dialog-renderer no-transition" hidden=""><!--css-build:shady--><img id="img" class="style-scope yt-img-shadow" alt=""></yt-img-shadow>
  <yt-formatted-string id="title" class="style-scope yt-confirm-dialog-renderer" hidden=""><!--css-build:shady--></yt-formatted-string>
  <tp-yt-paper-dialog-scrollable id="scroller" class="style-scope yt-confirm-dialog-renderer no-padding scrolled-to-bottom"><!--css-build:shady--><div id="scrollable" class="scrollable style-scope tp-yt-paper-dialog-scrollable" style="max-height: none;">
  
    
      <yt-formatted-string class="line-text style-scope yt-confirm-dialog-renderer" respect-html-dir="" split-lines="">影片已暫停，要繼續觀賞嗎？</yt-formatted-string>
    <dom-repeat class="style-scope yt-confirm-dialog-renderer"><template is="dom-repeat"></template></dom-repeat>
    <div id="checkbox-container" class="style-scope yt-confirm-dialog-renderer" hidden=""></div>
  
</div>
</tp-yt-paper-dialog-scrollable>
  <div class="buttons style-scope yt-confirm-dialog-renderer">
    <yt-button-renderer id="cancel-button" dialog-dismiss="" class="style-scope yt-confirm-dialog-renderer" use-keyboard-focused="" hidden=""></yt-button-renderer>
    <yt-button-renderer id="checkbox-enabled-confirm-button" dialog-confirm="" class="style-scope yt-confirm-dialog-renderer" hidden="" use-keyboard-focused=""></yt-button-renderer>
    <yt-button-renderer id="confirm-button" class="style-scope yt-confirm-dialog-renderer style-blue-text size-default" use-keyboard-focused="" dialog-confirm="" is-paper-button=""><a class="yt-simple-endpoint style-scope yt-button-renderer" tabindex="-1"><tp-yt-paper-button id="button" class="style-scope yt-button-renderer style-blue-text size-default" style-target="host" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="是"><!--css-build:shady--><yt-formatted-string id="text" class="style-scope yt-button-renderer style-blue-text size-default">是</yt-formatted-string></tp-yt-paper-button></a></yt-button-renderer>
  </div>
</div>
</yt-confirm-dialog-renderer> */}