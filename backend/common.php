<?php
  header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Headers: Content-Type');
  header('Access-Control-Allow-Methods: GET, POST, OPTIONS');  

  class Common{
    public static function respond($data, $message, $result){
      echo json_encode(array(
        "data" => $data,
        "message" => $message,
        "result" => $result
      ));
    }

    public static function sendEmail($data){
      $date = date('Y-m-d H:i:s');
      $eol = PHP_EOL;
      $username = $data['firstName'] ." ". $data['lastName'];
      $emailObj = array();

      // Primary Email
      $to = implode(", ", $GLOBALS['recipients']);

      $headers = "MIME-Version: 1.0" . $eol;
      $headers.= "Content-type:text/html;charset=UTF-8" . $eol;
      $headers.= "From: Cloudbasiert Team <team@cloudbasiert.com>";
      $subject = "New Appointment @ Cloudbasiert - ".$username;
      
      // Email Text
      $txt = "<div style='font-size: 1rem;'>";
      $txt.= "  Hallo Paul,<br/><br/>";
      $txt.= "  A new user has answered the questionnaire. Below are the user's details:<br/><br/>";
      $txt.= "  <b>Name: </b>".$username."<br/>";
      $txt.= "  <b>Email: </b>".$data['email']."<br/>";
      $txt.= "  <b>Telephone: </b>".$data['phone']."<br/>";
      $txt.= "  <b>Workshop: </b>".$data['selOpts']."<br/>";
      $txt.= "  <b>Selected Time Slot: </b>".$data['currEvent']['eventStr']."<br/><br/>";
      $txt.= "  <b>Submission Date & Time: </b>".$date."<br/><br/>";
      $txt.= "  Thanks and Regards,<br/>";
      $txt.= "  Cloudbasiert Team";
      $txt.= "</div>";

      $emailObj["primary"] = array(
        "to" => $to,
        "subject" => $subject,
        "txt" => $txt,
        "headers" => $headers,
        "env" => $GLOBALS['env']
      );

      if($GLOBALS['env'] === "local"){
        return $emailObj;
      } else {
        $sent = true;
        
        foreach ($emailObj as $key => $value) {
          $to      = $value["to"];
          $subject = $value["subject"];
          $txt     = $value["txt"];
          $headers = $value["headers"];
          $sent    = $sent && mail($to, $subject, $txt, $headers);
        }
        return $sent;
      }    
    }

    public static function normalizeFiles($files = array()) {
      $normalized_array = array();
      foreach($files as $index => $file) {
        if (!is_array($file['name'])) {
          $normalized_array[$index][] = $file;
          continue;
        }
        foreach($file['name'] as $idx => $name) {
          $normalized_array[$index][$idx] = array(
            'name' => $name,
            'type' => $file['type'][$idx],
            'tmp_name' => $file['tmp_name'][$idx],
            'error' => $file['error'][$idx],
            'size' => $file['size'][$idx]
          );
        }
      }
      return $normalized_array;
    }

  }

  // Reading the input
  $data = json_decode(stripslashes($_REQUEST["shipment"]), true);  
  // $data = json_decode(file_get_contents('php://input'), true);
?>