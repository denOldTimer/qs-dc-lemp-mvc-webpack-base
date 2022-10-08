<?php

namespace App\Controllers\Admin;

use App\Core\Controller;
use App\Core\View;
use App\Core\Translation;

use App\Models\mUser;

use App\Config\Config;

/**
 *  Login
 */
class Login extends Controller
{
  protected function before()
  {
    session_start();
    if (isset($_SESSION['loggedIN'])) {
      header('Location: /en/Admin/Dashboard');
      exit();
    }
  }

  public function indexAction($args = array())
  {
    $meta = array();
    $trans = array();
    $data = array();
    $var = array();

    $viewPath = PATH_VIEW;
    $viewPath .= ucfirst($args['namespace']);
    $viewName = strtolower($args['controller']);

    $var['scPath'] = strtolower($args['namespace']);
    $var['scPath'] .= DS;
    $var['scPath'] .= strtolower($args['controller']);

    $meta = array_merge($var);

    /*** render the view
     * @params int 		$renderOption  (1, 2, 3)
     * @params string 	$path
     * @params string 	$name
     * @params array 	$meta
     * @params array 	$trans
     * @params array 	$data
     * render options are
     *   1 - no includes
     *   2 - include header and footer
     *   3 - include header, navigation and footer
     */
    View::render(2, $viewPath, $viewName, $meta, $trans, $data);
  }
  public function loginAction($args = array())
  {
    // echo ('in the post -> index action method <br>');
    // var_dump($args);
    header('Content-Type: application/json');

    $response = array();
    $error = 0;

    if (isset($_POST['email']) && isset($_POST['password'])) {
      $error = 0;
      $email = htmlspecialchars($_POST['email'], ENT_QUOTES);
      $password = md5(htmlspecialchars($_POST['password'], ENT_QUOTES));
    } else {
      $error = 1;
    }

    //does the email exist?
    if ($error === 0) {
      $users = new mUser;
      $count = $users->getRowCountEmail($email);
      ($count > 1 || $count < 1) ? $error = 1 : $error = 0;
    } else {
      $error = 2;
    }

    //does the email with that password exist?
    if ($error === 0) {
      $count = $users->getRowCountUser($email, $password);
      ($count > 1 || $count < 1) ? $error = 1 : $error = 0;
    } else {
      $error = 3;
    }

    //
    if ($error === 0) {
      //Successfully  => redirect
      $user = $users->getUser($email, $password);
      session_start();
      $_SESSION['loggedIN'] = '1';
      $_SESSION['email'] = $email;
      $_SESSION['permission'] = $user['permission'];
      $_SESSION['userId'] = $user['id'];
      //
      $response['error'] = false;
      $response['code'] = $error;
      $response['user'] = $user;
      $response['message'] = "success";
      $response['response_code'] = 200;
    } else {
      // There was an error
      $response['error'] = true;
      $response['code'] = $error;
      $response['message'] = "Could not execute query";
      $response['response_code'] = 400;
    }


    if ($error === 1) {
      $response['error'] = true;
      $response['code'] = $error;
      $response['message'] = "Invalid email or password?";
      $response['response_code'] = 400;
    }

    // Display Results
    echo (json_encode($response));
  }
  protected function after()
  {
  }
  //END-Class
}