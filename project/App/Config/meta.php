<?php

// **  This is the meta-data page for the project **

date_default_timezone_set('Europe/Brussels');

$company_name = "QuickStart";
$company_description = "Design & Development of Web Solutions";
$company_keywords = "Webdevelopment, Industrial, Belgium, Europe";
$company_domain_name = "domain.com";
$company_url = "http://domain.com";
$company_img_dir = "http://domain.be/img/base-image.png";

$html_encoding = "UTF-8";
$html_type = "website";
$html_base_homepage_language = "en";
$html_base_homepage_namespace = "Site";
$html_base_homepage_controller = "Home";
$html_base_homepage_action = "index";
$html_base_homepage_path = "site/home";



$copy_right_years = '2006';
$copy_right_years .= " - ";
$copy_right_years .= date("Y");
$copy_right_years .= " - ";

$google_verification_code = "------ Google Verification Code -------";

$twitter_handle = "@YourTwitterHandle";
$twitter_domain = "Your Domain";

$pintRest_verification_code = "------ Pintrest Verification Code -------";



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
  'scPintRestKey'                 =>    $pintRest_verification_code,
  'scMetaScorpio'                 =>    $scorpio,
  'scMetaCopyYears'               =>    $copy_right_years,
  'scMetaCopyLink'                =>    $copy_right_link,
);


/**
 * Extend the array by adding more variables.
 * Do not forget the "" , "" between array entries.
 */
