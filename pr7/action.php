<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pr7</title>
</head>
<body>
    <?php 
        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if(empty($_POST['login'])) exit('Не все поля формы заполнены');
            if(empty($_POST['mail'])) exit('Не все поля формы заполнены');
            if(empty($_POST['password'])) exit('Не все поля формы заполнены');
            if(empty($_POST['password1'])) exit('Не все поля формы заполнены');

            if($_POST['password'] !== $_POST['password1']) exit('Пароли не совпадают');

            include("index.php");
            $len = strlen($_POST["password"]);
            if($len < 8) exit ('Минимальное количесво значенией 8. Введите пароль занова');
            else{
            echo 'Здравствуйте, '.htmlspecialchars($_POST['login']).'. <br>';
            echo 'Ваш акаун создан';}
        }
    ?>
</body>
</html>