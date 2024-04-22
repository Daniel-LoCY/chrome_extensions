function skip_ad() {
  let container = document.querySelector('#container.style-scope.ytd-player');
  // console.log('container:', container);
  if (container) {
    let div = container.querySelector('div');
      // console.log(div);
    if (div) {
      let classes = div.classList;
      // console.log('classes:', classes);
      // console.log('is_ad:', is_ad);
      if (classes.contains('ad-showing')) {
        let video = container.querySelector('video');
        if (video) {
          try {
            video.currentTime = Math.ceil(video.duration);
          } catch (e) {
            // console.log('Error:', e);
          }
          // console.log('Ad skipped');
          let skip_button = container.querySelector('div.ytp-skip-ad-button__text');
          if (skip_button) {
            skip_button.click();
            // console.log('Ad skipped by clicking skip button');
          }
        }
      }
    }
  }

  let continue_confirm_btn = document.querySelector('#main.style-scope.yt-confirm-dialog-renderer')
  if (continue_confirm_btn) {
    let btn = continue_confirm_btn.querySelector('button.yt-spec-button-shape-next');
    if (btn) {
      btn.click();
      continue_confirm_btn.remove();
    }
  }
}

window.setInterval(skip_ad, 1000);

let keydown = new KeyboardEvent('keydown', {
  view: window,
  bubbles: true,
  cancelable: true
});
window.setInterval(function(){document.dispatchEvent(keydown);}, 1000*60);