<?php

if (isset($_POST['name'])) {

    // Database connection details
    $server = "localhost";
    $username = "root";
    $password = "";
    $dbname = "test"; 
    // $port = 3307;
    // Create a connection
    $con = mysqli_connect($server, $username, $password, $dbname);

    // Check if the connection was successful
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Get form data
    $name = $_POST['name'];
    $age = $_POST['age'];
    $email = $_POST['email'];
    $gender = $_POST['gender'];
    $description = $_POST['description'];

    // SQL query to insert data into the database
    $sql = "INSERT INTO trips (name, age, email, gender, description) 
            VALUES ('$name', '$age', '$email', '$gender', '$description')";

    // Execute the query
    if (mysqli_query($con, $sql)) {
        header("Location: index.php?success=true");
        exit();
    } else {
        echo "Error: " . mysqli_error($con);
    }   

    // Close the connection
    mysqli_close($con);
}

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
<div class="container">
    <h1>Trip Form</h1>
    <form id="tripForm" method="post">
        <label for="name">Name:</label><br>
        <input type="text" name="name" id="name"> <br>  
        <label for="age">Age:</label><br>
        <input type="text" name="age" id="age"><br>   
        <label for="email">Email:</label><br>
        <input type="email" name="email" id="email"> <br> 
        <label for="gender">Gender:</label><br>
        <input type="text" name="gender" id="gender"><br>
        <label for="desc">Description:</label> <br>
        <textarea name="description" id="desc"></textarea> <br>
        <input type="submit">
    </form>
</div>
    <script src="index.js"></script>
</body>
</html> 
