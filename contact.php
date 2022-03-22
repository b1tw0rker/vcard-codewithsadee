<?php

/**
 * 
 * VARS
 * 
 */
$receiver = 'service@host-x.de';
$subject = 'contact request';


/**
 * 
 * Access Control
 * 
 */
if (isset($_SERVER['HTTP_ORIGIN'])) {
    header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
    header('Access-Control-Allow-Credentials: true');
    header('Access-Control-Max-Age: 86400');    // cache for 1 day
}


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
        header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    }
    if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
        header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
    }

    exit(0);
}



$json = file_get_contents('php://input');
$array = json_decode($json, true);





/**
 * 
 * Extract incoming data
 * 
 */
$tmp = explode("&", $array);
$email = substr(trim($tmp[0]), 9);
$name = substr(trim($tmp[1]), 9);
$msg = substr(trim($tmp[2]), 4);


/**
 * 
 * Sendmail
 * 
 */
if (!empty($name) && !empty($email)) {

    $time = date("H:i:s");
    $line = "---------------------";

    $msg = "Time: $time\r\n$line\r\nName. $name\r\nEmail. $email\r\nMessage. $msg\r\n";

    error_log($email);
    error_log($name);
    error_log($receiver);

    mail($receiver, $subject, $msg);
}



/**
 * 
 * build answer for Angular
 * 
 */
$response = array(
    "done" => true
);

/**
 * 
 * coding & send data back to Angular
 * 
 */
print_r(json_encode($response));


/**
 * 
 * Unset
 * 
 */
unset($name, $email);
