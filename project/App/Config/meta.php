<?php

// **  This is the meta-data page for the project **

date_default_timezone_set('Europe/Brussels');

$company_name = "Widepack";
$company_description = "Your Solution in Industrial Packaging";
$company_keywords = "Widepack, Packaging, Industrial, Belgium, Europe";
$company_domain_name = "Widepack.be";
$company_url = "http://widepack.be";
$company_img_dir = "http://widepack.be/img/widepack-hq.png";

$html_encoding = "UTF-8";
$html_type = "website";
$html_base_homepage_language = "en";
$html_base_homepage_namespace = "Site";
$html_base_homepage_controller = "Home";
$html_base_homepage_action = "index";
$html_base_homepage_path = "site/home";


$copy_right_begin_year = "2006";
$copy_right = "&copy ";
$copy_right .= $copy_right_begin_year;
$copy_right .= " - ";
$copy_right .= date("Y");
$copy_right .= " - ";
$copy_right .= "<a class='domain-name' href=" . $company_url . " >" . $company_domain_name . "</a>";

$google_verification_code = "------ Google Verification Code -------";

$twitter_handle = "@YourTwitterHandle";
$twitter_domain = "Widepack";

$pintrest_verification_code = "------ Pintrest Verification Code -------";



// ** In principle you do not need to edit pas this point **


return array(
  'scMetaCharset'                 =>    $html_encoding,
  'scMetaLanguage'                =>    $html_base_homepage_language, //gets modified by the requested controller
  'scMetaNamespace'               =>    $html_base_homepage_language, //gets modified by the requested controller
  'scMetaController'              =>    $html_base_homepage_controller, //gets modified by the requested controller
  'scMetaAction'                  =>    $html_base_homepage_action, //gets modified by the requested controller
  'scMetaPath'                    =>    $html_base_homepage_path, //gets modified by the requested controller
  'scMetaGoogleSiteVerification'  =>    $google_verification_code,
  'scMetaDescription'             =>    $company_description,
  'scMetaKeywords'                =>    $company_keywords,
  'scMetaCopyright'               =>    $copy_right,
  'scMetaOgSiteName'              =>    $company_name,
  'scMetaOgUrl'                   =>    $company_url,
  'scMetaOgType'                  =>    $html_type,
  'scMetaOgTitle'                 =>    $html_base_homepage_controller, //gets modified by the requested controller
  'scMetaOgDescription'           =>    $company_description,
  'scMetaOgImage'                 =>    $company_img_dir,
  'scTwitterSite'                 =>    $twitter_handle,
  'scTwitterDomain'               =>    $twitter_domain,
  'scPintrestKey'                 =>    $pintrest_verification_code
);


/**
 * Extend the array by adding more variables.
 * Do not forget the "" , "" between array entries.
 */