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
        session_start ();  

        $host       = "db4.myarena.ru";      // Адрес сервера базы данных
        $dbname     = "u19978_b08";    // Имя базы данных
        $user       = "u19978_b08";           // Имя пользователя
        $password   = "gS7iI3fP5c";               // Пароль
        $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);

        $link = '<a href = "./index.php">На главную</a>';
        $link1 = '<a href = "./result.php">Проверить ссесию</a>';

        if( $_SERVER['REQUEST_METHOD'] !== 'POST' ) {
            exit;

            if(empty($_POST['login'])) exit('Не все поля формы заполнены'.'<br>'.$link);
            if(empty($_POST['password'])) exit('Не все поля формы заполнены'.'<br>'.$link);
        }

        $_SESSION ["login"]=$_POST['login']; 
        
        $userLogin=$_POST['login'];

        $stmt = $connection->prepare("SELECT * FROM `user` WHERE `login` = ? or `mail` = ?");
        $stmt->execute([$userLogin, $userLogin]);
        if (!$stmt->rowCount()) {
            exit('Пользователь с такими данными не зарегистрирован'.'<br>'.$link);
            die;
        }
        
        $userPassword = $_POST['password'];

        // проверяем пароль
        if (password_verify($_POST['password'], $userPassword)) {
            if (password_needs_rehash($userPassword, PASSWORD_DEFAULT)) {
                $newHash = password_hash($_POST['password'], PASSWORD_DEFAULT);
                $stmt = $connection->prepare('UPDATE `user` SET `password` = :password WHERE `login` = :login');
                 $stmt->execute(['login' => $_POST['login'],'password' => $newHash,]);
            }     
        
            exit('Пароль неверен'.'<br>'.$link);
        }
        else {
            exit('Вход выполнен успешно'.'<br>'.$link1); 
        }
    ?>
</body>
</html>