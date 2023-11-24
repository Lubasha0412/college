class Menu {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          elem.innerHTML = "Нажата первая кнопка";
        break;
        case 'mouseup':
          elem.innerHTML = "Нажми меня";
        break;
      }
    }
  }

  let menu = new Menu();
  elem.addEventListener('mousedown', menu);
  elem.addEventListener('mouseup', menu);

  class Menu1 {
    handleEvent(event) {
      switch(event.type) {
        case 'mousedown':
          elem1.innerHTML = "Нажата вторая кнопка";
          break;
        case 'mouseup':
          elem1.innerHTML = "Нажми меня";
        break;
      }
    }
  }

  let menu1 = new Menu1();
  elem1.addEventListener('mousedown', menu1);
  elem1.addEventListener('mouseup', menu1);
