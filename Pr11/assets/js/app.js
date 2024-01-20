function initCloseBtn(trigger, modal) {
    trigger.addEventListener('click', () => {
        modal.classList.remove('is-active');
                document.querySelector('html').classList.remove('is-clipped');
    });
}
  
function initCloseModal()  {
  const modalGallery = document.querySelector('.modal-gallery');
  const closeModalBtn = document.querySelector('.modal-gallery .modal-close');
  const closeModalBack = document.querySelector('.modal-gallery .modal-background');
  
  initCloseBtn(closeModalBtn, modalGallery);
  initCloseBtn(closeModalBack, modalGallery);
}
  
function initImagesClick(images) {
  // Добавляем обработчик события клика на каждое изображение
  for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function(event) {
    
      const image = event.target.src;
    
      const modal = document.querySelector('.modal-gallery');
      if(modal !== null) {
      modal.querySelector('img').src = image;
    
      modal.classList.add('is-active');
      document.querySelector('html').classList.add('is-clipped');
    
      const img = event.target;
      const modalImg = modal.querySelector('img');
      const modalImgSubtitle = modal.querySelector('.image-subtitle');

        if(img.getAttribute('alt')) {
          modalImgSubtitle.textContent = img.getAttribute('alt');
          modalImg.setAttribute('alt', img.getAttribute('alt'));
          modalImgSubtitle.classList.remove('is-hidden');
        } else {
          modalImgSubtitle.classList.add('is-hidden');
          modalImg.setAttribute('alt','');
                }
      }
    
    });
  }
}
  
function skroll(images) {
  // Проверяем, осталось ли до конца страницы менее 15%
  if ((document.documentElement.scrollTop + document.documentElement.clientHeight) / document.documentElement.scrollHeight * 100 > 85) {
    // Добавляем новые блоки в конец страницы
    for (let i = 0; i < 15; i++) {
      let columns = document.querySelector('.tile-content .columns');
      columns.append(document.querySelector('#tile-image').content.cloneNode(true));
    
      let addedBlock = columns.querySelector('div:last-child');
      let templateImage = images[Math.floor(Math.random()*images.length)];
      
      addedBlock.querySelector('img').src = templateImage.src;
      addedBlock.querySelector('img').setAttribute('alt', templateImage.getAttribute('alt'));
    
      addedBlock.setAttribute('class', images[Math.floor(Math.random()*images.length)].closest('div').getAttribute('class'));
  
      initImagesClick([addedBlock.querySelector('img')]);
          
      console.log('Добавлено изображение');
    }
  }
}
  
function init() {
  // Получаем все изображения на странице
  const images = document.querySelectorAll('img');
    
  initCloseModal();
  initImagesClick(images); // Передаем амассив картинок....
  skroll(images);
  
  document.addEventListener('scroll', function () {
    skroll(images);
  });
}
  
init();