<?php
$servername = "localhost";
$username = "root";
$password = "@Qel142536";
$dbname = "webwwizards_solution";

// Criar conexão
$conn = new mysqli($servername, $username, $password, $dbname);

// Checar conexão
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>