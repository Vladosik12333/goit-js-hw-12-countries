import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function notice(msg) {
  error({
    title: false,
    text: msg,
    shadow: true,
    sticker: false,
  });
}
