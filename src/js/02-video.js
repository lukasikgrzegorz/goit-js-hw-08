import Vimeo from '@vimeo/player';
import _throttle from 'lodash.throttle';

const KEY = 'videoplayer-current-time';

const player = new Vimeo('vimeo-player');

//Chcek local storage

player.on('loaded', () => {
  const currentTime = localStorage.getItem(KEY) || 0;
  player.setCurrentTime(currentTime);
});

//Save actual time

player.on(
  'timeupdate',
  _throttle(({ seconds }) => {
    localStorage.setItem(KEY, seconds);
  }, 1000)
);




