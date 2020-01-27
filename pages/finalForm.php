<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="description" content="Bite Restaurant">
        <meta name="keywords" content="bite, restaurant, fine dining, Bucharest">
        <meta name="author" content="Mohammed Aqeed">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Huddi</title>
        <link rel="icon" href="../img/h-logo-png-6.png">
        <script src="https://kit.fontawesome.com/95ef876d75.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <script src="https://kit.fontawesome.com/95ef876d75.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../css/finalForm.css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    </head>

    <body>

        <form name="addtext" method="post" id="formToSave">
            Name: *<br>
            First Name: <input type="text" class="form-control" name="firstName">
            Last Name: <input type="text" class="form-control" name="lastName"><br>
            Phone Number: <input type="number" class="form-control" name="phoneNumber"><br>
            E-mail: <input type="email" class="form-control" name="email"><br><hr>
            Delivery Details: <hr>
            Delivery to: (name)<br>
            First Name: <input type="text" class="form-control" name="deliveryFirstName">
            Last Name: <input type="text" class="form-control" name="deliveryLastName"><br>
            Receiver's Ph. Number<br>
            <input type="number" class="form-control" name="deliveryPhoneNumber"><br>
            Delivery street address<br>
            <input type="text" class="form-control" name="deliveryAddress"><br>
            Delivery date: <br>
            <input type="date" class="form-control" name="deliveryDate">
    
            <input type="submit" class="form-control" name="submit" id="submitForm" value="Submit">
        </form>

        <?php
        if(isset($_POST['submit'])) {
            echo $_POST['firstName'];
            echo $_POST['lastName'];
            echo $_POST['phoneNumber'];
            echo $_POST['email'];
            echo $_POST['deliveryFirstName'];
            echo $_POST['deliveryLastName'];
            echo $_POST['deliveryPhoneNumber'];
            echo $_POST['deliveryAddress'];
            echo $_POST['deliveryDate'];
        }
        ?>


    </body>
</html>