let weekDays = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];

for (let i = 0; i < weekDays.length; i++){
    if (i === 5 || i === 6){
        console.log('%c' + weekDays[i], 'font-weight: bold;');
    } else{
        console.log(weekDays[i]);
    }
}