<?php

namespace App\Core;

use App\Config\Config;



class App
{
  public function __construct()
  {

    self::router();
  }


  private static function router()
  {

    $config = new Config();
    $config->setRoutes();
    $routes = $config->getRoutes();

    $router = new Router();

    foreach ($routes as $route => $params) {
      $router->addRoute($route, $params);
    };



    //echo '<br /> PATH_HOST  :: ' . $_SERVER['HTTP_HOST'];
    //echo '<br /> REQUEST_URI  :: ' . $_SERVER['REQUEST_URI'];



    //PARSING URL
    $tokens = htmlspecialchars($_SERVER['REQUEST_URI'], ENT_QUOTES);
    //var_dump($tokens);

    //DISPATCH
    $router->dispatch($tokens);
  }

  //END-Class
}