<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pr8</title>
</head>
<body>
    <?php 
        $host       = "db4.myarena.ru";      // Адрес сервера базы данных
        $dbname     = "u19978_b08";    // Имя базы данных
        $user       = "u19978_b08";           // Имя пользователя
        $password   = "gS7iI3fP5c";               // Пароль
        $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);

        $link = '<a href = "./index.php">На главную</a>';

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if(empty($_POST['login'])) exit('Не все поля формы заполнены'.'<br>'.$link);
            if(empty($_POST['password'])) exit('Не все поля формы заполнены'.'<br>'.$link);
        }
        
        $userLogin=$_POST['login'];

        $stmt = $connection->prepare("SELECT * FROM `user` WHERE `login` = ? or `mail` = ?");
        $stmt->execute([$userLogin, $userLogin]);
        if (!$stmt->rowCount()) {
            exit('Пользователь с такими данными не зарегистрирован'.'<br>'.$link);
            die;
        }
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        // проверяем пароль
        $userLogin = $_POST['login'];
        $userPassword = $_POST['password'];
        
        $select = $connection->prepare("SELECT `password` FROM `user` WHERE `login` = ? or `email` = ?;");
        $select->execute([$userLogin, $userLogin]);
        $row = $select->fetch();    
        
            exit('Пароль неверен'.'<br>'.$link);
        }
        else {
            exit('Вход выполнен успешно'.'<br>'.$link); 
        }
    ?>
</body>
</html>