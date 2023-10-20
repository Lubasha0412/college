let a = prompt('Введите логин');


if (a == 'Админ') {
    let b = prompt('Пароль')
} else if (a != 'Админ') {
    alert ("Неверный логин")
}else {
    alert ("Отменено") 
}

if (b == 'Я главный') {
    alert ("Здравствуйте!")
} else if (b != 'Я главный') {
    alert ("Неверный логин")
}else {
    alert ("Отменено") 
}