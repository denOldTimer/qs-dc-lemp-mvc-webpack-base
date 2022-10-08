<?php

namespace App\Core;

use PDO;
use Exception;

/**
 * Base Model
 */
class Model extends Database
{
  protected static $db = null;

  /** The database Connection
   * 
   * 
   */
  public function __construct()
  {
    parent::__construct();
  }

  /**
   * THE CRUD SYSTEM
   * - Create
   * - Read
   * - Update
   * - Delete
   */

  /** The CreateById Method
   * 
   * 
   */
  public function createByTitle($query, $args)
  {
    $dB = self::getdb();

    if ($query && $args) {
      $stmt = $dB->prepare($query);
      foreach ($args as $key => $value) {
        $stmt->bindValue("$key", $value);
      }
      $stmt->execute() ? $res = "true" : $res = "false";
      //$id = $dB->lastInsertId();

      return $res;
    } else {
      echo ('ERROR: createById - empty query and nor parameters');
    }
  }



  /** The ReadAll Method
   * 
   * @param string $query A SQL string statement
   * @return ASSOC MIXED ARRAY
   */
  public function readAll($query)
  {
    $dB = self::getdb();
    if ($query) {
      $stmt = $dB->prepare($query);
      $stmt->execute();
      return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } else {
      echo ('ERROR: readAll - empty query');
    }
  }

  /** The ReadById Method
   * 
   * @param string $query A SQL string statement
   * @param array $args Parameters to bind
   * @return ASSOC MIXED ARRAY
   */
  public function readById($query, $args)
  {
    $dB = self::getdb();

    if ($query && $args) {
      $stmt = $dB->prepare($query);
      foreach ($args as $key => $value) {
        $stmt->bindValue("$key", $value);
      }
      $stmt->execute();

      return $stmt->fetch(PDO::FETCH_ASSOC);
    } else {
      echo ('ERROR: readById - empty query and nor parameters');
    }
  }


  /** The ReadByTitle Method
   * 
   * @param string $query A SQL string statement
   * @param array $args Parameters to bind
   * @return ASSOC MIXED ARRAY
   */
  public function readByName($query, $args)
  {
    $dB = self::getdb();

    if ($query && $args) {
      $stmt = $dB->prepare($query);
      foreach ($args as $key => $value) {
        $stmt->bindValue("$key", $value);
      }
      $stmt->execute();
      return $stmt->fetch(PDO::FETCH_ASSOC);
    } else {
      echo ('ERROR: readByTitle - empty query and nor parameters');
    }
  }


  /** The UpdateById Method
   * 
   * 
   */
  public function updateById($query, $params)
  {
    $dB = self::getdb();

    if ($query && $params) {
      $stmt = $dB->prepare($query);
      foreach ($params as $key => $value) {
        $stmt->bindValue("$key", $value);
      }
      $stmt->execute() ? $res = "true" : $res = "false";

      return $res;
    } else {
      echo ('ERROR: updateById - empty query and nor parameters');
    }
  }



  /** The DeleteById Method
   * 
   * 
   */
  public function deleteById($query, $params)
  {
    $dB = self::getdb();

    if ($query && $params) {
      $stmt = $dB->prepare($query);
      foreach ($params as $key => $value) {
        $stmt->bindValue("$key", $value);
      }
      $stmt->execute() ? $res = "true" : $res = "false";

      return $res;
    } else {
      echo ('ERROR: deleteById - empty query and nor parameters');
    }
  }


  /** The getRowCount Method
   * 
   * 
   */
  public function getRowCount($query, $params)
  {
    $dB = self::getdb();

    if ($query && $params) {
      $stmt = $dB->prepare($query);
      foreach ($params as $key => $value) {
        $stmt->bindValue("$key", $value);
      }
      $stmt->execute();

      return $stmt->rowCount();
    } else {
      echo ('ERROR: updateById - empty query and nor parameters');
    }
  }
} //END-CLASS