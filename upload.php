<?php

$valid_formats = array("jpg", "png", "gif", "zip", "bmp" , "pdf" , "docx" , "txt" , "htm" , "html" , "pptx" , "excl");
$path = "uploads/"; // Upload File directory
$count = 0;

if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST"){
	// Loop $_FILES to exeicute all files
	foreach ($_FILES['files']['name'] as $key => $name) {     
	   	move_uploaded_file($_FILES["files"]["tmp_name"][$key], $path.md5($name.uniqid().time()).'.'.pathinfo($name, PATHINFO_EXTENSION));
	}
	$ok = [
		'status'	=> 1
	];
}

echo json_encode($ok);