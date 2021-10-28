import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function notice() {
  error({
    title: false,
    text: 'Введите пожалуйста больше символов для более точного поиска.',
    shadow: true,
    sticker: false,
    delay: 3000,
  });
}
