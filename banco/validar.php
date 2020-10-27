<?php
  $user=$_POST["user"];
  $pass=$_POST["pass"];

  //conectar la base de datos

    $conexio= server_connect("localhost","root", "", "dbbanco")
