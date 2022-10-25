<?php

namespace App\Config;

class Config
{
  private $routes = array();
  private $meta = array();


  public function __construct()
  {
  }

  /** Routes
   * 
   */
  public function setRoutes()
  {
    $this->routes = include_once('routes.php');
  }
  public function getRoutes()
  {
    return $this->routes;
  }

  /** Metadata
   * 
   */
  public function setMeta()
  {
    $this->meta = include_once('meta.php');
  }
  public function getMeta()
  {
    return $this->meta;
  }

  /** Variables
   * 
   */
  public function setVars()
  {
    $this->meta = include_once('vars.php');
  }
  public function getVars()
  {
    return $this->meta;
  }






  //END-Class
}
