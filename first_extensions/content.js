// content.js
// Notification.requestPermission().then(function(){
//     if(Notification.permission == 'granted'){
//         new Notification("測試提示視窗")
//     }
// })

// Notification.requestPermission()

function close_stop_window(){
    let stop_window = document.getElementsByTagName("yt-confirm-dialog-renderer")[0] //停止視窗
    if(stop_window != undefined){
        if(stop_window != undefined){
            for(let i=0; i<stop_window.length; i++){
                if(stop_window.getElementsByTagName("yt-formatted-string")[i].innerHTML == "是"){
                    stop_window.getElementsByTagName("yt-formatted-string")[i].click()
                    console.log("Close")
                }
            }
            
            // let btn = stop_window.getElementsByTagName("yt-formatted-string")[0] //確認按鈕
            // btn.click()
        }
    }
}

setInterval(function(){ close_stop_window() }, 500)