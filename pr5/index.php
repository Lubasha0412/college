<?php
    $host       = "db4.myarena.ru";      // Адрес сервера базы данных
    $dbname     = "u19978_b08";    // Имя базы данных
    $user       = "u19978_b08";           // Имя пользователя
    $password   = "gS7iI3fP5c";               // Пароль
    $connection = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $password);

    try {
        $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "База данных успешно подключена";
    }
    catch (PDOException $e) {
        echo "Ошибка подключения: " . $e->getMessage();
    }

    $result = $connection->query('SELECT * FROM `product`');

    if ($result) {

        if ($result->rowCount() == 0) {
            echo "Таблица пустая";
        } 
        
        else {
        echo '<table cellspacing="1" bgcolor="#000000">';
            echo '<tr bgcolor="#gren">';
            for ($i=0; $i < $result ->columnCount (); $i++)
                {$column=$result ->getColumnMeta($i);
                echo "<th>{$column['name']}</th>";
                }
            echo '</tr>';

        while($row = $result->fetch( PDO::FETCH_ASSOC )){
            echo '<tr bgcolor="#ffffff">';
                foreach ($row as $key => $value) {
                echo '<td >'.$value.'</td>';
            }
        echo '</tr>';
        } 
        echo '</table>';} 
        }

    else {
        echo 'Запрос выполнен с ошибкой';
    }
?>   
    

?>