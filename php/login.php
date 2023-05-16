<?php
header("Access-Control-Allow-Origin:null");
$cont2=$_POST['contact1'];
$pass2=$_POST['password1'];
$connection=mysqli_connect("localhost","root","","20MER121");
if(!$connection)
{
    echo "Couldn't reach the servers";
    die();
}
else
{
    try{
    $database="SELECT contact,password FROM student_datas WHERE(contact=$cont2)";
    $query=mysqli_query($connection,$database);
    $row=$query->fetch_assoc();
    if($row==null)
    {
        print("Account not found");
    }
    else{
        if($row['password']==$pass2)
        {
            print("Logged in");
        }
        else{
            print("Invalid password");
        }
    }
    }
    catch(Exception $err)
    {
        print("Invalid input");
    }
}
?>