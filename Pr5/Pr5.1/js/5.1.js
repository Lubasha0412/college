let log = prompt('Введите логин');


if (log == 'Админ') {
} else  if (log=='' || log==null){
    alert ("Отменено")
}
else {
    alert ("Неверный логин")
}

let password = prompt('Введите пароль');

if ( password == 'Я главный') {
    alert ("Здравствуйте!")
} else  if (password  == '' || password == null){
    alert ("Отменено")
}
else {
    alert ("Неверный пароль")
}
