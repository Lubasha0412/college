const students = [
    'Валаускас Робертас',
    'Ефланов Дмитрий',
    'Лузина Алена',
    'Ожегов Николай',
    'Перин Даниил',
    'Пятериков Матвей',
    'Саначева Любовь',
    'Томилов Дмитрий',
    'Фадеева Алена',
    'Шайбель Артем',
    'Ярков Дмитрий',
    'Сединина Алена',
];

for (let i = 0 ; i<students.length ; i++  ) {
    if (i<3){
    console.log(i, students[i], 5);
}
   else {
    console.log(i, students[i]);    
   }
}
