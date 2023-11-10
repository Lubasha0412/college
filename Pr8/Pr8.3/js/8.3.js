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

document.write('<h3>' + arr.surname  + arr.name + arr.patronymic + '</h3>' );

document.write('<i>Должность: </i>' + arr.ocupation + '<br>' + '<br>');

document.write('<i>Уровень образования: </i>' + arr.degree + '<br>' + '<br>');

document.write('<i>Категория: </i>' + arr.categry + '<br>' + '<br>');

document.write('<i>Образование: </i>' + arr.education + '<br>' + '<br>');

document.write('<i>Преподаваемая дисциплина: </i>' + arr.discipline + '<br>' + '<br>');

document.write('<i>Примечание: </i>' + arr.note);