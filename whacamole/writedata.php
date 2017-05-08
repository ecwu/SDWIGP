<?php
$name=$_GET["uploadUsername"];
$number=$_GET["uploadNumberOfStrikes"];
$score=$_GET["uploadScore"];//get info from the player page
$list = array
(
    "$name,$number,$score",//write the info to an array
);
$file = fopen("https://ecwuuuuu.com/wam/contacts.csv","a+");//open the remote database file
foreach ($list as $line)
{
    fputcsv($file,explode(',',$line));//write the info to the remote file
}
fclose($file);
echo "<script> alert('Success Uploaded!') </script>";//an alert after upload

$url = "scorepage.php";
echo "<script language='javascript' type='text/javascript'>";
echo "window.location.href='$url'";
echo "</script>";
?>