<?php
    $from = $_GET['from'];
    $to = $_GET['to'];
    // Connect to the MySQL database
    $host = "localhost";
    $user = "username";
    $password = "password";
    $dbname = "database_name";
    $conn = mysqli_connect($host, $user, $password, $dbname);

    // Retrieve the conversion rate from the database
    $query = "SELECT rate FROM conversion_rates WHERE from_unit='$from' AND to_unit='$to'";
    $result = mysqli_query($conn, $query);
    $row = mysqli_fetch_assoc($result);
    $rate = $row['rate'];
    echo $rate;
?>
