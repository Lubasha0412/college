/*
Задание:
Проанализируйте код и выделите его основные части.
Создайте функцию init, которую следует вызвать в конце скрипта для инициализации работы всего кода.
Разделите код на логические блоки, чтобы каждая функция отвечала за определенное действие.
Удалите дублирующийся код. Если есть необходимость сохранить какой-то кусок кода в переменной, то сохраняйте его в переменной.
Замените все объявления переменных с использованием оператора var на наиболее подходящие операторы.
Исправленный код, должен работать без ошибок и выполнять заложенную в него первоначальную логику.
*/


// Открытие модального окна
function initShowModal(images) {
    // Добавляем обработчик события клика на каждое изображение
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', function(event) {

            var image = event.target.src;

            var modal = document.querySelector('.modal-gallery');
            if(modal !== null) {
                modal.querySelector('img').src = image;

                modal.classList.add('is-active');
                document.querySelector('html').classList.add('is-clipped');

                var image = event.target;
                if(image.getAttribute('alt')) {
                    modal.querySelector('.image-subtitle').textContent = image.getAttribute('alt');
                    modal.querySelector('img').setAttribute('alt', image.getAttribute('alt'));
                    modal.querySelector('.image-subtitle').classList.remove('is-hidden');
                } else {
                    modal.querySelector('.image-subtitle').classList.add('is-hidden');
                    modal.querySelector('img').setAttribute('alt','');
                }
            }

        });
    }
}

// Закрытие модального окна
function initCloseModal() {
    const modalGallery = document.querySelector('.modal-gallery');

    const closeModal = document.querySelector('.modal-gallery .modal-close');
    const modalBack = document.querySelector('.modal-gallery .modal-background');

    function closeModal1() {
        modalGallery.classList.remove('is-active');
        document.querySelector('html').classList.remove('is-clipped');
    }

    closeModal.addEventListener('click', closeModal1);
    modalBack.addEventListener('click', closeModal1);
}

// Получаем все изображения на странице
var images = document.querySelectorAll('img');

function scroll(){
// Проверяем, осталось ли до конца страницы менее 15%
if ((document.documentElement.scrollTop + document.documentElement.clientHeight) / document.documentElement.scrollHeight * 100 > 85) {
    // Добавляем новые блоки в конец страницы
    for (let i = 0; i < 3; i++) {
        var columns = document.querySelector('.tile-content .columns');
        columns.append(document.querySelector('#tile-image').content.cloneNode(true));

        var addedBlock = columns.querySelector('div:last-child');
        var templateImage = images[Math.floor(Math.random()*images.length)];
        addedBlock.querySelector('img').src = templateImage.src;
        if(templateImage.getAttribute('alt'))
            addedBlock.querySelector('img').setAttribute('alt', templateImage.getAttribute('alt'));

        addedBlock.setAttribute('class', images[Math.floor(Math.random()*images.length)].closest('div').getAttribute('class'));

        }
    }
}


document.addEventListener('scroll', function () {
// Проверяем, осталось ли до конца страницы менее 15%
    if ((document.documentElement.scrollTop + document.documentElement.clientHeight) / document.documentElement.scrollHeight * 100 > 85) {
        // Добавляем новые блоки в конец страницы
        for (let i = 0; i < 3; i++) {
            var columns = document.querySelector('.tile-content .columns');
            columns.append(document.querySelector('#tile-image').content.cloneNode(true));

            var addedBlock = columns.querySelector('div:last-child');
            var templateImage = images[Math.floor(Math.random()*images.length)];
            addedBlock.querySelector('img').src = templateImage.src;
            if(templateImage.getAttribute('alt'))
                addedBlock.querySelector('img').setAttribute('alt', templateImage.getAttribute('alt'));

            addedBlock.setAttribute('class', images[Math.floor(Math.random()*images.length)].closest('div').getAttribute('class'));

            addedBlock.querySelector('img').addEventListener('click', function(event) {

                var image = event.target.src;
        
                var modal = document.querySelector('.modal-gallery');
                if(modal !== null) {
                    modal.querySelector('img').src = image;
        
                    modal.classList.add('is-active');
                    document.querySelector('html').classList.add('is-clipped');
        
                    var image = event.target;
                    if(image.getAttribute('alt')) {
                        modal.querySelector('.image-subtitle').textContent = image.getAttribute('alt');
                        modal.querySelector('img').setAttribute('alt', image.getAttribute('alt'));
                        modal.querySelector('.image-subtitle').classList.remove('is-hidden');
                    } else {
                        modal.querySelector('.image-subtitle').classList.add('is-hidden');
                        modal.querySelector('img').setAttribute('alt','');
                    }
                }
        
            });

            console.log('Добавлено изображение');
        }
    }
});

// Инициализация...
function init() {
// Получаем все изображения на странице
let images = document.querySelectorAll('img');

    initShowModal(images);
    initCloseModal();
    scroll();
}

init();