<?php
    $host       = "db4.myarena.ru";      // Адрес сервера базы данных
    $dbname     = "u19978_b08";    // Имя базы данных
    $user       = "u19978_b08";           // Имя пользователя
    $password   = "gS7iI3fP5c";               // Пароль
    $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);

    try {
        $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);
        // установка режима вывода ошибок
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "База данных успешно подключена";
    }
    catch (PDOException $e) {
        echo "Ошибка подключения: " . $e->getMessage();
    }

    $result = $connection->query('SELECT * FROM `product`');
    while($row = $result->fetch( PDO::FETCH_ASSOC )){
        foreach ($row as $key => $value) {
            echo "<td>".$value."</td>";
        }
    }
    

?>