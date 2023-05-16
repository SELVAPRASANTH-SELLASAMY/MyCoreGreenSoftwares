<?php
header("Access-Control-Allow-Origin:null");
$fname2=$_POST['fname'];
$lname2=$_POST['lname'];
$R_no2=$_POST['r_no'];
$dob2=$_POST['dob'];
$cont2=$_POST['contact'];
$pass2=$_POST['pass'];
$connection=mysqli_connect('localhost','root','','20MER121');
if(!$connection)
{
    echo "Couldn't reach the servers...!!!";
    die();
}
$check="SELECT id FROM student_datas WHERE(contact=$cont2)";
$query=mysqli_query($connection,$check);
while($row=$query->fetch_assoc())
{
    if($row!=null)
    {
        echo "duplicate";
        die();
    }
}
$table=$connection->prepare("INSERT INTO student_datas (firstname,lastname,roll_no,DOB,contact,password) VALUES(?,?,?,?,?,?)");
$table->bind_param("ssssss",$fname2,$lname2,$R_no2,$dob2,$cont2,$pass2);
$table->execute();
$connection->close();
?>