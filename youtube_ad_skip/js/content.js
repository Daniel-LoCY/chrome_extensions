ad_playing = false;

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
            if (!ad_playing) {
              setTimeout(() => {
                if (classes.contains('ad-showing')){
                  // video.playbackRate = 16;
                  video.currentTime = Math.ceil(video.duration);
                }
                for (let i = 0; i < 10; i++) {
                  let skip_button = container.querySelector('div.ytp-skip-ad-button__text');
                  if (skip_button) {
                    skip_button.click();
                    // console.log('Ad skipped by clicking skip button');
                  }
                }
                ad_playing = false;
              }, 5500);
            }
          } catch (e) {
            // console.log('Error:', e);
          }
          ad_playing = true;
          // console.log('Ad skipped');
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
      for (let i = 0; i < 10; i++) {
        document.querySelector('html').click();
      }
    }
  }

  let error = document.querySelector('ytd-enforcement-message-view-model.style-scope.yt-playability-error-supported-renderers');
  if (error) {
    // refresh page
    location.reload();
  }
}

window.setInterval(skip_ad, 500);

let keydown = new KeyboardEvent('keydown', {
  view: window,
  bubbles: true,
  cancelable: true
});
window.setInterval(function(){document.dispatchEvent(keydown);}, 1000*60);