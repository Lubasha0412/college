<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pr7</title>
    <style>
        .error {color: #FF0000;}
    </style>
</head>
<body>
    <h2>Для регистрации заполните форму ниже</h2>
    <p><span class="error">* обязательное поле</span></p>

    <form action="action.php" method="post">
        <p>Логин:<span class="error">* <input type="text" name="login" required></p>
        <p>Почта:<span class="error">* <input type="email" name="mail" required></p>
        <p>Пароль:<span class="error">* <input type="password" name="password" minlength="8" required></p>
        <p>Подтверждение пароля:<span class="error">* <input type="password" name="password1" required></p>
        <p><input type="submit" value="Зарегистрироваться"></p> 
    </form>
</body>
</html>