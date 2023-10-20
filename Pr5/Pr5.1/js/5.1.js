let a = prompt('Введите логин');


if (a == 'Админ') {
    let b = prompt('Пароль')
        if (b == 'Я главный') {
            alert ("Здравствуйте!")
        } else  if (b == '' || b ==null){
            alert ("Отменено")
        }
        else {
            alert ("Неверный пароль")
        } 
} else  if (a=='' || a==null){
    alert ("Отменено")
}
else {
    alert ("Неверный логин")
}
