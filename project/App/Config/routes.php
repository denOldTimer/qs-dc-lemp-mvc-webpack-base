<?php

/** !!!! BE SPECIFIC WHEN CREATING ROUTES !!!!
 * 
 * The Generic examples is to give you an idea how to create routes
 * 
 */

return (object) array(


  //FRONTEND - GET REQUESTS
  //1. REQUEST_URI is empty,
  '' => ['lang' => 'en', 'namespace' => 'Site', 'controller' => 'Home', 'action' => 'index'],
  '/' => ['lang' => 'en', 'namespace' => 'Site', 'controller' => 'Home', 'action' => 'index'],
  //2. REQUEST_URI has no action => index
  '/home'  => ['lang' => 'en', 'namespace' => 'Site', 'controller' => 'Home', 'action' => 'index'],

  '/{lang}/home'            => ['namespace' => 'Site', 'controller' => 'Home', 'action' => 'index'],

  '/{lang}/home/index'      => ['namespace' => 'Site', 'controller' => 'Home', 'action' => 'index'],

  '/theme'  => ['lang' => 'en', 'namespace' => 'Site', 'controller' => 'Theme', 'action' => 'index'],
  '/markdown'  => ['lang' => 'en', 'namespace' => 'Site', 'controller' => 'Markdown', 'action' => 'index'],
  '/markdown/new'  => ['lang' => 'en', 'namespace' => 'Site', 'controller' => 'Markdown', 'action' => 'new'],

  //TODO PUT THE REST OF THE FRONTEND ROUTES IN THE DATABASE


  //BACKEND ROUTES
  '/admin'                      => ['lang' => 'en', 'namespace' => 'Admin', 'controller' => 'Login', 'action' => 'index'],
  '/admin/register'             => ['lang' => 'en', 'namespace' => 'Admin', 'controller' => 'Register', 'action' => 'index'],
  '/admin/register/create'      => ['lang' => 'en', 'namespace' => 'Admin', 'controller' => 'Register', 'action' => 'create'],
  '/admin/register/success'      => ['lang' => 'en', 'namespace' => 'Admin', 'controller' => 'Register', 'action' => 'success'],
  '/admin/login'                => ['lang' => 'en', 'namespace' => 'Admin', 'controller' => 'Login', 'action' => 'index'],
  '/admin/login/create'          => ['lang' => 'en', 'namespace' => 'Admin', 'controller' => 'Login', 'action' => 'create'],
  '/admin/logout'               => ['lang' => 'en', 'namespace' => 'Admin', 'controller' => 'Logout', 'action' => 'index'],
  '/admin/dashboard'            => ['lang' => 'en', 'namespace' => 'Admin', 'controller' => 'Dashboard', 'action' => 'index'],
  '/admin/users'                => ['lang' => 'en', 'namespace' => 'Admin', 'controller' => 'Users', 'action' => 'index'],

  '/{lang}/admin/register'            => ['namespace' => 'Admin', 'controller' => 'Register', 'action' => 'index'],
  '/{lang}/admin/register/create'     => ['namespace' => 'Admin', 'controller' => 'Register', 'action' => 'create'],
  '/{lang}/admin/register/success'     => ['namespace' => 'Admin', 'controller' => 'Register', 'action' => 'success'],
  '/{lang}/admin/login'               => ['namespace' => 'Admin', 'controller' => 'Login', 'action' => 'index'],
  '/{lang}/admin/login/create'         => ['namespace' => 'Admin', 'controller' => 'Login', 'action' => 'create'],
  '/{lang}/admin/logout'              => ['namespace' => 'Admin', 'controller' => 'Logout', 'action' => 'index'],
  '/{lang}/admin/dashboard'           => ['namespace' => 'Admin', 'controller' => 'Dashboard', 'action' => 'index'],
  '/{lang}/admin/users'               => ['namespace' => 'Admin', 'controller' => 'Users', 'action' => 'index'],












  //END-Object
);



/** GENERIC ROUTES BYPASS THE ERROR 404 PAGE NOT FOUND SO DO NOT USE IF POSABLE
 * 
 *   GENERIC ROUTES DO NOT NEED PARAMETERS THUS THE EMPTY ARRAY
 * 
 *   BACKEND ROUTES WITH NAMESPACES
 *    '/{namespace}/{controller}/{action}/{id:\d+}/{ptitle}' => [''],
 * 
 *   BACKEND ROUTES WITH PREDETERMINED NAMESPACES
 *    '/api/{controller}/{action}/{id:\d+}/{ptitle}' => ['namespace' => 'Api'],
 * 
 *   BACKEND ROUTES WITH NAMESPACES WITH TRANSLATION
 *    '/{lang}/{namespace}/{controller}/{action}/{id:\d+}/{ptitle}' => [''],
 * 
 * 
 * 
 * 
 * ---------------------- Router Samples ---- how to be more exact in your routing ------------------
 * 
 * '{lang}/{controller}/{action}/{data}', ['data => $data'] 
 * '{controller}/{action}/{name}' , [ 'controller' => 'Contact', 'action' => 'success' ] 
 * '{controller}/{action}/{id:\d+}/{title}' , [ 'controller' => 'BlogList', 'action' => 'index' ] 
 * '{controller}/{action}/{id:\d+}/{title}' , [ 'controller' => 'Blog', 'action' => 'page' ]
 * 
 * ---------------------- Router Samples ---- how to be more exact in your routing ------------------
 * 
 * 
 * 
 */
