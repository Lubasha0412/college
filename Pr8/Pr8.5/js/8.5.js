let arr = {
    surname: "Саначева ",
    name: "Любовь ",
    patronymic: "Николаевна",
    ocupation: "Студент",
    degree: "Среднее",
    categry: "Первая",
    education: "Пермский краевой колледж \"ОНИКС\"",
    discipline: "Информатика",
    discipline1: "Основы программирования",
    discipline2: "Инженерная графика",
    note: "...",
};

let $name = document.querySelector('#name');
$name.innerHTML ='<h3>' + arr.surname + arr.name + arr.patronymic + '</h3>';

let $ocupation = document.querySelector('#ocupation');
$ocupation.innerHTML ='<i>' + "Должность: " + '</i>' + arr.ocupation + '<br>' + '<br>';

let $degree = document.querySelector('#degree');
$degree.innerHTML ='<i>' + "Уровень образования: " + '</i>' + arr.degree + '<br>' + '<br>';

let $categry = document.querySelector('#categry');
$categry.innerHTML ='<i>' + "Категория: " + '</i>' + arr.categry + '<br>' + '<br>';

let $education = document.querySelector('#education');
$education.innerHTML ='<i>' + "Образование: " + '</i>' + arr.education + '<br>' + '<br>';

let $discipline = document.querySelector('#discipline');
$discipline.innerHTML ='<i>' + "Дисциплины: " + '</i>' + '<ul>' +
    '<li>' + arr.discipline + '</li>' +
    '<li>' + arr.discipline1 + '</li>' +
    '<li>' + arr.discipline2 + '</li>' + '</ul>';

let $note = document.querySelector('#note');
$note.innerHTML ='<i>' + "Примечание: " + '</i>' + arr.note;