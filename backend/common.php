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

    public static function sendEmail($data, $type){

      $date = date('Y-m-d H:i:s');
      
      // carriage return type (RFC)
      $eol = PHP_EOL;
      
      $username = $data['fname'] ." ". $data['lname'];

      switch($type){

        case "user": 

          $ship_type = "Packed: ";
          if($data["isPacked"] === "true") $ship_type.= "Yes";
          else $ship_type.= "No";
          $ship_type.=", Type: ". $data["selOpts"];

          $username = $data['fname'] ." ". $data['lname'];
          $headers = "MIME-Version: 1.0". $eol;
          $headers.= "Content-type:text/html;charset=UTF-8". $eol;
          $headers.= "From: Paul from Verschiffen <paul@cloudbasiert.com>";

          $to = $data['email'];
          $subject = $username." | Email from Verschiffen.com";

          $txt = "<div style='font-size: 1rem;'>";
          $txt.= "  Hi ".$username.",<br/><br/>";
          $txt.= "  Thanks for booking the shipment.<br/>Below are your details:<br/><br/>";
          $txt.= "  <b>Shipment details: </b><br/>";
          $txt.= "  ".$ship_type."<br/>";
          $txt.= "  Containers: ".$data["numCon"].", Filled: ".$data["filled"].", Container Weights: ".$data["conWeights"]."<br/>";
          $txt.= "  <b>Shipment Address: </b>".$data['street'].", ".$data['postcode'].", ".$data['place']."<br/>";
          $txt.= "  <b>Your Email: </b>".$data['email']."<br/>";
          $txt.= "  <b>Your Telephone: </b>".$data['phone']."<br/><br/>";      
          $txt.= "  Thanks and Regards,<br/>";
          $txt.= "  Paul from Verschiffen";
          $txt.= "</div>";          

          $emailObj = array(
            "to" => $to,
            "subject" => $subject,
            "txt" => $txt,
            "headers" => $headers,
            "env" => $GLOBALS['env']
          );

          if($GLOBALS['env'] === "local") return $emailObj;
          else return mail($to, $subject, $txt, $headers);

        break;

        default: // company
          
          $ship_id = $data['ship_id'];
          $path = $data['path'];

          // Create Zip file with contents of folder
          $arr = array();
          $attName = "attachments_".$ship_id." - ".$username.".zip";
          $zipFile  = $path."/".$attName;
          Common::zipData($path, $zipFile, $arr);

          // Preparing attachments
          $content = file_get_contents($zipFile);
          $content = chunk_split(base64_encode($content));

          // a random hash will be necessary to send mixed content
          $separator = md5(time());

          // Common Headers for email
          // main header (multipart mandatory)
          $headers = "From: Verschiffen Team <team@verschiffen.com>" . $eol;
          $headers .= "Reply-To: felix.gerlach.gera@googlemail.com" . $eol;
          $headers .= "Return-Path: felix.gerlach.gera@googlemail.com" . $eol;
          $headers .= "MIME-Version: 1.0" . $eol;
          $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
          $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
          $headers .= "This is a MIME encoded message." . $eol;
          
          $ship_type = "Packed: ";
          if($data["isPacked"] === "true") $ship_type.= "Yes";
          else $ship_type.= "No";
          $ship_type.=", Type: ". $data["selOpts"];

          // Email Text
          $txt = "<div style='font-size: 1rem;'>";
          $txt.= "  Hallo Paul,<br/><br/>";
          $txt.= "  A new user has answered the questionnaire. Below are the user's details:<br/><br/>";
          $txt.= "  <b>Name: </b>".$username."<br/>";
          $txt.= "  <b>Email: </b>".$data['email']."<br/>";
          $txt.= "  <b>Telephone: </b>".$data['phone']."<br/>";
          $txt.= "  <b>Shipment details: </b><br/>";
          $txt.= "  ".$ship_type."<br/>";
          $txt.= "  Containers: ".$data["numCon"].", Filled: ".$data["filled"].", Container Weights: ".$data["conWeights"]."<br/>";
          $txt.= "  <b>Shipment Address: </b>".$data['street'].", ".$data['postcode'].", ".$data['place']."<br/>";          
          $txt.= "  <b>Submission Date & Time: </b>".$date."<br/><br/>";
          $txt.= "  Thanks and Regards,<br/>";
          $txt.= "  Verschiffen Team";
          $txt.= "</div>";

          // Message
          $body = "--" . $separator . $eol;
          $body .= "Content-Type: text/html; charset=UTF-8" . $eol;
          $body .= "Content-Transfer-Encoding: 8bit" . $eol. $eol;
          $body .= $txt . $eol;

          // Email Attachment
          $body .= "--" . $separator . $eol;
          $body .= "Content-Type: application/octet-stream; name=\"" . $attName . "\"" . $eol;
          $body .= "Content-Transfer-Encoding: base64" . $eol;
          $body .= "Content-Disposition: attachment" . $eol. $eol;
          $body .= $content . $eol;

          $body .= "--" . $separator . "--";

          $to = implode(", ", $GLOBALS['recipients']);
          $subject = "New Shipment @ Verschiffen - ".$username;

          $emailObj = array(
            "to" => $to,
            "subject" => $subject,
            "txt" => $txt,
            "headers" => $headers,
            "env" => $GLOBALS['env']
          );

          if($GLOBALS['env'] === "local") return $emailObj;
          else return mail($to, $subject, $body, $headers);

        break;

      }

    }

    public static function generateRand($length = 4) {
      $characters = '0123456789';
      $charactersLength = strlen($characters);
      $randomString = '';
      for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
      }
      return $randomString;
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

      if(array_key_exists("files", $normalized_array)) return $normalized_array["files"];
      else return $normalized_array;
    }

    public static function zipData($source, $destination, $arr) {
      // return extension_loaded('zip');
      if (extension_loaded('zip')) {
        if (file_exists($source)) {
            $zip = new ZipArchive();
            if ($zip->open($destination, ZIPARCHIVE::CREATE)) {
              $source = realpath($source);
              if (is_dir($source)) {
                $iterator = new RecursiveDirectoryIterator($source);
                // skip dot files while iterating 
                $iterator->setFlags(RecursiveDirectoryIterator::SKIP_DOTS);
                $files = new RecursiveIteratorIterator($iterator, RecursiveIteratorIterator::SELF_FIRST);
                foreach ($files as $file) {
                  $file = realpath($file);
                  
                  switch($GLOBALS['env']){
                  
                    case 'local': // windows
                      if (is_dir($file)) {
                        $arr[] = array("source"=>$source,"file"=>$file, "removed"=>str_replace($source.'\\', '', $file)); // Windows System
                        $zip->addEmptyDir(str_replace($source.'\\', '', $file)); // Windows System
                      } else if (is_file($file)) {
                        $arr[] = array("source"=>$source,"file"=>$file, "removed"=>str_replace($source.'\\', '', $file)); // Windows System
                        $zip->addFromString(str_replace($source.'\\', '', $file), file_get_contents($file)); // Windows System
                      }
                    break;

                    default: // unix
                      if (is_dir($file)) {
                        $arr[] = array("source"=>$source,"file"=>$file, "removed"=>str_replace($source.'/', '', $file)); // Unix System
                        $zip->addEmptyDir(str_replace($source.'/', '', $file)); // Unix System
                      } else if (is_file($file)) {
                        $arr[] = array("source"=>$source,"file"=>$file, "removed"=>str_replace($source.'/', '', $file)); // Unix System
                        $zip->addFromString(str_replace($source.'/', '', $file), file_get_contents($file)); // Unix System
                      }
                    break;

                  }
                }
              } else if (is_file($source)) {
                $zip->addFromString(basename($source), file_get_contents($source));
              }
            }
          ;
          return array("result"=>$zip->close(), "files"=>$arr);
        }
      }
      return false;
    }

  }

  // Reading the input
  $data = $_REQUEST;
  $data["files"] = Common::normalizeFiles($_FILES);
  // $data = json_decode(file_get_contents('php://input'), true);
?>