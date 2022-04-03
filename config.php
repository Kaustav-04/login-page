<?php

$host="localhost";
$user="root";
$password="";
$db="demo";

$db = new PDO('mysql:host-localhost;dbname='.$db.';charset-utf8',$user,$password);
$db->setAttribute(PDO::AFTER_ERRMODE, PDO::ERRMODE_EXCEPTION);
