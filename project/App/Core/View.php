<?php

namespace App\Core;

class View
{
  public function __construct()
  {
    echo ('test within the class');
  }


  /*
	* render the view
	* @params int 		$renderOption  (0, 1, 2)
  * @params string 	$path
	* @params string 	$name
	* @params array 	$data
	* @params array 	$trans
  *
  * render options are
  *   0 - no includes
  *   1 - include header and footer
  *   2 - include header, navigation and footer
	*/
  public static function render($renderOption, $path, $name, $meta = array(), $trans  = array(), $data = array())
  {

    $paths = array(
      1 =>
      array(1 => $path . DS . $name . '.phtml'),
      2 =>
      array(
        1 => $path . DS  . 'header.phtml',
        3 => $path . DS  . $name . '.phtml',
        4 => $path . DS  . 'footer.phtml'
      ),
      3 =>
      array(
        1 => $path . DS  . 'header.phtml',
        2 => $path . DS  . 'navigation.phtml',
        3 => $path . DS  . $name . '.phtml',
        4 => $path . DS  . 'footer.phtml'
      )

    );

    /*renderPage() is in the Function.php file*/
    self::renderPage($renderOption, $paths, $meta, $trans, $data);
  }


  /*
    * rendering the page - View.php
    * @params   int    $renderOption 0,1,2
    * @params   array   $paths
    * @params   array   $data
    */
  public static function renderPage($renderOption, $paths = array(), $meta = array(), $trans = array(), $data = array())
  {
    if (self::checkPath($renderOption, $paths)) {
      extract($meta);
      extract($trans);
      extract($data);
      foreach ($paths[$renderOption] as $path) {
        if (is_readable($path)) {
          require $path;
        } else {
          throw new \Exception("Functions.php : renderPage : NO such document exits : $path");
        }
      }
    } else
      throw new \Exception("Functions.php : renderPage : the checkPath : FAILED");
  } //END renderPage


  /*
    * Path checking at View base level - View.php
    * @params   int     $renderOption 0,1,2
    * @params   array   $paths
    */
  public static function checkPath($renderOption, $paths = array())
  {
    if (empty($renderOption))
      throw new \Exception("Functions.php : checkPath : renderOption required !");
    foreach ($paths[$renderOption] as $path)
      if (!is_readable($path))
        throw new \Exception("Functions.php : checkPath : File doesn't exist : $path");
      else
        return true;
  } //END checkPath








  //END-Class
}