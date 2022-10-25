<?php

namespace App\Controllers\Admin;

use App\Core\Controller;
use App\Core\View;
use App\Core\Translation;

use App\Models\mUser;

use App\Config\Config;

/**
 *  Register
 */
class Register extends Controller
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
    $vars = array();

    $viewPath = PATH_VIEW;
    $viewPath .= ucfirst($args['namespace']);
    $viewName = strtolower($args['controller']);


    $config = new Config();
    $config->setVars();
    $vars = $config->getVars();

    $lang = isset($args['lang']) ? $args['lang'] : $meta['scLanguage'];


    $vars['scPath'] = strtolower($args['namespace']);
    $vars['scPath'] .= DS;
    $vars['scPath'] .= strtolower($args['controller']);


    $vars['scLanguage']    = $lang;
    $vars['scNamespace']   = ucfirst($args['namespace']);
    $vars['scController']  = ucfirst($args['controller']);
    $vars['scAction']      = $args['action'];

    $vars['scTitle']       = ucfirst($args['controller']);

    $meta = array_merge($vars);



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
  public function createAction($args = array())
  {
    $meta = array();
    $trans = array();
    $data = array();
    $vars = array();

    $viewPath = PATH_VIEW;
    $viewPath .= ucfirst($args['namespace']);
    $viewName = strtolower($args['controller']);


    $config = new Config();
    $config->setVars();
    $vars = $config->getVars();

    $lang = isset($args['lang']) ? $args['lang'] : $meta['scLanguage'];


    $vars['scPath'] = strtolower($args['namespace']);
    $vars['scPath'] .= DS;
    $vars['scPath'] .= strtolower($args['controller']);


    $vars['scLanguage']    = $lang;
    $vars['scNamespace']   = ucfirst($args['namespace']);
    $vars['scController']  = ucfirst($args['controller']);
    $vars['scAction']      = $args['action'];

    $vars['scTitle']       = ucfirst($args['controller']);

    $meta = array_merge($vars);

    $user = new mUser;
    $user->setUser($_POST);

    if ($user->createUser()) {

      header('Location: /Admin/Register/success', true, 303);
      exit;
    } else {


      View::render(2, $viewPath, $viewName, $meta, $trans, [
        'user' => $_POST,
        'errorList' => $user->getErrorList()

      ]);
    }
  }


  public function successAction($args = array())
  {
    $meta = array();
    $trans = array();
    $data = array();
    $vars = array();

    $viewPath = PATH_VIEW;
    $viewPath .= ucfirst($args['namespace']);
    $viewName = strtolower($args['controller']);
    $viewName .= ucfirst($args['action']);

    //NOTE: ADDING a 2de View to the same controller requires the action added to the viewName and also to your views `registerSucces.phtml`




    $config = new Config();
    $config->setVars();
    $vars = $config->getVars();

    $lang = isset($args['lang']) ? $args['lang'] : $meta['scLanguage'];


    $vars['scPath'] = strtolower($args['namespace']);
    $vars['scPath'] .= DS;
    $vars['scPath'] .= strtolower($args['controller']);


    $vars['scLanguage']    = $lang;
    $vars['scNamespace']   = ucfirst($args['namespace']);
    $vars['scController']  = ucfirst($args['controller']);
    $vars['scAction']      = $args['action'];

    $vars['scTitle']       = ucfirst($args['controller']);

    $meta = array_merge($vars);



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






  protected function after()
  {
  }
  //END-Class
}





foreach ($args as $key => $value) {
  $this->$key = $value;
}