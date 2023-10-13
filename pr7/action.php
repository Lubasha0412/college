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
    $host       = "db4.myarena.ru";      // Адрес сервера базы данных
    $dbname     = "u19978_b08";    // Имя базы данных
    $user       = "u19978_b08";           // Имя пользователя
    $password   = "gS7iI3fP5c";               // Пароль
    $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);

        $link = '<a href = "./index.php">На главную</a>';

        if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) {
            exit;
            if(empty($_POST['login'])) exit('Не все поля формы заполнены'.'<br>'.$link);
            if(empty($_POST['mail'])) exit('Не все поля формы заполнены'.'<br>'.$link);
            if(empty($_POST['password'])) exit('Не все поля формы заполнены'.'<br>'.$link);
            if(empty($_POST['password1'])) exit('Не все поля формы заполнены'.'<br>'.$link);

            if($_POST['password'] !== $_POST['password1']) exit('Пароли не совпадают'.'<br>'.$link);

            $len = strlen($_POST["password"]);
            if($len < 8) exit ('Минимальное количесво значенией 8. Введите пароль занова'.'<br>'.$link);
        }
        
        $select = $connection->prepare( "SELECT COUNT(`id`) as cnt FROM `user` WHERE `login` = ? OR `mail` = ?;"); 
        $res = $select->execute( [ $_POST['login'], $_POST['mail']  ] );
        $row = $select->fetch(); 
        if(  !$res && !isset($row['cnt']) ) { 
            exit( "Ошибка регистрации… (3)".'<br>'.$link);
        }

        if( $row[0] > 0){
            exit( "Ошибка регистрации… (Пользователь уже существует)".'<br>'.$link);
        }

        $pas_hash = password_hash($_POST['password'], PASSWORD_DEFAULT);

        $data = [$_POST['login'],$_POST['mail'],$pas_hash];

        //Добавление нового пользователя
        $res = $connection->prepare("INSERT INTO `user` (`login`,`mail`,`password`) VALUES (?,?,?);");
        $res = $res->execute($data);

        if ($res) {exit ('Регистрация прошла успешно'.'<br>'.$link);}
    ?>
</body>
</html>