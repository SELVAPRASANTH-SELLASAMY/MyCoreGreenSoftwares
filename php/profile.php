<?php
header('Access-Control-Allow-Origin:null');
$primarySelector=$_POST['key'];
$connection=mysqli_connect('localhost','root','','20MER121');
if(!$connection)
{
    die("Can't reach the servers");
}
$database="SELECT id,firstname,lastname,roll_no,DOB,contact FROM student_datas WHERE(contact=$primarySelector)";
$query=mysqli_query($connection,$database);
while($row=$query->fetch_assoc())
{
    if($row!=null)
    {
        $encode=json_encode($row);
        echo $encode;
    }
    else{
        print("No Datas found");
    }
}
?>