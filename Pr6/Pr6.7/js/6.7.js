let month = prompt("Введите число от 1 до 12");

    if (month <=2) {
        alert ("Пора года: Зима");
    }else if (month >=3 && month <= 5){
        alert ("Пора года: Весна");
    }else if (month >=6 && month <= 8){
        alert ("Пора года: Лето");
    } else if (month >= 9 && month <= 11) {
        alert ("Пора года: Осень");
    }else {
        alert ("Пора года: Зима");
    }