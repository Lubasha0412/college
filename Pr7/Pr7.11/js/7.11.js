let weekDays = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];

let day = 'Пятница';

for (let i = 0; i < weekDays.length; i++){
    if (weekDays[i] === day){
        console.log('%c' + weekDays[i], 'font-style: italic;');
    } else{
        console.log(weekDays[i]);
    }
}