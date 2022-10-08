<?php

namespace App\Core;

use Exception;

class Translation
{
  private $data = array();
  private $lang;
  private $file;


  public function setTranslation($lang)
  {
    if ($lang) {
      $this->lang = $lang;
    } else {
      throw new Exception("Translation Language NOT set");
    }
  }

  public function getTranslation()
  {
    $this->file = PATH_TRANS . $this->lang . '.json';
    if (is_readable($this->file)) {
      $this->data = file_get_contents($this->file);
      $this->data = json_decode($this->data, TRUE);
      return $this->data;
    } else {
      throw new Exception("Translation File for $this->lang does not exist : $this->file");
    }
  }







  //END-Class
}