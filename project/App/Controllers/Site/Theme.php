<?php

namespace App\Controllers\Site;

use App\Core\Controller;
use App\Core\View;
//use App\Core\Translation;

use App\Config\Config;

/**
 *  Theme
 */
class Theme extends Controller
{
  protected function before()
  {
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


    //TODO GET META DATA FROM DATABASE
    $config = new Config();
    $config->setMeta();
    $meta = $config->getMeta();

    $lang = isset($args['lang']) ? $args['lang'] : $meta['scMetaLanguage'];

    $meta['scMetaOgUrl'] = $meta['scMetaOgUrl'];
    $meta['scMetaOgUrl'] .= '/' . $lang;
    $meta['scMetaOgUrl'] .= '/' . $args['controller'];
    $meta['scMetaOgUrl'] .= '/' . $args['action'];

    $meta['scMetaPath']  = strtolower($args['namespace']);
    $meta['scMetaPath']  .= DS;
    $meta['scMetaPath']  .= strtolower($args['controller']);

    $meta['scMetaLanguage']       = $lang;
    $meta['scMetaNamespace']     = ucfirst($args['namespace']);
    $meta['scMetaController']     = ucfirst($args['controller']);
    $meta['scMetaAction']         = $args['action'];

    $meta['scMetaOgTitle']        = ucfirst($args['controller']);
    $meta['scMetaOgDescription']  .= ' ';

    //TODO GET TRANSLATION FROM DATABASE



    /*
    * render the view
    * @params int 		$renderOption  (0, 1, 2)
    * @params string 	$path
    * @params string 	$name
    * @params array 	$data
    * @params array 	$trans
    *
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