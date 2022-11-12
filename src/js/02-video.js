import Vimeo from '@vimeo/player';
import _throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
console.log(iframe);

const player = new Vimeo(iframe);


player.on('loaded', () => {
  const currentTime = localStorage.getItem(KEY) || 0;
  player.setCurrentTime(currentTime);
});


player.on(
  'timeupdate',
  _throttle(({ seconds }) => {
    localStorage.setItem(KEY, seconds);
  }, 1000)
);




