<?php
// note_service.inc
/**
* Callback for creating printing services.
*
* @param object $data
* @return object
*/



function _dl_create($_node) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $node = node_load(83);
    $data = $data = array(
        1 => array('value' => array($name)),
        2 => array('value' => array($email)),
        3 => array('value' => array($message)),
    );
    $submission = (object) array(
        'nid' => 83,
        'uid' => 0,
        'submitted' => REQUEST_TIME,
        'remote_addr' => ip_address(),
        'is_draft' => FALSE,
        'data' => $data,
    );

    module_load_include('inc', 'webform', 'includes/webform.submissions');
    $result = webform_submission_insert($node,$submission);
    webform_submission_send_mail($node,$submission);
    return (object)array(
        'wid' => $result,
    );
}


/**
* Access callback for the note service.
*
* @param string $op
*  The operation that's going to be performed.
* @param array $args
*  The arguments that will be passed to the callback.
* @return bool
*  Whether access is given or not.
*/

function _dl_access($op, $args) {
  global $user;
  $access = FALSE;

  switch ($op) {
    
    case 'create':
      $access = user_access('dl resource create');
      user_access('dl resource create');
      break;
  }
  
  return $access;
}
?>