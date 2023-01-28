import Player from '@vimeo/player';
import { throttle } from 'lodash';

// Знаходження на сторінці айфрейма
const iframe = document.querySelector('iframe');

// Створення екземпляра
const player = new Player(iframe);

// Відстежування події timeupdate - оновлення часу відтворення
player.on('timeupdate', throttle(e => {

  // Збереження часу відтворення у локальне сховище
  localStorage.setItem('videoplayer-current-time', e.seconds);
}, 1000) // Час відтворення оновлюється у сховищі не частіше, ніж раз на секунду
);

// Відновлення відтворення зі збереженої позиції під час перезавантаження сторінки.
// Якщо пустий localStorage - getItem повертає null. Засетиться 0.
player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0)

// Діма Берестень