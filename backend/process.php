<?php
  include('common.php');
  include('db.php');
  include('emails.php');

  class VSShipment{
    protected $db;
    
    function __construct($db){
      $this->db = $db;
    }

    public function addShipment($input){

      if(count($fileObj)){ $files = $fileObj["files"]; }
      else{ $files = array(); }

      $err = false;

      // function ts($str){ return explode('+', $str)[0]; }
      
      // try {
      //   $this->db->save("x_evt_det08441", array(
      //     "x_fname"           => $input["firstName"],
      //     "x_lname"           => $input["lastName"],
      //     "x_email"           => $input["email"],
      //     "x_phone"           => $input["phone"],
      //     "x_workshop"        => $input["selOpts"],
      //     "x_workshop_date"   => ts($input["currEvent"]["eventDate"]),
      //     "x_start"           => ts($input["currEvent"]["startStr"]),
      //     "x_end"             => ts($input["currEvent"]["endStr"]),
      //     "x_created"         => date('Y-m-d H:i:s')
      //   ));
      // } catch (Exception $e) {
      //   $err = true;
      //   Common::respond($e, "There was an error, please try again.", false);
      // }

      !$err && Common::respond(Common::sendEmail($input), "Event added successfully.", true);
    }

    public function sendMailToUser($input){
      $eol = PHP_EOL;

      $username = $input['firstName'] ." ". $input['lastName'];
      $headers = "MIME-Version: 1.0". $eol;
      $headers.= "Content-type:text/html;charset=UTF-8". $eol;
      $headers.= "From: Paul from Cloudbasiert <paul@cloudbasiert.com>";

      $to = $input['email'];
      $subject = $username." | Email from Cloudbasiert.com";

      $txt = "<div style='font-size: 1rem;'>";
      $txt.= "  Hi ".$username.",<br/><br/>";
      $txt.= "  Thanks for booking the appointment.<br/>Below are your details:<br/><br/>";
      $txt.= "  <b>Chosen Workshop: </b>".$input['selOpts']."<br/>";
      $txt.= "  <b>Selected Time Slot: </b>".$input['currEvent']['eventStr']."<br/><br/>";
      $txt.= "  <b>Your Email: </b>".$input['email']."<br/>";
      $txt.= "  <b>Your Telephone: </b>".$input['phone']."<br/><br/>";
      $txt.= "  Thanks and Regards,<br/>";
      $txt.= "  Paul from Cloudbasiert";
      $txt.= "</div>";

      if($GLOBALS['env'] === "local"){
        Common::respond($input, "Attempted to send email.", 'mail($to, $subject, $txt, $headers)');
      } else{
        Common::respond($input, "Attempted to send email.", mail($to, $subject, $txt, $headers));
      }
    }
  }

  $e = new VSShipment($db);
  $fileObj = Common::normalizeFiles($_FILES);

  $type = json_decode(stripslashes($_REQUEST["type"]), true);  

  switch($type){
    // case 'addShipment': $e->addShipment(); break;
    // case 'sendMailToUser': $e->sendMailToUser($data["formData"]); break;
    // default: Common::respond($data["formData"], $fileObj, '');
    default: Common::respond($data, $_REQUEST, $fileObj);
    // case 'getEvents': $e->getEvents(); break;
    // default: $e->addEvent($data["formData"]); break; //addEvent
  }
?>