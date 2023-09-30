<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pr6</title>
</head>
<body>
    <?php 
        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {
            if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) exit;

                if($_POST['age']<0) exit ("Ваш возраст введено отрицательное или НЕ числовое значение");

                if(empty($_POST['age'])) exit('Не все поля формы заполнены');
                if(empty($_POST['name'])) exit('Не все поля формы заполнены');
                
            echo 'Здравствуйте, '.htmlspecialchars($_POST['name']).'. <br>';
            echo 'Вам '.(int)$_POST['age'].' лет.'.'<br>';
        }
    ?>
</body>
</html>