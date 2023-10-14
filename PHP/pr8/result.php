<?php
    $link = '<a href = "./index.php">На главную</a>'; 

    session_start (); 
    echo $_SESSION ["login"].'<br>'."Вы уже авторизовались".'<br>'.$link; 
?>
