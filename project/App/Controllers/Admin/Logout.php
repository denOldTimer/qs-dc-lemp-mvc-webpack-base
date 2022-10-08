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
class Logout extends Controller
{
  protected function before()
  {
  }

  public function indexAction($args = array())
  {
    session_start();
    unset($_SESSION['loggedIN']);
    session_destroy();
    header('Location: /en/Admin/Login');
    exit();
  }

  protected function after()
  {
  }
  //END-Class
}