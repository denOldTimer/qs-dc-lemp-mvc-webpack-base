<?php

namespace App\Models;

use App\Core\Model;

/**
 *  About
 */
class mUser extends Model
{

    /*
     * getRowCountUser : function to check if the user with password even exists
     * sc_users.username is not null, unique
     * sc_users.passwd is not null,
     * @params : $email    :    string
     * @params : $passwd    :    string  - encryption
     */
    public function getRowCountUser($email, $password)
    {
        $params = array(
            'email' => $email,
            'password' => $password
        );
        $query = "SELECT * FROM `users` WHERE `email` = :email AND `password` = :password ";
        return self::getRowCount($query, $params);
    }

    /*
     *    getRowCountUserName : function to check if the username already exists
     * sc_users.username is not null, unique
     * @params : $username    :    string
     */
    public function getRowCountEmail($email)
    {
        $params = array(
            'email' => $email
        );
        $query = "SELECT * FROM `users` WHERE email = :email ";
        return self::getRowCount($query, $params);
    }
    /*
     *    getUser : function to get user
     * sc_users.email is not null, unique
     * @params : $email    :    string
     */
    public function getUser($email, $password)
    {
        $params = array(
            'email' => $email,
            'password' => $password
        );
        $query = "SELECT * FROM `users` WHERE `email` = :email AND `password` = :password ";
        return self::readByName($query, $params);
    }


    public function getUserById($id)
    {

        $query = "SELECT * FROM `users` WHERE `id` = :id ";
        $params = array(
            "id" => $id
        );
        return self::readById($query, $params);
    }

    public function getUserAll()
    {
        $query = "SELECT * FROM `users`";
        return self::readAll($query);
    }
} //END CLASS