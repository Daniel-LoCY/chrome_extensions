// content.js
// Notification.requestPermission().then(function(){
//     if(Notification.permission == 'granted'){
//         new Notification("測試提示視窗")
//     }
// })

// Notification.requestPermission()

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

let keydown = new KeyboardEvent('keydown', {
  view: window,
  bubbles: true,
  cancelable: true
});
let keydownInterval = setInterval(function(){document.dispatchEvent(keydown);}, 1000*60);

// document.addEventListener('keydown', function(){
//   console.log('keydown')
// })

console.log("===Youtube Background Monitor Start===\n\
===Youtube Background Monitor Start===\n\
===Youtube Background Monitor Start===\n\
===Youtube Background Monitor Start===\n\
===Youtube Background Monitor Start===")