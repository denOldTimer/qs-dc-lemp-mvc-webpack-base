<?php

namespace App\Models;

use App\Core\Database;
use PDO;

/**
 *  About
 */
class mUser extends Database
{
  protected static $db = null;
  public static $errorList = array();


  /** The database Connection
   * 
   * 
   */
  public function __construct()
  {
    parent::__construct();
  }

  public function setUser($args)
  {

    foreach ($args as $key => $value) {
      $this->$key = $value;
    }
  }
  public function getErrorList()
  {
    return $this->errorList;
  }


  //CRUD - CREATE
  public function createUser()
  {
    self::validateUser();
    if (empty($this->errorList)) {
      $password = password_hash($this->password, PASSWORD_DEFAULT);

      $query = "INSERT INTO `users` 
                (`id`, `name`, `email`, `password_hash`) 
                VALUES 
                (NULL, :name, :email, :password_hash)";

      $dB = static::getdb();
      $stmt = $dB->prepare($query);
      $stmt->bindValue(':name', $this->name, PDO::PARAM_STR);
      $stmt->bindValue(':email', $this->email, PDO::PARAM_STR);
      $stmt->bindValue(':password_hash', $password, PDO::PARAM_STR);

      return $stmt->execute();
    } else {
      return false;
    }
  }


  public static function authenticate($email, $password)
  {
    $user = static::findByEmail($email);


    if ($user) {
      if (password_verify($password, $user->password_hash)) {
        return $user;
      }
    }
    return false;
  }


  public static function findByEmail($email)
  {
    $query = "SELECT * FROM `users`WHERE email = :email";

    $dB = static::getdb();

    $stmt = $dB->prepare($query);
    $stmt->bindValue(':email', $email, PDO::PARAM_STR);
    $stmt->setFetchMode(PDO::FETCH_CLASS, get_called_class());
    $stmt->execute();
    return $stmt->fetch();
  }


  public static function emailExists($email)
  {
    return static::findByEmail($email) !== false;
  }

  private function validateUser()
  {
    //Name
    if ($this->name == '') {
      $this->errorList[] = 'Name Required !';
    }
    //Email address
    if (filter_var($this->email, FILTER_VALIDATE_EMAIL) === false) {
      $this->errorList[] = 'Email Invalid!';
    }

    if ($this->emailExists($this->email)) {
      $this->errorList[] = 'Email already exists!';
    }
    //Password
    if ($this->password == '' || $this->confirm == '') {
      $this->errorList[] = 'Password and Confirmation Password are required!';
    }
    if ($this->password !== $this->confirm) {
      $this->errorList[] = 'Passwords do not match!';
    }
    if (strlen($this->password) < 6) {
      $this->errorList[] = 'Password must be more than 6 characters!';
    }
    if (preg_match('/.*[a-z]+.*/i', $this->password) == 0) {
      $this->errorList[] = 'Password needs at least one letter!';
    }
    if (preg_match('/.*\d+.*/i', $this->password) == 0) {
      $this->errorList[] = 'Password needs at least one number!';
    }

    return $this->errorList;
  }
} //END CLASS