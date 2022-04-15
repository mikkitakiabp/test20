// при клике по кнопке скрипт запустит код
button.onclick = function () {
    // если фон кнопки красный
    if (button.style.backgroundColor == 'red') {
      // изменим его на белый, а текст сделаем чёрным
      button.style.backgroundColor = 'white';
      button.style.color = 'black';
    } else {
      // иначе сделаем фон чёрным, а текст белым
  button.style.backgroundColor = 'black';
      button.style.color = 'white';
    }
  }
  