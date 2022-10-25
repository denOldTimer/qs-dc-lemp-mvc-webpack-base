<?php

// **  This is the meta-data page for the project **

date_default_timezone_set('Europe/Brussels');

$company_name = "Widepack";


$html_encoding = "UTF-8";
$html_type = "website";
$html_base_homepage_language = "en";
$html_base_homepage_namespace = "Site";
$html_base_homepage_controller = "Home";
$html_base_homepage_action = "index";
$html_base_homepage_path = "site/home";



// ** In principle you do not need to edit pas this point **


return array(
  'scCharset'                 =>    $html_encoding,
  'scLanguage'                =>    $html_base_homepage_language, //gets modified by the requested controller
  'scNamespace'               =>    $html_base_homepage_language, //gets modified by the requested controller
  'scController'              =>    $html_base_homepage_controller, //gets modified by the requested controller
  'scAction'                  =>    $html_base_homepage_action, //gets modified by the requested controller
  'scPath'                    =>    $html_base_homepage_path, //gets modified by the requested controller
  'scSiteName'                =>    $company_name,
);


/**
 * Extend the array by adding more variables.
 * Do not forget the "" , "" between array entries.
 */