let arr = {
    surname: "Саначева ",
    name: "Любовь ",
    patronymic: "Николаевна",
    ocupation: "Студент",
    degree: "Среднее",
    categry: "Первая",
    education: "Пермский краевой колледж \"ОНИКС\"",
    discipline: ["Информатика","Основы программирования","Инженерная графика",],
    note: "...",
};
let discipline = '';

for (let i = 0; i < arr.discipline.length; i++ ) {
    discipline = discipline + '<li>' + arr.discipline[i] + '</li>';
}

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
$discipline.innerHTML ='<i>' + "Дисциплины: " + '</i>' + '<ul>' + discipline + '</ul>';

let $note = document.querySelector('#note');
$note.innerHTML ='<i>' + "Примечание: " + '</i>' + arr.note;

function Random() {
    return Math.floor(Math.random() * 255);
}

let color = document.querySelectorAll(`li`);

for (let i = 0; i < arr.discipline.length; i++){
    
    let colorRandom = color[i];

    let one  = Random();
    let two  = Random();
    let three  = Random();

    colorRandom.style.color = `rgb(${one}, ${two}, ${three})`;
}



