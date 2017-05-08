<?php
$arrCSV = array();//set a new array
// Open the CSV
if (($handle = fopen("https://ecwuuuuu.com/wam/contacts.csv", "r")) !==FALSE) {
    $key = 0;
    while (($data = fgetcsv($handle, 0, ",")) !==FALSE) {
        $c = count($data);
        for ($x=0;$x<$c;$x++) $arrCSV[$key][$x] = $data[$x];//import the database info to the array
        $key++;
    }
    fclose($handle);//close the remote file
}
$sort = array(
    'direction' => 'SORT_DESC',//determine what kind of way to sort the info
    'field'     => 2,//determine which element use to sort the info
);
$arrSort = array();
foreach($arrCSV AS $uniqId => $row){//sort base on row
    foreach($row AS $Nkey=>$value){
        $arrSort[$Nkey][$uniqId] = $value;
    }
}
if($sort['direction']){
    array_multisort($arrSort[$sort['field']], constant($sort['direction']), $arrCSV);//sort the info
}
?>
<!DOCTYPE html>
<html>
<head>
    <title>Score | SDWI2017</title>
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"><!--bootstarp external CSS-->
    <link rel="stylesheet" type="text/css" href="css/scorestyle.css">
</head>
<body>
<div class="container">
    <div class="row">
        <div class="col-md-9">
            <h1 class="title">Top Table<!--title area-->
                <span class="btn btn-primary" id="showScoreBtn" data-toggle="modal" data-target="#scoreModal" style="display: none;">Score Test</span>
            </h1>
        </div>
        <div class="row">
            <div class="col-md-6">
                <a href="index.html"><button type="button" class="btn btn-success">Replay</button></a><!-- operation btn-->
            </div>
            <div class="col-md-6">
                <a href="http://uic.edu.hk"><button type="button" class="btn btn-primary">Exit</button></a><!--linke to uic homepage-->
            </div>
        </div>
    </div>
    <table class="table"><!--score table-->
    <thead>
        <tr><!--table head-->
            <th>#</th>
            <th>Username</th>
            <th>Strike Number</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
    <?php
    for ($x=0; $x<count($arrCSV); $x++) {/*write the sorted array to the table one by one*/
        echo "<tr><th scope=\"row\">";
        echo $x+1;
        echo "</th><td>";
        echo $arrCSV[$x][0];
        echo "</td><td>";
        echo $arrCSV[$x][1];
        echo "</td><td>";
        echo $arrCSV[$x][2];
        echo "</td></tr>";
    }
    ?>
    </tbody>
</div>
</body>
<!-- Bootstrap js -->
<script src="js/jquery-3.2.0.min.js"></script>
<script src="js/bootstrap.min.js"></script>
</html>