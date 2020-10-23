<?php
  include('common.php');
  include('db.php');
  include('emails.php');

  class VSShipment{
    protected $db;
    
    function __construct($db){ $this->db = $db; }

    public function addShipment($data){

      $ship_id = 'S'.Common::generateRand(5);
      $err = false;
          
      // Add to DB
      try {
        $ship_type = "Packed: ";
        if($data["isPacked"] === "true") $ship_type.= "Yes";
        else $ship_type.= "No";
        $ship_type.=", Type: ". $data["selOpts"];

        $this->db->save("x_vs_ship79332", array(
          "id"             => $ship_id,
          "x_email"        => $data["email"],
          "x_phone"        => $data["phone"],
          "x_fname"        => $data["fname"],
          "x_lname"        => $data["lname"],
          "x_street"       => $data["street"],
          "x_postcode"     => $data["postcode"],
          "x_place"        => $data["place"],
          "x_shp_type"     => $ship_type,
          "x_shp_con"      => "Containers: ".$data["numCon"].", Filled: ".$data["filled"].", Container Weights: ".$data["conWeights"],
          "x_shp_date"     => $data["date"],
          "x_date_commit"  => $data["isDateCommit"] === "true" ? "Yes" : "No", 
          "x_created"      => date('Y-m-d H:i:s')
        ));
      } catch (Exception $e) {
        $err = true;
        Common::respond($e, "There was an error inserting in DB, please try again.", false);
      }

      // Upload files
      try {
        $files = $data["files"];
          
        if(count($files)){
          // Create folder
          $path = "../upload/".$ship_id." - ".$data['fname'];
          mkdir($path, 0755, true);

          foreach ($files as $file){
            move_uploaded_file($file["tmp_name"], $path."/".Common::generateRand(6)."_".$file["name"]);          
          }
        }
      } catch (Exception $e) {
        $err = true;
        Common::respond($e, "There was an error uploading files, please try again.", false);
      }

      !$err && Common::respond(Common::sendEmail($data), "Shipment details added successfully.", true);
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
  switch($_REQUEST["type"]){
    case 'addShipment': $e->addShipment($data); break;
    default: $e->sendMailToUser($data, $files); break; // sendMailToUser
  }
?>