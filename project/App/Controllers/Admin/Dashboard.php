<?php

namespace App\Controllers\Admin;

use App\Core\Controller;
use App\Core\View;
use App\Core\Translation;

use App\Config\Config;

/**
 *  Dashboard
 */
class Dashboard extends Controller
{
  protected function before()
  {
    session_start();
    if (!isset($_SESSION['loggedIN'])) {
      header('Location: /en/Admin/Login');
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
    $var['scUserPermission'] = $_SESSION['permission'];

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
    View::render(3, $viewPath, $viewName, $meta, $trans, $data);
  }

  protected function after()
  {
  }

  //END-Class
}