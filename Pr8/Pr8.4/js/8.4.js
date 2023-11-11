let arr = {
    surname: "Саначева ",
    name: "Любовь ",
    patronymic: "Николаевна",
    ocupation: "Студент",
    degree: "Среднее",
    categry: "Первая",
    education: "Пермский краевой колледж \"ОНИКС\"",
    discipline: "Информатика",
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
$discipline.innerHTML ='<i>' + "Преподаваемая дисциплина: " + '</i>' + arr.discipline + '<br>' + '<br>';

let $note = document.querySelector('#note');
$note.innerHTML ='<i>' + "Примечание: " + '</i>' + arr.note;