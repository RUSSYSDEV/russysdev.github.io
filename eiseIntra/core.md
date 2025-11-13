---
layout: docs
title: "eiseIntra core classes"
sidebar_left:
  title: "PHP Classes"
  class: "rsd-navbar-left"
  id: "rsd-navbar_left"
  folders:
    - title: "class eiseIntra:"
      url: "#cls_eiseintra"
      folders:

      - title: "public properties:"
        folders:

        - title: "$arrUsrData"
          url: "#eiseintra_prop_arrusrdata"

        - title: "$usrID"
          url: "#eiseintra_prop_usrid"

        - title: "$conf"
          url: "#eiseintra_prop_conf"

        - title: "$local"
          url: "#eiseintra_prop_local"

      - title: "static properties:"
        folders:

        - title: "$defaultConf"
          url: "#eiseintra_prop_defaultconf"

        - title: "$arrKeyboard"
          url: "#eiseintra_prop_arrkeyboard"

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eiseintra_fn___construct"

        - title: "decodeAuthString()"
          url: "#eiseintra_fn_decodeauthstring"

        - title: "encodeAuthString()"
          url: "#eiseintra_fn_encodeauthstring"

        - title: "getEncryptionKey()"
          url: "#eiseintra_fn_getencryptionkey"

        - title: "encrypt()"
          url: "#eiseintra_fn_encrypt"

        - title: "decrypt()"
          url: "#eiseintra_fn_decrypt"

        - title: "password_hash()"
          url: "#eiseintra_fn_password_hash"

        - title: "password_verify()"
          url: "#eiseintra_fn_password_verify"

        - title: "Authenticate()"
          url: "#eiseintra_fn_authenticate"

        - title: "session_initialize()"
          url: "#eiseintra_fn_session_initialize"

        - title: "logout()"
          url: "#eiseintra_fn_logout"

        - title: "getUserRoles()"
          url: "#eiseintra_fn_getuserroles"

        - title: "checkPermissions()"
          url: "#eiseintra_fn_checkpermissions"

        - title: "topLevelMenu()"
          url: "#eiseintra_fn_toplevelmenu"

        - title: "menu()"
          url: "#eiseintra_fn_menu"

        - title: "menuItem()"
          url: "#eiseintra_fn_menuitem"

        - title: "actionMenu()"
          url: "#eiseintra_fn_actionmenu"

        - title: "requireComponent()"
          url: "#eiseintra_fn_requirecomponent"

        - title: "redirect()"
          url: "#eiseintra_fn_redirect"

        - title: "backref()"
          url: "#eiseintra_fn_backref"

        - title: "json()"
          url: "#eiseintra_fn_json"

        - title: "file()"
          url: "#eiseintra_fn_file"

        - title: "batchStart()"
          url: "#eiseintra_fn_batchstart"

        - title: "batchEcho()"
          url: "#eiseintra_fn_batchecho"

        - title: "setUserMessage()"
          url: "#eiseintra_fn_setusermessage"

        - title: "getUserMessage()"
          url: "#eiseintra_fn_getusermessage"

        - title: "getRoleUsers()"
          url: "#eiseintra_fn_getroleusers"

        - title: "checkLanguage()"
          url: "#eiseintra_fn_checklanguage"

        - title: "translate()"
          url: "#eiseintra_fn_translate"

        - title: "addTranslationKey()"
          url: "#eiseintra_fn_addtranslationkey"

        - title: "readSettings()"
          url: "#eiseintra_fn_readsettings"

        - title: "setting()"
          url: "#eiseintra_fn_setting"

        - title: "field()"
          url: "#eiseintra_fn_field"

        - title: "fieldset()"
          url: "#eiseintra_fn_fieldset"

        - title: "form()"
          url: "#eiseintra_fn_form"

        - title: "showTextBox()"
          url: "#eiseintra_fn_showtextbox"

        - title: "showTextArea()"
          url: "#eiseintra_fn_showtextarea"

        - title: "showButton()"
          url: "#eiseintra_fn_showbutton"

        - title: "showCombo()"
          url: "#eiseintra_fn_showcombo"

        - title: "showCheckBox()"
          url: "#eiseintra_fn_showcheckbox"

        - title: "showRadio()"
          url: "#eiseintra_fn_showradio"

        - title: "showRadioByArray()"
          url: "#eiseintra_fn_showradiobyarray"

        - title: "showAjaxDropdown()"
          url: "#eiseintra_fn_showajaxdropdown"

        - title: "isEditable()"
          url: "#eiseintra_fn_iseditable"

        - title: "loadJS()"
          url: "#eiseintra_fn_loadjs"

        - title: "loadCSS()"
          url: "#eiseintra_fn_loadcss"

        - title: "dataAction()"
          url: "#eiseintra_fn_dataaction"

        - title: "dataRead()"
          url: "#eiseintra_fn_dataread"

        - title: "getDateTimeByOperationTime()"
          url: "#eiseintra_fn_getdatetimebyoperationtime"

        - title: "showDatesPeriod()"
          url: "#eiseintra_fn_showdatesperiod"

      - title: "static methods:"
        folders:

        - title: "confVariations()"
          url: "#eiseintra_fn_confvariations"

        - title: "getFullHREF()"
          url: "#eiseintra_fn_getfullhref"

        - title: "getKeyboardVariations()"
          url: "#eiseintra_fn_getkeyboardvariations"

        - title: "debug()"
          url: "#eiseintra_fn_debug"

      - title: "protected methods:"
        folders:

        - title: "buildLess()"
          url: "#eiseintra_fn_buildless"




    - title: "class eiseIntraData:"
      url: "#cls_eiseintradata"
      folders:

      - title: "static properties:"
        folders:

        - title: "$arrIntraDataTypes"
          url: "#eiseintradata_prop_arrintradatatypes"

      - title: "public methods:"
        folders:

        - title: "formatByType2PHP()"
          url: "#eiseintradata_fn_formatbytype2php"

        - title: "formatByType2SQL()"
          url: "#eiseintradata_fn_formatbytype2sql"

        - title: "result2JSON()"
          url: "#eiseintradata_fn_result2json"

        - title: "unq()"
          url: "#eiseintradata_fn_unq"

        - title: "decPHP2SQL()"
          url: "#eiseintradata_fn_decphp2sql"

        - title: "decSQL2PHP()"
          url: "#eiseintradata_fn_decsql2php"

        - title: "dateSQL2PHP()"
          url: "#eiseintradata_fn_datesql2php"

        - title: "datetimeSQL2PHP()"
          url: "#eiseintradata_fn_datetimesql2php"

        - title: "datePHP2SQL()"
          url: "#eiseintradata_fn_datephp2sql"

        - title: "datetimePHP2SQL()"
          url: "#eiseintradata_fn_datetimephp2sql"

        - title: "getTableInfo()"
          url: "#eiseintradata_fn_gettableinfo"

        - title: "getSQLValue()"
          url: "#eiseintradata_fn_getsqlvalue"

        - title: "getMultiPKCondition()"
          url: "#eiseintradata_fn_getmultipkcondition"

        - title: "getDataFromCommonViews()"
          url: "#eiseintradata_fn_getdatafromcommonviews"

        - title: "arrPHP2SQL()"
          url: "#eiseintradata_fn_arrphp2sql"

        - title: "arrSQL2PHP()"
          url: "#eiseintradata_fn_arrsql2php"

        - title: "getSQLFields()"
          url: "#eiseintradata_fn_getsqlfields"

      - title: "static methods:"
        folders:

        - title: "getBasicDataType()"
          url: "#eiseintradata_fn_getbasicdatatype"

        - title: "getIntraDataType()"
          url: "#eiseintradata_fn_getintradatatype"

        - title: "getDecimalPlaces()"
          url: "#eiseintradata_fn_getdecimalplaces"




    - title: "class eiseSQL:"
      url: "#cls_eisesql"
      folders:

      - title: "public properties:"
        folders:

        - title: "$arrIntra2DBTypeMap"
          url: "#eisesql_prop_arrintra2dbtypemap"

        - title: "$arrDBTypeMap"
          url: "#eisesql_prop_arrdbtypemap"

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eisesql_fn___construct"

        - title: "connect()"
          url: "#eisesql_fn_connect"

        - title: "selectDB()"
          url: "#eisesql_fn_selectdb"

        - title: "e()"
          url: "#eisesql_fn_e"

        - title: "unq()"
          url: "#eisesql_fn_unq"

        - title: "secure()"
          url: "#eisesql_fn_secure"

        - title: "q()"
          url: "#eisesql_fn_q"

        - title: "n()"
          url: "#eisesql_fn_n"

        - title: "f()"
          url: "#eisesql_fn_f"

        - title: "fa()"
          url: "#eisesql_fn_fa"

        - title: "ff()"
          url: "#eisesql_fn_ff"

        - title: "i()"
          url: "#eisesql_fn_i"

        - title: "a()"
          url: "#eisesql_fn_a"

        - title: "d()"
          url: "#eisesql_fn_d"

        - title: "startProfiling()"
          url: "#eisesql_fn_startprofiling"

        - title: "showProfileInfo()"
          url: "#eisesql_fn_showprofileinfo"

        - title: "getProfileInfo()"
          url: "#eisesql_fn_getprofileinfo"

        - title: "getTableInfo()"
          url: "#eisesql_fn_gettableinfo"




sidebar_right:
  title: "By category"
  class: "rsd-navbar-right"
  id: "rsd-navbar_right"
  folders:
    - title: "Authentication"
      folders:

      - title: "eiseIntra::__construct()"
        url: "#eiseintra_fn___construct"
        folders:

      - title: "eiseIntra::$arrUsrData"
        url: "#eiseintra_prop_arrusrdata"
        folders:

      - title: "eiseIntra::Authenticate()"
        url: "#eiseintra_fn_authenticate"
        folders:

      - title: "eiseIntra::checkPermissions()"
        url: "#eiseintra_fn_checkpermissions"
        folders:

      - title: "eiseIntra::decodeAuthString()"
        url: "#eiseintra_fn_decodeauthstring"
        folders:

      - title: "eiseIntra::decrypt()"
        url: "#eiseintra_fn_decrypt"
        folders:

      - title: "eiseIntra::encodeAuthString()"
        url: "#eiseintra_fn_encodeauthstring"
        folders:

      - title: "eiseIntra::encrypt()"
        url: "#eiseintra_fn_encrypt"
        folders:

      - title: "eiseIntra::getRoleUsers()"
        url: "#eiseintra_fn_getroleusers"
        folders:

      - title: "eiseIntra::getUserRoles()"
        url: "#eiseintra_fn_getuserroles"
        folders:

      - title: "eiseIntra::logout()"
        url: "#eiseintra_fn_logout"
        folders:

      - title: "eiseIntra::password_hash()"
        url: "#eiseintra_fn_password_hash"
        folders:

      - title: "eiseIntra::password_verify()"
        url: "#eiseintra_fn_password_verify"
        folders:

      - title: "eiseIntra::session_initialize()"
        url: "#eiseintra_fn_session_initialize"
        folders:

      - title: "eiseIntra::$usrID"
        url: "#eiseintra_prop_usrid"
        folders:

    - title: "Authorization"
      folders:

      - title: "eiseIntra::checkPermissions()"
        url: "#eiseintra_fn_checkpermissions"
        folders:

      - title: "eiseIntra::getRoleUsers()"
        url: "#eiseintra_fn_getroleusers"
        folders:

      - title: "eiseIntra::getUserRoles()"
        url: "#eiseintra_fn_getuserroles"
        folders:

    - title: "Batch run"
      folders:

      - title: "eiseIntra::batchEcho()"
        url: "#eiseintra_fn_batchecho"
        folders:

      - title: "eiseIntra::batchStart()"
        url: "#eiseintra_fn_batchstart"
        folders:

    - title: "Configuration"
      folders:

      - title: "eiseIntra::__construct()"
        url: "#eiseintra_fn___construct"
        folders:

      - title: "eiseIntra::$conf"
        url: "#eiseintra_prop_conf"
        folders:

      - title: "eiseIntra::$defaultConf"
        url: "#eiseintra_prop_defaultconf"
        folders:

      - title: "eiseIntra::readSettings()"
        url: "#eiseintra_fn_readsettings"
        folders:

      - title: "eiseIntra::requireComponent()"
        url: "#eiseintra_fn_requirecomponent"
        folders:

    - title: "Data formatting"
      folders:

      - title: "eiseIntraData::datePHP2SQL()"
        url: "#eiseintradata_fn_datephp2sql"
        folders:

      - title: "eiseIntraData::dateSQL2PHP()"
        url: "#eiseintradata_fn_datesql2php"
        folders:

      - title: "eiseIntraData::datetimePHP2SQL()"
        url: "#eiseintradata_fn_datetimephp2sql"
        folders:

      - title: "eiseIntraData::datetimeSQL2PHP()"
        url: "#eiseintradata_fn_datetimesql2php"
        folders:

      - title: "eiseIntraData::decPHP2SQL()"
        url: "#eiseintradata_fn_decphp2sql"
        folders:

      - title: "eiseIntraData::decSQL2PHP()"
        url: "#eiseintradata_fn_decsql2php"
        folders:

      - title: "eiseIntraData::formatByType2PHP()"
        url: "#eiseintradata_fn_formatbytype2php"
        folders:

      - title: "eiseIntraData::formatByType2SQL()"
        url: "#eiseintradata_fn_formatbytype2sql"
        folders:

      - title: "eiseIntraData::getDecimalPlaces()"
        url: "#eiseintradata_fn_getdecimalplaces"
        folders:

      - title: "eiseIntraData::getSQLValue()"
        url: "#eiseintradata_fn_getsqlvalue"
        folders:

      - title: "eiseIntraData::unq()"
        url: "#eiseintradata_fn_unq"
        folders:

      - title: "eiseSQL::e()"
        url: "#eisesql_fn_e"
        folders:

      - title: "eiseSQL::secure()"
        url: "#eisesql_fn_secure"
        folders:

    - title: "Data Handling"
      folders:

      - title: "eiseIntra::$arrKeyboard"
        url: "#eiseintra_prop_arrkeyboard"
        folders:

      - title: "eiseIntra::dataAction()"
        url: "#eiseintra_fn_dataaction"
        folders:

      - title: "eiseIntra::dataRead()"
        url: "#eiseintra_fn_dataread"
        folders:

    - title: "Data Output"
      folders:

      - title: "eiseIntraData::result2JSON()"
        url: "#eiseintradata_fn_result2json"
        folders:

      - title: "eiseIntra::file()"
        url: "#eiseintra_fn_file"
        folders:

      - title: "eiseIntra::getDateTimeByOperationTime()"
        url: "#eiseintra_fn_getdatetimebyoperationtime"
        folders:

      - title: "eiseIntra::json()"
        url: "#eiseintra_fn_json"
        folders:

      - title: "eiseIntra::loadCSS()"
        url: "#eiseintra_fn_loadcss"
        folders:

      - title: "eiseIntra::loadJS()"
        url: "#eiseintra_fn_loadjs"
        folders:

      - title: "eiseIntra::showDatesPeriod()"
        url: "#eiseintra_fn_showdatesperiod"
        folders:

    - title: "Database routines"
      folders:

      - title: "eiseIntraData::getDataFromCommonViews()"
        url: "#eiseintradata_fn_getdatafromcommonviews"
        folders:

      - title: "eiseIntraData::getMultiPKCondition()"
        url: "#eiseintradata_fn_getmultipkcondition"
        folders:

      - title: "eiseSQL::__construct()"
        url: "#eisesql_fn___construct"
        folders:

      - title: "eiseSQL::a()"
        url: "#eisesql_fn_a"
        folders:

      - title: "eiseSQL::d()"
        url: "#eisesql_fn_d"
        folders:

      - title: "eiseSQL::e()"
        url: "#eisesql_fn_e"
        folders:

      - title: "eiseSQL::f()"
        url: "#eisesql_fn_f"
        folders:

      - title: "eiseSQL::fa()"
        url: "#eisesql_fn_fa"
        folders:

      - title: "eiseSQL::ff()"
        url: "#eisesql_fn_ff"
        folders:

      - title: "eiseSQL::getTableInfo()"
        url: "#eisesql_fn_gettableinfo"
        folders:

      - title: "eiseSQL::i()"
        url: "#eisesql_fn_i"
        folders:

      - title: "eiseSQL::n()"
        url: "#eisesql_fn_n"
        folders:

      - title: "eiseSQL::q()"
        url: "#eisesql_fn_q"
        folders:

      - title: "eiseSQL::secure()"
        url: "#eisesql_fn_secure"
        folders:

    - title: "Debug"
      folders:

      - title: "eiseIntra::debug()"
        url: "#eiseintra_fn_debug"
        folders:

      - title: "eiseSQL::getProfileInfo()"
        url: "#eisesql_fn_getprofileinfo"
        folders:

      - title: "eiseSQL::showProfileInfo()"
        url: "#eisesql_fn_showprofileinfo"
        folders:

      - title: "eiseSQL::startProfiling()"
        url: "#eisesql_fn_startprofiling"
        folders:

    - title: "Forms"
      folders:

      - title: "eiseIntra::field()"
        url: "#eiseintra_fn_field"
        folders:

      - title: "eiseIntra::fieldset()"
        url: "#eiseintra_fn_fieldset"
        folders:

      - title: "eiseIntra::form()"
        url: "#eiseintra_fn_form"
        folders:

      - title: "eiseIntra::isEditable()"
        url: "#eiseintra_fn_iseditable"
        folders:

      - title: "eiseIntra::showAjaxDropdown()"
        url: "#eiseintra_fn_showajaxdropdown"
        folders:

      - title: "eiseIntra::showButton()"
        url: "#eiseintra_fn_showbutton"
        folders:

      - title: "eiseIntra::showCheckBox()"
        url: "#eiseintra_fn_showcheckbox"
        folders:

      - title: "eiseIntra::showCombo()"
        url: "#eiseintra_fn_showcombo"
        folders:

      - title: "eiseIntra::showRadio()"
        url: "#eiseintra_fn_showradio"
        folders:

      - title: "eiseIntra::showRadioByArray()"
        url: "#eiseintra_fn_showradiobyarray"
        folders:

      - title: "eiseIntra::showTextArea()"
        url: "#eiseintra_fn_showtextarea"
        folders:

      - title: "eiseIntra::showTextBox()"
        url: "#eiseintra_fn_showtextbox"
        folders:

    - title: "i18n"
      folders:

      - title: "eiseIntra::addTranslationKey()"
        url: "#eiseintra_fn_addtranslationkey"
        folders:

      - title: "eiseIntra::$arrKeyboard"
        url: "#eiseintra_prop_arrkeyboard"
        folders:

      - title: "eiseIntra::checkLanguage()"
        url: "#eiseintra_fn_checklanguage"
        folders:

      - title: "eiseIntra::getKeyboardVariations()"
        url: "#eiseintra_fn_getkeyboardvariations"
        folders:

      - title: "eiseIntra::$local"
        url: "#eiseintra_prop_local"
        folders:

      - title: "eiseIntra::translate()"
        url: "#eiseintra_fn_translate"
        folders:

    - title: "Navigation"
      folders:

      - title: "eiseIntra::actionMenu()"
        url: "#eiseintra_fn_actionmenu"
        folders:

      - title: "eiseIntra::backref()"
        url: "#eiseintra_fn_backref"
        folders:

      - title: "eiseIntra::dataAction()"
        url: "#eiseintra_fn_dataaction"
        folders:

      - title: "eiseIntra::menu()"
        url: "#eiseintra_fn_menu"
        folders:

      - title: "eiseIntra::menuItem()"
        url: "#eiseintra_fn_menuitem"
        folders:

      - title: "eiseIntra::redirect()"
        url: "#eiseintra_fn_redirect"
        folders:

      - title: "eiseIntra::topLevelMenu()"
        url: "#eiseintra_fn_toplevelmenu"
        folders:

    - title: "Useful stuff"
      folders:

      - title: "eiseIntra::getKeyboardVariations()"
        url: "#eiseintra_fn_getkeyboardvariations"
        folders:

    - title: "Utilities"
      folders:

      - title: "eiseIntra::buildLess()"
        url: "#eiseintra_fn_buildless"
        folders:

      - title: "eiseIntra::confVariations()"
        url: "#eiseintra_fn_confvariations"
        folders:

---

eiseIntra core
===

Authentication, form elements display, data handling routines

__Version__: 2.3  
__Package__: eiseIntra  




## <a name="cls_eiseintra"></a>class __eiseIntra__

eiseIntra is the core class that encapsulates routines for authenication, form elements display, data handling, redirection and debug.

This class extends eiseIntraData as base class.

### <a name="eiseintra_prop_arrusrdata"></a>public property __$arrUsrData__

Array with data of currently logged user:  
- all user data from stbl_user table:
     - usrID - user ID
     - usrName - user name
     - usrNameLocal - user name in local language
     - usrPass - user password (password hash)
     - usrFlagDeleted - is user account deleted or not
     - usrPhone - user's office phone
     - usrEmail - user's email address
     - usrEmployeeID - employee table's ID
     - usrGUID - user GUID
     - usrCN - canonical name of the user
     - usrMobile - user's mobile phone
     - usrInsertBy - user ID who added the user
     - usrInsertDate - when user was added
     - usrEditBy - user ID who changed the user
     - usrEditDate - when user record was changed
- pagID - database page ID
- pagTitle (string) - page title in English
- pagTitleLocal (string) - page title in local language
- FlagRead (string*) - always '1'
- FlagCreate (string*) - '0' or '1', as set in database
- FlagUpdate (string*) - '0' or '1', as set in database
- FlagDelete (string*) - '0' or '1', as set in database
- FlagWrite (string*) - '0' or '1', as set in database
- array roles - array of role titles in currently selected language. Example: `['Managers', 'Users']`
- array roleIDs - array of role IDs. Example: `['MNG', 'USR']`

(*) - type is 'string' because of PHP function mysql_fetch_assoc()'s nature. It fetches anything like strings despite actual data type in the database.


For more details on how and when this data is obtained, please proceed to [eiseIntra::checkPermissions()](#eiseintra-checkpermissions).

__Category__: Authentication  



### <a name="eiseintra_prop_usrid"></a>public property __$usrID__

ID of current user.

__Category__: Authentication  



### <a name="eiseintra_prop_conf"></a>public property __$conf__

Configuration array. See description at [eiseIntra::$defaultConf](#eiseintra-deafultconf)

__Category__: Configuration  



### <a name="eiseintra_prop_local"></a>public property __$local__

This property is set to 'Local' when local language is selected by the user

__Category__: i18n  



### <a name="eiseintra_prop_defaultconf"></a>static property __$defaultConf__

Default configuration. Exact configuration parameters list is:

- 'dateFormat' - date format, default is "d.m.Y" 
- 'prgDate' - regular expression for input validation/converion
- 'prgDateReplaceTo' - replace parameter for preg_replace() for dates, to convert dates from local format to ISO
- 'timeFormat' - time format, default is "H:i" (24-hours time), both are according to PHP date() format function
- 'prgTime' - regular expression for input validation
- 'decimalPlaces' - default decimal places, "2" by default
- 'decimalSeparator' - decimal seprator, default is "."
- 'thousandsSeparator' - default is ","
- 'language' - local language, default is 'rus'
- 'logofftimeout' - log off timeout in minutes, default is 360 //6 hours
- 'addEiseIntraValueClass' - setting for for display true
- 'keyboards' - available keyboard variations (default are 'EN,RU')
- 'system' - eiseIntra path, last slash stripped (default is `ltrim(dirname($_SERVER['PHP_SELF']), '/')`
- 'dataActionKey' - 'DataAction', GET or POST key for data update or retrieval
- 'dataReadKey' - 'DataAction', GET or POST key for data update or retrieval
- 'flagSetGlobalCookieOnRedirect' - see [eiseIntra::getCookiePath()](#eiseintra-getcookiepath) function for details, default is false
- 'cachePreventorVar' - Query string parameter for cache prevention in link elements with CSS and JSS. E.g. 
- 'cookiePath' -  `(isset($eiseIntraCookiePath) ? $eiseIntraCookiePath : '/')`
- 'cookieExpire' - see [eiseIntra::getCookiePath()](#eiseintra-getcookiepath) function for details
- 'UserMessageCookieName' - for cookie used to store user messages, default is 'eiMsg'
- 'defaultPage' - the page that user see right after authentication.

```php
public static $defaultConf = array(
        'versionIntra'=>EISEINTRA_VERSION
        , 'dateFormat' => "d.m.Y" // 
        , 'timeFormat' => "H:i" // 
        , 'decimalPlaces' => "2"
        , 'decimalSeparator' => "."
        , 'thousandsSeparator' => ","
        , 'language' => 'rus'
        , 'logofftimeout' => 360 //6 hours
        , 'addEiseIntraValueClass' => true
        , 'keyboards' => 'EN,RU'
        , 'dataActionKey' => 'DataAction'
        , 'dataReadKey' => 'DataAction'
        , 'cachePreventorVar' => 'nc'
        , 'system' => 'nc'
        , 'cookiePath' => 'nc'
        , 'cookieExpire' => 'nc'
        , 'useBootstrap' => false
        , 'strAttrib' => ''
        , 'context' => ''
        , 'auto_translate'=>true
        , 'collect_keys'=>false
//       , 'flagSetGlobalCookieOnRedirect' = false
        , 'selItemMenu' => null
        , 'selItemTopLevelMenu' => null
        , 'defaultPage' => 'about.php'
        , 'pass_hash' => 'md5'
        , 'frame' => false
    );
```

__Category__: Configuration  



### <a name="eiseintra_prop_arrkeyboard"></a>static property __$arrKeyboard__

Array with keyboard layouts.
Key is layout code, value is string with characters in the order of keyboard keys.

```php
static $arrKeyboard = array(
        'EN' =>   'qwertyuiop[]asdfghjkl;\'\\zxcvbnm,./QWERTYUIOP{}ASDFGHJKL:"|ZXCVBNM<>?'
        , 'RU' => 'йцукенгшщзхъфывапролджэёячсмитьбю/ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЁЯЧСМИТЬБЮ?'
    );
```

__Category__: Data Handling
i18n  



### <a name="eiseintra_fn___construct"></a>public function ____construct()__

Constructor receives eiseSQL object with database connection as input parameter and performs object initialization with configuration options supplied in $conf array.

__Parameters__: 

* 	__$oSQL__ (eiseSQL) - MySQL connection object.
* 	__$conf__ (array) - associative array with configuration options. Defaults are set at [eiseIntra::$defaultConf](#eiseintra-deafultconf)

__Category__: Authentication
Configuration  



### <a name="eiseintra_fn_decodeauthstring"></a>public function __decodeAuthString()__

Function decodes authstring login:password
using decrypt() method

__Parameters__: 

* 	__$authstring__ (string) - Encoded string

__Returns__: array `[string $login, string $password]`

__Category__: Authentication  



### <a name="eiseintra_fn_encodeauthstring"></a>public function __encodeAuthString($login, $password)__

Function encodes authstring login:password
using encrypt() method.

__Parameters__: 

* 	__$login__ (string) - Login
* 	__$password__ (string) - Password

__Returns__: string Encoded authentication string.

__Category__: Authentication  



### <a name="eiseintra_fn_getencryptionkey"></a>public function __getEncryptionKey()__

This function returns combination of global variable $eiseIntraKey  
stored at eiseIntra's inc_config.php and server variable EISINTRA_KEY that can be set in Nginx or Apache config.
Key length is set to 128-bit (32 bytes/chars).

If concatentated key length is less that 32 bytes, all remaining places are padded with zeros (0).

When both keys are not set, function returns false and eiseIntra::encrypt() and eiseIntra::decrypt() are forced to work only as base64 encoder/decoder.

__Returns__: string Key or false, if both key parts are empty.



### <a name="eiseintra_fn_encrypt"></a>public function __encrypt($encrypt)__

Function encrypts a string with symmetric encryption 
using the key obtained from getEncryptionKey() method and current encoding algorithm 
(now RIJNDAEL_256 and mcrypt). In case mcrypt is missed in PHP or encryption key is empty, it encodes string with base64.

__Parameters__: 

* 	__$encrypt__ (string) - String to be encrypted.

__Returns__: string Encrypted string.

__Category__: Authentication  



### <a name="eiseintra_fn_decrypt"></a>public function __decrypt($decrypt)__

Function decrypts a string with symmetric decryption 
using the key obtained from getEncryptionKey() method and current encoding algorithm 
(now RIJNDAEL_256 and mcrypt). In case mcrypt is missed in PHP, it encodes string with base64.

__Parameters__: 

* 	__$encrypt__ (string) - String to be encrypted.

__Returns__: string Encrypted string.

__Category__: Authentication  



### <a name="eiseintra_fn_password_hash"></a>public function __password_hash($pass)__

This function returns password hash according to hashing method specified in $conf['pass_hash'].

__Parameters__: 

* 	__$pass__ (string) - The password, the string to be encrypted.

__Returns__: string Hash of given string.

__Category__: Authentication  



### <a name="eiseintra_fn_password_verify"></a>public function __password_verify($pass, $hash)__

This function verifies the password across the hash according to hashing method specified in $conf['pass_hash'].

__Parameters__: 

* 	__$pass__ (string) - The password.
* 	__$hash__ (string) - Hash string to be compared with.

__Returns__: string Hash of given string.

__Category__: Authentication  



### <a name="eiseintra_fn_authenticate"></a>public function __Authenticate()__

Function that checks authentication with credentials database using selected $method.
Now it supports the following methods:
1. LDAP - it checks credentials with specified GLOBAL $ldap_server with GLOBAL $ldap_domain
2. database (or DB) - it checks credentials with database table stbl_user
3. mysql - it checks credentials of MySQL database user supplied with $login and $password parameters. Together with authentication this 
Function returns true when authentication successfull, otherwise it returns false and $strError parameter 
variable becomes updated with authentication error message.

LDAP method was successfully tested with Active Directory on Windows 2000, 2003, 2008, 2008R2 servers.

__Parameters__: 

* 	__$login__ (string) - login name
* 	__$password__ (string) - password
* 	__$method__ (string) - authentication method. Can be 'LDAP', 'database'(equal to 'DB'), 'mysql'
* 	__$options__ (array) - Array
 - 'flagNoSession' (boolean) - Use true when you need one-time authentication without $_SESSION modification.
 - 'dbhost' (string) - Database host, used only with 'mysql' authentication method.
 - 'dbname' (string) - Database name. Default database to be selected with 'mysql' authentication method.

__Returns__: boolean authentication result: true on success, otherwise false.

__Category__: Authentication  



### <a name="eiseintra_fn_session_initialize"></a>public function __session_initialize()__

This function intialize session with session cookes placed at path set by $this->conf['cookiePath'] configuration variable.

__Category__: Authentication  



### <a name="eiseintra_fn_logout"></a>public function __logout()__

This function quits user session.

__Category__: Authentication  



### <a name="eiseintra_fn_getuserroles"></a>public function __getUserRoles($usrID = null)__

This function fills in $arrUsrData['roles'] and $arrUsrData['roleIDs'] arrays. Can be overriden for virtual roles.

NOTE: Role membership information is collected from stbl_role_user table basing on rluInsertDate timestamp, 
it should not be in the future. It is useful when some actions should be temporarily delegated to the other user in case of vacations, illness etc.

Page permissions can be set with eiseAdmin's GUI at < database >/Pages menu.
Role membership can be set by system's GUI at system's Setting/Access Control menu or <database>/Roles menu of eiseAdmin.

__Parameters__: 

* 	__$usrID__ (string) - user ID to get role membership info. If set, this function doesn't touch `$intra->arrUsrData['roles']` and `$intra->arrUsrData['roleIDs']`

__Returns__: array with role IDs as keys and role titles are values.

__Category__: Authentication
Authorization  



### <a name="eiseintra_fn_checkpermissions"></a>public function __checkPermissions( )__

This function checks current user's permissions on currently open script.
Also it checks session expiration time, and condition when user is blocked or not in the database.
Script name is obtained from `$_SERVER['SCRIPT_NAME']` global variable.
Permission information is collected from stbl_page_role table and calculated according to user role membership defined at stbl_role_user table.
Permissions are calulated in the following way:
- if at least one user's role is permitted to do something, it means that this user is permitted to to it.

If user has no permissions to 'Read' the script, function throws an exception.
When 'Read' permissions are confirmed for the user, function updates [$intra->arrUsrData property](#eiseintra-arrusrdata). Click on [this link](#eiseintra-arrusrdata) to see full description.

NOTE: Role membership information is collected from stbl_role_user table basing on rluInsertDate timestamp, 
it should not be in the future. It is useful when some actions should be temporarily delegated to the other user in case of vacations, illness etc.

Page permissions can be set with eiseAdmin's GUI at < database >/Pages menu.
Role membership can be set by system's GUI at system's Setting/Access Control menu or <database>/Roles menu of eiseAdmin.

__Returns__: array `$intra->arrUsrData`

__Category__: Authentication
Authorization  



### <a name="eiseintra_fn_toplevelmenu"></a>public function __topLevelMenu()__

This method returns content of top-level "jumper" menu as drop-down list. "Jumper" menu content goes with an associative array passed as parameter to this function.

__Parameters__: 

* 	$arrItems = array()
* 	$options = array()

__Category__: Navigation  



### <a name="eiseintra_fn_menu"></a>public function __menu($target = null)__

This method returns system menu `<ul>` HTML for menu structure.

__Parameters__: 

* 	__$target__ (string) - base target for all `<a href="...">` inside menu

__Returns__: string HTML with menu structure

__Category__: Navigation  



### <a name="eiseintra_fn_menuitem"></a>public function __menuItem($rw)__

This method is called __before__ each menu item <li> closure. 
You can add custom menu items/submenus in your own app overriding this method in the inherited class.

__Parameters__: 

* 	__$rw__ (string) - row info from stbl_page for current <li>

__Returns__: string HTML with submenu structure

__Category__: Navigation  



### <a name="eiseintra_fn_actionmenu"></a>public function __actionMenu()__

This method returns HTML for "action menu" - the menu that displayed above the functional part of the screen. Menu content is set by __$arrActions__ parameter, the set of associative arrays with menu items.
Menu item definition array consists of the following properties:
array[] - menu item set. No nested menu items, no dropdowns in this version.  
 - 'id'      (string) - (optional) HTML attribute "id" content
 - 'title'   (string) - Menu item title
 - 'action'  (string) - Menu item HREF attribute content. If it starts with 'javascript:' JS call will be encapsulated under ONCLICK attribute.
 - 'targer'  (string) - (optional) TARGET attribute content
 - 'class'   (string) - (optional) CLASS attribute content
All these attributes are related to A element that correspond to given menu item.

__Parameters__: 

* 	__$arrActions__ (array) - (See above)
* 	__$flagShowLink__ (boolean) - The flag that defines is there a need to show 'Link' menu element on the right, in case when page opened within a frame. FALSE by default.

__Returns__: string HTML for "action menu".

__Category__: Navigation  



### <a name="eiseintra_fn_requirecomponent"></a>public function __requireComponent($components)__

This method includes specified $components into your PHP code by calling corresponding include() PHP functions and filling out __$arrJS__ and __$arrCSS__ arrays.

__Parameters__: 

* 	__$components__ (variant) - Array or string with eiseIntra's component name. Name set can be the following:
- base - core components, they're included by default
- batch - JavaScripts necessary to run batches
- list - eiseList
- grid - eiseGrid
- actions - entity flow routines

__Category__: Configuration  



### <a name="eiseintra_fn_redirect"></a>public function __redirect()__

This method adds HTTP header "Location" that redirects user to URL/URI specified in $strLocation, with text message to be shown on this page, specified in $strMessage parameter.  

Message will be shown on eiseIntra enabled page, using `$('body').eiseIntra('showMessage')` function that will fire right after `$(document).ready()` event.  

Message will be saved for display using cookies. By default cookie path is the path part of $strLocation URL. If $intra->conf['flagSetGlobalCookieOnRedirect'] is TRUE, cookie path will be set by global constant $this->conf['cookiePath'].  

This property can be overriden for this function with the $arrConfig[] parameter member 'flagSetGlobalCookieOnRedirect' = TRUE/FALSE. It can be useful when you need to redirect user from project subdirectory to the script placed at the root one, for example:

```
$intra->redirect('Operation successfull', '/myproject/item_form.php?itemID=12345'); 
// normal redirect within the project
```
``` 
$intra->redirect('Bye-bye, see you later', '/byebye.php', array('flagSetGlobalCookieOnRedirect'=>true)); 
// when $this->conf['cookiePath']='/' and you redirect user to the root dir of your web server.
```

__Parameters__: 

* 	__$strMessage__ (string) - Message content.
* 	__$strLocation__ (string) - header('Location: {}') parameter
* 	__$arrConfig__ (array) - Array with one usable boolean property: flagSetGlobalCookieOnRedirect. See above.

__Returns__: nothing, script execution terminates.

__Category__: Navigation  



### <a name="eiseintra_fn_backref"></a>public function __backref($urlIfNoReferer=null)__

This method returns proper 'Back' reference for this button in Action Menu. If $_SERVER['HTTP_REFERER'] doesn't contain current URI, it set a cookie with referring page.  

Otherwise, it use this cookie value, and if it's absent, it returns $urlIfNoReferer parameter.  

It works like this: when user arrives to given form via hyperlink in list or other form, or whatever that leaves HTTP_REFERER header, it returns this value and saves a cookie with that URL, with this form path. When user saves data on this form it appears back without this HTTP header and 'Back' button needs proper value. It takes it from cookie (if it exists) or from specified parameter.  

```
$arrActions[] = array('title'=>'Back', 'action'=>$intra->backref('myitems_list.php')); 
// it will return user to the item list by default
```

__Parameters__: 

* 	__$urlIfNoReferer__ (string) - URL(URI) for 'Back' reference in case when there's no $_SERVER['HTTP_REFERER'] or $_SERVER['HTTP_REFERER'] leads from itself.

__Returns__: string URL

__Category__: Navigation  



### <a name="eiseintra_fn_json"></a>public function __json($status, $message, $data=null)__

Function outputs JSON-encoded response basing on intra specification and terminates the script.

__Parameters__: 

* 	__$status__ (string) - response status. 'ok' should be set in case of successfull execution
* 	__$message__ (string) - status message to be displayed to the user
* 	__$data__ (variant) - data to be transmitted

__Category__: Data Output  



### <a name="eiseintra_fn_file"></a>public function __file($name, $type, $pathOrData)__

Function outputs binary stuff to the user.

__Parameters__: 

* 	__$name__ (string) - file name in UTF-8
* 	__$type__ (string) - MIME-type of the content
* 	__$pathOrData__ (variant) - if realpath() returns true for this variable, system will read the file. Otherwise it outputs the data as is.

__Category__: Data Output  



### <a name="eiseintra_fn_batchstart"></a>public function __batchStart($conf = array())__

This function outputs necessary stuff to start batch data operation script.
WARNING: this function closes existing session using session_write_close(), so avoid changing $_SESSION variables in your batch processing script.

__Parameters__: 

* 	$conf = array()

__Category__: Batch run  



### <a name="eiseintra_fn_batchecho"></a>public function __batchEcho($string)__

This function outputs data at batch data operation script, adds htmlspecialchars() and flushes output buffer.

__Parameters__: 

* 	$string

__Category__: Batch run  



### <a name="eiseintra_fn_setusermessage"></a>public function __setUserMessage($strMessage, $conf = array())__

This function sets user message to the cookie.

__Parameters__: 

* 	__$strMessage__ (string) - with user message
* 	__$conf__ (array) - param



### <a name="eiseintra_fn_getusermessage"></a>public function __getUserMessage()__

This function retrieves user message from the cookie and deletes the cookie itself.

__Returns__: string with user message



### <a name="eiseintra_fn_getroleusers"></a>public function __getRoleUsers($rolID)__

This method returns array of role users by role ID

__Parameters__: 

* 	__$rolID__ (int) - role ID

__Returns__: array of user ID's

__Category__: Authentication
Authorization  



### <a name="eiseintra_fn_checklanguage"></a>public function __checkLanguage()__

This function initialize what language to use: local or global

__Category__: i18n  



### <a name="eiseintra_fn_translate"></a>public function __translate($key)__

An analog of industrial standard __() function, $intra->translate() translates simple words/phrases to local language according to the system dictionary oridinarily located in < sys dir >/common/lang.php and included at auth.php. Now it supports sprintf() formatting, so it can translate phrases with format strings like "Item #%s is updated."

__Parameters__: 

* 	$key

__Category__: i18n  



### <a name="eiseintra_fn_addtranslationkey"></a>public function __addTranslationKey($key)__

This is service method that turns on translation key collection for further dictionary fill in (lang.php)

__Parameters__: 

* 	$key

__Category__: i18n  



### <a name="eiseintra_fn_readsettings"></a>public function __readSettings()__

This function reads `stbl_setup` table into `$intra->conf[]` array.

__Category__: Configuration  



### <a name="eiseintra_fn_setting"></a>public function __setting()__

This function is to read or write system variable values stored in stbl_setup.

__Parameters__: 

* 	__$stpVarName__ (string) - system setup variable name, e.g. 'docLifeTime'
* 	__$stpCharValue__ (string) - value for this system setup variable

__Returns__: variant if param $stpVarValue is omitted it returns current setting value, otherwise it returns null in case of successful value set or throws an exception if settings variable doesn't exist in the system



### <a name="eiseintra_fn_field"></a>public function __field()__

This function returns HTML for single field
If parameter $title is specified, it returns full HTML with container, label and input/text
If parameter $name is specified it returns HTML for input/text according to $value parameter
else it returns HTML specified in $value parameter.

__Parameters__: 

* 	$title
* 	$name=null
* 	$val_in=null
* 	$conf=array()

__Category__: Forms  



### <a name="eiseintra_fn_fieldset"></a>public function __fieldset()__

This function returns HTML for single fieldset

__Parameters__: 

* 	__$legend__ (string) - contents of `<legend>` tag
* 	__$fields__ (HTML) - HTML with fields
* 	__$conf__ (array) - array with configuration data, with following possible members:
 - id - contents of 'id' attribute of <fieldset> tag
 - class - contents of 'class' attribute of <fieldset> tag
 - attr - string of extra attributes to be added to <fieldset> tag
 - attr_legend - string of extra attributes to be added to <fieldset><legend> tag

__Category__: Forms  



### <a name="eiseintra_fn_form"></a>public function __form()__

This function returns HTML for the form.

__Parameters__: 

* 	__$action__ (string) - Stands for ACTION attribute of FORM tag
* 	__$dataAction__ (string) - value of DataAction form input
* 	__$fields__ (HTML) - form inner HTML
* 	__$method__ (string) - METHOD attribute of form tag
* 	__$conf__ (array) - form configuration data array, contains the following possible members:
 - class - contents of CLASS attribute of FORM tag, all listed classes will be added to default class list (eiseIntraForm eif-form) on the right
 - attr - extra attributes to be added to FORM element
 - id - contents of ID attribute of FORM element
 - flagDontClose - if set to TRUE, <FORM> tag is not closed in function output.

__Category__: Forms  



### <a name="eiseintra_fn_showtextbox"></a>public function __showTextBox()__

This function returns HTML for the text box `<input type="text">`.

__Parameters__: 

* 	$strName
* 	$strValue
* 	$arrConfig=Array()

__Category__: Forms  



### <a name="eiseintra_fn_showtextarea"></a>public function __showTextArea()__

This function returns HTML for the `<textarea>`.

__Parameters__: 

* 	$strName
* 	$strValue
* 	$arrConfig=Array()

__Category__: Forms  



### <a name="eiseintra_fn_showbutton"></a>public function __showButton($name, $value, $arrConfig=array())__

showButton() method returns `<input type="submit">` or `<button>` HTML. Input type should be specified in `$arrConfig['type']` member.

__Parameters__: 

* 	__$strName__ (string) - button name and id, can be empty or null
* 	__$strValue__ (string) - button label
* 	__$arrConfing__ (array) - configuration array. The same as for any other form elements. Supported input types ($arrConfig['type'] values) are:
- submit - `<input type="submit" class="eiseIntraActionSubmit">` will be returned
- delete - method will return `<button class="eiseIntraDelete">`
- button (default) - `<button>` element will be returned

__Returns__: HTML string

__Category__: Forms  



### <a name="eiseintra_fn_showcombo"></a>public function __showCombo()__

This method returns HTML for `<select>` form control.
Element id and name are set with $strName parameter. Selected element will be chosen accorging to $strValue. Option values and this variable will be converted being casted to strings.
Empty element (with empty value) will be added if $confOptions['defaultText'] option is set. 
$arrOptions array can have nested arrays. In this case <optgroup> tag will be added. Option group title can be set via $confOptions['optgroups'] option array. See below.
$confOptions is configuration array, it can have the following options:  
- __FlagWrite__   (boolean) If true, usable `<select>` element will be shown. Otherwise, it will be `<div>` with chosen option text and hidden `<input>` with existing value.
- __class__  (string) contents of `<select class="{...}">` attribute. Specified classes will be added to the end of class list.
- __strAttrib__  (string) Additional `<select>` element attributes string, e.g. ` data-xx="YY" aria-role="nav" class="my-gorgeous-class"`. Classes will be merged with 'class' option content.
- __required__   (boolean) If TRUE, 'required' HTML attribute will be added for form validation.
- __defaultText__ (string) If specified, `<option>` with empty value will be added to the beginning of dropdown list, option text will be taken from this conf option value. If 'auto_translate' $intra option is TRUE, this value will be translated.
- __deletedOptions__  (array) Array of option values to be marked as deleted with `<option class="deleted">`
- __optgroups__   (array) Array of `<optgroup>` titles. If $arrOption array member is array, it will search for `<optgroup>` tag title in this conf option array by the same key.
- __indent__  (array) Array of integer values for options text indent. 
- __href__  (string) If you'd like to show hyperlink when combobox is read-only, this option value will be used as `<a href="{...}">` 
- target  (string) HREF target.

__Parameters__: 

* 	__$strName__ (string) - Input name and id
* 	__$strValue__ (string) - Field falue
* 	__$arrOptions__ (array) - Options array where key is `<option value="">` and array element value is option text
* 	__$arrOptions__ (variant) - (optional) Array with configuration options for `<select>` element. See above.

__Returns__: string HTML

__Category__: Forms  



### <a name="eiseintra_fn_showcheckbox"></a>public function __showCheckBox()__

This function returns HTML for the < input type="checkbox" >.

__Parameters__: 

* 	$strName
* 	$strValue
* 	$arrConfig=Array()

__Category__: Forms  



### <a name="eiseintra_fn_showradio"></a>public function __showRadio()__

This function returns HTML for the < input type="radio" >.

__Parameters__: 

* 	$strName
* 	$strValue
* 	$arrConfig=Array()

__Category__: Forms  



### <a name="eiseintra_fn_showradiobyarray"></a>public function __showRadioByArray()__

This function returns HTML for the < input type="radio" >, basing on arrays

__Parameters__: 

* 	$strRadioName
* 	$strValue
* 	$arrConfig

__Category__: Forms  



### <a name="eiseintra_fn_showajaxdropdown"></a>public function __showAjaxDropdown()__

This function returns HTML for the AJAX-based autocomplete inputs. They download data from the server while user inputs the text.

__Parameters__: 

* 	$strFieldName
* 	$strValue
* 	$arrConfig

__Category__: Forms  



### <a name="eiseintra_fn_iseditable"></a>public function __isEditable($flagToForce = null)__

This method returns True if user permissions allow to edit the data. It is possible either if FlagWrite is positive at current page or FlagCreate or FlagUpdate are too.
Perissions may be forced to allow editing or deny it by setting $flagToForce parameter to True or Flase correspondingly. If it's not set or null it meaningless.

__Parameters__: 

* 	__$flagToForce__ (bool) - Flag to force permissions.

__Returns__: bool

__Category__: Forms  



### <a name="eiseintra_fn_loadjs"></a>public function __loadJS()__

Function that loads JavaScript files basing on GLOBAL $arrJS

__Category__: Data Output  



### <a name="eiseintra_fn_loadcss"></a>public function __loadCSS()__

Function that loads CSS files basing on GLOBAL $arrCSS

__Category__: Data Output  



### <a name="eiseintra_fn_dataaction"></a>public function __dataAction($dataAction, $funcOrObj=null)__

Data handling hook function. If $_GET or $_POST ['DataAction'] array member fits contents of $dataAction parameter that can be array or string, 
user function $function_name will be called and contents of $_POST or $_GET will be passed as parameters.

__Parameters__: 

* 	__$dataAction__ (variant) - string or array of possible &lt;input name=DataAction&gt; values that $function should handle.
* 	__$funcOrObj__ (variant) - callback function name or object which method should be invoked. Function should get $_POST or $_GET as first parameter.

__Returns__: variant value that return user function.

__Category__: Navigation
Data Handling  



### <a name="eiseintra_fn_dataread"></a>public function __dataRead()__

Data read hook function. If $query['DataAction'] array member fits contents of $dataReadValues parameter that can be array or string, 
user function $function_name will be called and contents of $query parameter will be passed. If $query parameter is omitted, function 
will take $_GET global array.

__Parameters__: 

* 	__$dataReadValues__ (variant) - string or array of possible &lt;input name=DataAction&gt; values that $function should handle.
* 	__$function__ (string) - callback function name.
* 	__$query__ (array) - associative array data query

__Returns__: variant value that return user function.

__Category__: Data Handling  



### <a name="eiseintra_fn_getdatetimebyoperationtime"></a>public function __getDateTimeByOperationTime()__

This function returns date and time string basing on operation date and time string. 
If operation day start time is greater than operation day end time, and time passed less than operation day end time,
then date will be incremented by one day.

For example, if operation day starts at 07:30 and ends at 01:30 next day, then operation time '01:00' will be considered as next day time. If operation date is '2024-06-30', then returned date and time will be '2024-07-01 01:00:00'.

__Parameters__: 

* 	__$operationDate__ (string) - date in 'Y-m-d' format
* 	__$time__ (string) - time in 'H:i:s' format

__Returns__: string date and time in 'Y-m-d H:i:s' format

__Category__: Data Output  



### <a name="eiseintra_fn_showdatesperiod"></a>public function __showDatesPeriod()__

This function returns date period string basing on start and end dates. 
If both dates are equal, only one date will be returned.

__Parameters__: 

* 	$trnStartDate
* 	$trnEndDate
* 	$precision = 'date'

__Category__: Data Output  



### <a name="eiseintra_fn_confvariations"></a>static function __confVariations()__

Static functions that returns first occurence of configuration array $conf key variations passed as $variations parameter (array). Made for backward compatibility.

__Parameters__: 

* 	$conf associative (configuration) array
* 	$variations enumerated array of variations

__Returns__: $conf array value of first occurence of supplied key variations. NULL if key not found

__Category__: Utilities  



### <a name="eiseintra_fn_getfullhref"></a>static function __getFullHREF($iframeHREF)__

This function returns external reference to the script inside `<iframe>`. This href will load all iframe surrounding, including menu and $iframeHREF will be inside this `<iframe>`

__Parameters__: 

* 	__$iframeHREF__ (string) - URL of the page inside the `<iframe>`



### <a name="eiseintra_fn_getkeyboardvariations"></a>static function __getKeyboardVariations($src)__

function to obtain keyboard layout variations when user searches something but miss keyboard layout switch

It takes multibyte UTF-8-encoded string as the parameter, then it searches variations in static property self::$arrKeyboard and returns it as associative array.

__Parameters__: 

* 	__$src__ (string) - Original user input

__Returns__: array            Associative array of possible string variations, like `array('EN'=>'qwe', 'RU'=>'йцу')`

__Category__: i18n
Useful stuff  



### <a name="eiseintra_fn_debug"></a>static function __debug($to_echo)__

This function dumps $to_echo variable using var_export() or simply echoes it, with stack trace ahead

__Parameters__: 

* 	__$to_echo__ (variant) - variables to dump
* 	__$flagStackTrace__ (boolean) - if last parameter set to TRUE, function adds stack trace

__Category__: Debug  



### <a name="eiseintra_fn_buildless"></a>protected function __buildLess()__

This function rebuilds style.css for selected theme using style.less located in the same folder as style.css. 
REMEMBER TO chmod a+w to this folder!

__Category__: Utilities  






## <a name="cls_eiseintradata"></a>class __eiseIntraData__

eiseIntraData is the class that encapsulates data handling routines

Data types definition and conversion
SQL <-> PHP output data conversions
SQL query result conversion to JSON or Array (result2JSON())
Reference table routines (getDataFromCommonViews())
Archive/Restore routines
etc

__Version__: 2.0beta  
__Package__: eiseIntra  

### <a name="eiseintradata_prop_arrintradatatypes"></a>static property __$arrIntraDataTypes__

$arrIntraDataTypes defines basic type set that is used for conversion of data obtained from the database into user-specific locale.

```php
public static $arrIntraDataTypes = array(
    'integer' => array('integer', 'int', 'number', 'smallint', 'mediumint', 'bigint')
    , 'real' => array('real', 'double', 'decimal', 'float')
    , 'money' => array('money')
    , 'boolean' => array('boolean', 'tinyint', 'bit')
    , 'text' => array('text', 'varchar', 'char', 'tinytext', 'text', 'mediumtext', 'longtext')
    , 'binary' => array('binary', 'varbinary', 'tinyblob', 'blob', 'mediumblob', 'longblob')
    , 'date' => array('date'), 'time' => array('time'), 'datetime' => array('datetime')
    , 'timestamp' => array('timestamp')
    , 'FK' => array('int', 'integer', 'varchar', 'char', 'text')
    , 'PK' => array('int', 'integer', 'varchar', 'char', 'text')
    , 'activity_stamp' => array('datetime', 'timestamp')
);
```



### <a name="eiseintradata_fn_formatbytype2php"></a>public function __formatByType2PHP()__

This function formats data for user-friendly output according to user data type provided in $type parameter.

__Parameters__: 

* 	__$type__ (string) - data type, according to eiseIntra::$arrUserDataType
* 	__$value__ (variant) - data as it's been returned from the database or calculated in PHP
* 	__$decPlaces__ (int) - number of decimal places

__Returns__: string

__Category__: Data formatting  



### <a name="eiseintradata_fn_formatbytype2sql"></a>public function __formatByType2SQL()__

This function formats data to SQL-query friendly value, not escaped, without quotes.

__Parameters__: 

* 	__$type__ (string) - any data type supperted by SQL server
* 	__$value__ (variant) - value to be formatted
* 	__$thisType__ (string) - detected eiseIntra data type from [$arrIntraDataTypes](#eiseintradata_arrintradatatypes), this parameter is set by ref.

__Returns__: string - The value formatted.

__Category__: Data formatting  



### <a name="eiseintradata_fn_result2json"></a>public function __result2JSON($rs, $arrConf = array())__

This function returns SQL result as JSON string or array, in format that can be understood by eiseIntra's JavaScript fill() methods. Output format is a bit more complex than just list of rows as dictionaries. It also contains some features that scipt interpret for data display:
- read/write permissions for given field in given tuple
- text representation for field if it's foregn key value with reference to some disctionary
- HREF for a field, if any.
For example, we have a following result: [{a: b, c: d, e: f, e_text: f_text}, {a: b1, c: d1, e: f1, e_text: f_text1}]. In the simiplest case, by default, it will be formatted in the following way: 
[{a: {v: b }, c: {v: d}, e: {v: f, t: f_text} }, {a: {v: b1 },{c: {v: d1}}, e: {v: f1, t: f_text1} }] - as you can see data value is places under "v" key, and text represntation that originally comes with "_text" suffix is placed under "t" key for field "e".
More through output cofiguration can be set with $arrConf parameter of this function.

__Parameters__: 

* 	__$rs__ (resource) - SQL server resource handle
* 	__$arrConf__ (array) - confiration array. Here is detailed description of each feature:
- 'flagAllowDeny' (string) - when set to 'deny', 'arrPermittedFields' contains only editable fields, and vice-versa when it's set to 'allow' (default)
- 'arrPermittedFields' (array) - this function can add 'rw' property with values 'rw' or 'r' property for each field in a record and it will force JavaScript function fill() to make correcspoding fields editable or not. If this array is empty and 'flagAllowDeny' is set to 'allow' this property is omitted. For example, if `$arrConf['arrPermittedFields'] == ['c']` and `$arrConf['flagAllowDeny'] == 'allow'` 'c' field will be prenected in the following way: {c: {v: 'd', rw: 'r'}}.
- 'fields' (array) - the array with fields configuration data. Developer can customize output of decimal fields by setting 'decimalPlaces' or 'minDecimalPlaces' values. Also user can specify href 'href' asnd its 'target' for this fields. HREFs can be formed dynamically with data from the same record. To proceed with is you need to specify field name in square brackets. Example: if `$arrConf['fields']['c']['href'] == '/page.php?a=[a]' and $arrConf['fields']['c']['target'] == '_blank'` it will return `{c: {v: d, h: '/page.php?a=b', tr: '_blank'}}`
- 'flagEncode' (boolean) - When true, function returns JSON-encoded string, otherwise it returns an array.

__Returns__: array (default) or string when $arrConf['flagEncode']==True

__Category__: Data Output  



### <a name="eiseintradata_fn_unq"></a>public function __unq($sqlReadyValue)__

This function unquotes SQL value previously prepared to be added into SQL code by functions like $oSQL->e(). Same exists in eiseSQL class.

__Parameters__: 

* 	__$sqlReadyValue__ (string) -

__Returns__: string $sqlReadyValue without quotes, or NULL if source string is 'NULL' (case-insensitive)

__Category__: Data formatting  



### <a name="eiseintradata_fn_decphp2sql"></a>public function __decPHP2SQL($val, $valueIfNull=null)__

This function converts decimal value from user input locale into SQL-friendly value.
If $val is empty string it returns $valueIfNull string or 'NULL' string.

__Parameters__: 

* 	__$val__ (string) - user data.

__Returns__: variant - double value converted from original one or $valueIfNull if it's set or 'NULL' string otherwise.

__Category__: Data formatting  



### <a name="eiseintradata_fn_decsql2php"></a>public function __decSQL2PHP($val, $decimalPlaces=null)__

This function converts data fetched from SQL query to string, according to $intra locale settings.

__Parameters__: 

* 	__$val__ (variant) - Can be either integer, double or string (anyway it will be converted to 'double') as it's been obtained from SQL or calculated in PHP.
* 	__$decimalPlaces__ (integer) - if not set, $intra->conf['decimalPlaces'] value will be used.

__Returns__: string decimal value.

__Category__: Data formatting  



### <a name="eiseintradata_fn_datesql2php"></a>public function __dateSQL2PHP($dtVar, $precision='date')__

This function converts date value as it's been fetched from SQL ('YYYY-MM-DD' or any strtotime()-parseable format) into string accoring to $intra locale settings ($intra->conf['dateFormat'] and $intra->conf['timeFormat']). If $precision is not 'date' (e.g. 'time' or 'datetime') it will also adds a time component.

__Parameters__: 

* 	__$dtVar__ (string) - Date/time value to be converted
* 	__$precision__ (string) - precision for date conversion, 'date' is default.

__Returns__: string - converted date or date/time value

__Category__: Data formatting  



### <a name="eiseintradata_fn_datetimesql2php"></a>public function __datetimeSQL2PHP($dtVar)__

This function converts date value as it's been fetched from SQL ('YYYY-MM-DD' or any strtotime()-parseable format) into string accoring to $intra locale settings ($intra->conf['dateFormat'] and $intra->conf['timeFormat']).

__Parameters__: 

* 	__$dtVar__ (string) - Date/time value to be converted

__Returns__: string - converted date/time value

__Category__: Data formatting  



### <a name="eiseintradata_fn_datephp2sql"></a>public function __datePHP2SQL($dtVar, $valueIfEmpty="NULL")__

This function converts date value received from user input into SQL-friendly value, quoted with single quotes. If origin value is empty string it returns $valueIfEmpty parameter or 'NULL' if it's not set. Origin value is checked for compliance to date format using regular expression $intra->conf['prgDate']. Also $dtVar format accepts <input type="date"> output formatted as 'YYYY-MM-DD' string. If $dtVar format is wrong it returns $valueIfEmpty or 'NULL' string.

__Parameters__: 

* 	__$dtVar__ (string) - origin date value
* 	__$valueIfEmpty__ (variant) - value to be returned if $dtVar is empty or badly formatted.

__Returns__: string - Converted value ready to be added to SQL query string.

__Category__: Data formatting  



### <a name="eiseintradata_fn_datetimephp2sql"></a>public function __datetimePHP2SQL($dtVar, $valueIfEmpty="NULL")__

This function converts date/time value received from user input into SQL-friendly string, quoted with single quotes. If origin value is empty string it returns $valueIfEmpty parameter or 'NULL' if it's not set. Origin value is checked for compliance to date format using regular expression $intra->conf['prgDate'] and $intra->conf['prgTime']. Time part is optional. Function also accepts 'YYYY-MM-DD[ HH:MM:SS]' string. If $dtVar format is wrong it returns $valueIfEmpty or 'NULL' string.

__Parameters__: 

* 	__$dtVar__ (string) - origin date value
* 	__$valueIfEmpty__ (variant) - value to be returned if $dtVar is empty or badly formatted.

__Returns__: string - Converted value ready to be added to SQL query string.

__Category__: Data formatting  



### <a name="eiseintradata_fn_gettableinfo"></a>public function __getTableInfo($dbName, $tblName)__

getTableInfo() funiction retrieves useful MySQL table information: in addition to MySQL's 'SHOW FULL COLUMNS ...' and 'SHOW KEYS FROM ...' it also returns some PHP code that could be added to URL string, SQL queries or evaluated. See description below. Currently it uses [eiseSQL::getTableInfo()](#eisesql_gettableinfo) function.

__Parameters__: 

* 	__$dbName__ (string) - database name
* 	__$tblName__ (string) - table name

__Returns__: array - see more in [eiseSQL::getTableInfo()](#eisesql_gettableinfo) function documentation



### <a name="eiseintradata_fn_getsqlvalue"></a>public function __getSQLValue($col, $flagForArray=false)__

getSQLValue() function returns ready-to-eval PHP code to be used in SQL queries. Currently kept for backward compatibility.

__Parameters__: 

* 	__$col__ (array) - array in the same format as it's been received from [eiseSQL::getTableInfo()](#eisesql_gettableinfo) function. 'Field' member is obilgatory.
* 	__$flagForArray__ (boolean) - when set to __true__, it uses not $_POST[$col['Field']] but $_POST[$col['Field']][$i]. It is useful when we need to dispatch data list.

__Returns__: string PHP code that could be evaluated in SQL query.

__Category__: Data formatting  



### <a name="eiseintradata_fn_getmultipkcondition"></a>public function __getMultiPKCondition($arrPK, $strValue)__

This tiny function composes WHERE SQL condition for multiple column primary key. It's assumed that column values are  delimited with double-hash ('##').

__Parameters__: 

* 	__$arrPK__ (array) - Primary key array, as returned by [eiseSQL::getTableInfo()](#eisesql_gettableinfo) function, in 'PK' array member.
* 	__$strValue__ (string) - double key value

__Category__: Database routines  



### <a name="eiseintradata_fn_getdatafromcommonviews"></a>public function __getDataFromCommonViews()__

This function reads data from SQL views or tables that's used as foreign key references. This function is widely used in eiseIntra as the data source for <select> elements and AJAX autocomplete (ajax_dropdown) elements. It can retrieve single record or whole recordset that match some criteria. It returns a recordset of value-text pairs with 'optValue' field that correspond to values and 'optText' field that correspond to text. Also it returns 'optTextLocal' for text representation in local language and 'optFlagDeleted' with flag that shows whether record is disabled for use or not.

__Parameters__: 

* 	__$strValue__ (string) - value to search for; when it's specified, the function searches for records by primary key.
* 	__$strText__ (string) - text to search for - when we try to find match by text with `LIKE %..%`, e.g. for AJAX autocomplete list.
* 	__$strTable__ (string) - table or view name
* 	__$strPrefix__ (string) - 3-4-letters table field prefix. When set, it expects $strTable to have columns named as <prefix>ID, <prefix>Title, <prefix>TitleLocal and <prefix>FlagDeleted. When this parameter is empty, it expects this view to have 'optValue', 'optText', 'optTextLocal' and 'optFlagDeleted' columns. Otherwise it throws an exception from MySQL side.
* 	__$flagShowDeleted__ (boolean) - when __true__, values are not filtered with '*FlagDeleted=0'
* 	__$extra__ (string) - some extra criteria, pipe('|')-delimited string. Table/view should contain fields named like 'extra', 'extra1', 'extra2'...
* 	__$flagNoLimits__ (boolean) - when __false__, it returns only first 30 matching records. Otherwise it reutrns all matched records.

__Returns__: resource with data obtained from the database

__Category__: Database routines  



### <a name="eiseintradata_fn_arrphp2sql"></a>public function __arrPHP2SQL($arrSrc, $types = array())__

This function recursively converts data in associative array according to type definition supplied in $types parameter. Suitable for situations when you need locale-indepedent json.

__Parameters__: 

* 	$arrSrc
* 	$types = array()



### <a name="eiseintradata_fn_arrsql2php"></a>public function __arrSQL2PHP($arrSrc, $types = array())__

This function also recursively converts data in associative array according to type definition supplied in $types parameter. Suitable for situations when you need to convert data according to your user locale.

__Parameters__: 

* 	$arrSrc
* 	$types = array()



### <a name="eiseintradata_fn_getsqlfields"></a>public function __getSQLFields($tableInfo, $data)__

This function returns SQL for field values. It can be used either in UPDATE or in INSERT ... SET queries.

__Parameters__: 

* 	$tableInfo
* 	$data



### <a name="eiseintradata_fn_getbasicdatatype"></a>static function __getBasicDataType($type)__

This function returns basic data type for provided $type variable. It can be as any MySQL data type as input type used in eiseIntra.

__Parameters__: 

* 	__$type__ (string) - input type parameter, e.g. 'select' or 'money'

__Returns__: string - basic type from keys of eiseIntraData::$arrBasicTypes. If basic type's not found it returns 'text'.



### <a name="eiseintradata_fn_getintradatatype"></a>static function __getIntraDataType()__

This function returns Intra type from key set of $arrIntraDataTypes array above. It takes $type and $field name as parameters, and it can be as Intra types as SQL data types returned by fetch_fields() or getTableInfo() functions.

__Parameters__: 

* 	$type
* 	$field = ''



### <a name="eiseintradata_fn_getdecimalplaces"></a>static function __getDecimalPlaces()__

eiseIntra::getDecimalPlaces() gets actual number of digits beyond decimal separator. It reads original float or string value with "." (period symbol) as delimiter and returns actual number of decimal places skipping end zeros.

__Parameters__: 

* 	__or__ (string) - float $val - origin number

__Returns__: int - number of decimals. If $val is not numberic (i.e. it doesn't fit is_numeric() PHP function) it returns NULL.

__Category__: Data formatting  






## <a name="cls_eisesql"></a>class __eiseSQL__

eiseSQL is the class for object wrapper for database access functions. Currently it extends PHP's built-in mysqli class but also it adds some useful shortcuts for most popular functions.
Also in contains built-in profiler and some functions to profile your SQL query sequence.

__Version__: 2.0beta  
__Package__: eiseIntra  

### <a name="eisesql_prop_arrintra2dbtypemap"></a>public property __$arrIntra2DBTypeMap__

This array maps intra data types into MySQL data types

```php
public $arrIntra2DBTypeMap = array(        
        "integer"=>'int(11)',
        "real"=>'decimal(16,4)',
        "boolean"=>'tinyint(4)',
        "text"=>'varchar(1024)',
        "binary"=>'blob',
        "date"=>'date',
        "time"=>'time',
        "datetime" => 'datetime'
        );
```



### <a name="eisesql_prop_arrdbtypemap"></a>public property __$arrDBTypeMap__

This array maps intra data types into MySQL binary data types constants

```php
public $arrDBTypeMap = array(        
        "integer"=>array(MYSQLI_TYPE_SHORT
          , MYSQLI_TYPE_LONG
          , MYSQLI_TYPE_LONGLONG
          , MYSQLI_TYPE_INT24
          , MYSQLI_TYPE_YEAR),
        "real"=>array(MYSQLI_TYPE_DECIMAL
          , MYSQLI_TYPE_NEWDECIMAL
          , MYSQLI_TYPE_FLOAT
          , MYSQLI_TYPE_DOUBLE),
        "boolean"=>array(MYSQLI_TYPE_BIT
          , MYSQLI_TYPE_TINY
          , MYSQLI_TYPE_CHAR),
        "text"=>array(MYSQLI_TYPE_ENUM
          , MYSQLI_TYPE_SET
          , MYSQLI_TYPE_VAR_STRING
          , MYSQLI_TYPE_STRING
          , MYSQLI_TYPE_GEOMETRY),
        "binary"=>array(MYSQLI_TYPE_TINY_BLOB
          , MYSQLI_TYPE_MEDIUM_BLOB
          , MYSQLI_TYPE_LONG_BLOB
          , MYSQLI_TYPE_BLOB),
        "date"=>array(MYSQLI_TYPE_DATE
          , MYSQLI_TYPE_NEWDATE),
        "time"=>array(MYSQLI_TYPE_TIME
          , MYSQLI_TYPE_INTERVAL),
        "datetime" => array(MYSQLI_TYPE_DATETIME),
        "timestamp" => array(MYSQLI_TYPE_TIMESTAMP)
        );
```



### <a name="eisesql_fn___construct"></a>public function ____construct()__

Performs connect to the database with parent constructor.

**WARNING!** method connect() only make some adjustments

__Parameters__: 

* 	__$dbhost__ (string) - hostname/ip
* 	__$dbuser__ (string) - database user
* 	__$dbpass__ (string) - password
* 	__$dbname__ (string) - database name to use
* 	__$flagPersistent__ (boolean) - when *true*, PHP tries to establish permanent connection

__Category__: Database routines  
__Throws__: eiseSQLException object when connect fails  



### <a name="eisesql_fn_connect"></a>public function __connect()__

Dummy. Needed for some backward compatibility.
Do not use.

__Parameters__: 

* 	$host = NULL
* 	$user = NULL
* 	$password = NULL
* 	$database = NULL
* 	$port = NULL
* 	$socket = NULL



### <a name="eisesql_fn_selectdb"></a>public function __selectDB($dbname='')__

Another backward-compatibility function
Do not use.

__Parameters__: 

* 	$dbname=''



### <a name="eisesql_fn_e"></a>public function __e($str, $usage="for_ins_upd")__

Method e() escapes source string for SQL query using mysql_escape_string() and put escaped string into single quotes.
Please used it to prevent from SQL injections.

__Parameters__: 

* 	__$str__ (string) - string to be escaped
* 	__$usage__ (string) - (optional) - if set to something different from 'for_ins_upd', source string will be escaped for double-sided LIKE, e.g. `echo $oSQL->('qq', 'search')`=>`LIKE '%qq%'`

__Category__: Database routines
Data formatting  



### <a name="eisesql_fn_unq"></a>public function __unq($sqlReadyValue)__

This function strips single quotes from both ends of the string. If string is word 'NULL', it returns *NULL*.

__Parameters__: 

* 	__$sqlReadyValue__ (string) - value to be "unquoted"

__Returns__: string



### <a name="eisesql_fn_secure"></a>public function __secure($arg)__

This function first quotes the string using eiseSQL::e() function, then it strips quotes with eiseSQL::unq(). So it secures the string from any SQL injection.

__Parameters__: 

* 	__$arg__ (string) - value to be "secured"

__Returns__: string

__Category__: Database routines
Data formatting  



### <a name="eisesql_fn_q"></a>public function __q($query)__

This method executes SQL query and returns MySQL resource.
Also it collects all necessary data for query profile:  
- query text
- execution time
- number of records affected
- number of records returned
- call stack

__Parameters__: 

* 	$query

__Returns__: MySQL resource

__Category__: Database routines  



### <a name="eisesql_fn_n"></a>public function __n($mysqli_result)__

This method returns number of rows obtained within MySQL result object.
Actually it returns $mysqli_result->num_rows property.

__Parameters__: 

* 	__$mysqli_result__ (object) -

__Returns__: int

__Category__: Database routines  



### <a name="eisesql_fn_f"></a>public function __f($mysqli_result_or_query)__

This method fetches a row from MySQL result or SQL query passed as a parameter. If you'd like to reduce amount of code and you need to obtain only one record - just pass SQL query directly to this method.
So it is a little bit more than wrapper around MySQL result::fetch_assoc()

__Parameters__: 

* 	__$mysqli_result_or_query__ (variant) - it could be MySQL result object or a string with SQL query.

__Returns__: associative array with field names as keys, like MySQL result::fetch_assoc()

__Category__: Database routines  



### <a name="eisesql_fn_fa"></a>public function __fa($mysqli_result)__

This method fetches a row from MySQL result as an enumerated array. So it is just a wrapper around MySQL result::fetch_array()

__Parameters__: 

* 	__$mysqli_result__ (variant) - MySQL result object.

__Returns__: enumerated array, like MySQL result::fetch_array()

__Category__: Database routines  



### <a name="eisesql_fn_ff"></a>public function __ff($result_or_query)__

This method fetches field information from MySQL result as MySQL result::fetch_fields(). It is actually a wrapper around it.

__Parameters__: 

* 	__$result_or_query__ (variant) - MySQL result object or SQL query.

__Returns__: array, like MySQL result::fetch_fields()

__Category__: Database routines  



### <a name="eisesql_fn_i"></a>public function __i()__

This method returns autoincremental ID value after last `INSERT ...` query in current connection. It is a wrapper over MySQLi::insert_id property.

__Returns__: int - last insert id.

__Category__: Database routines  



### <a name="eisesql_fn_a"></a>public function __a()__

This method returns number of rows affected by last `INSERT ...`, `UPDATE ...` or `DELETE ...` query in current connection. It is a wrapper over MySQLi::affected_rows property.

__Returns__: int - number of records affected.

__Category__: Database routines  



### <a name="eisesql_fn_d"></a>public function __d($mysqli_result_or_query)__

This method fetches first value of first row from MySQL result or SQL query passed as a parameter. If you'd like to reduce amount of code and you need to obtain only one record - just pass SQL query directly to this method.
So it is a little bit more than wrapper around MySQL result::fetch_assoc()

__Parameters__: 

* 	__$mysqli_result_or_query__ (variant) - it could be MySQL result object or a string with SQL query.

__Returns__: associative array with field names as keys, like MySQL result::fetch_assoc()

__Category__: Database routines  



### <a name="eisesql_fn_startprofiling"></a>public function __startProfiling()__

Use this method to start or reset profiling process in your MySQL script. It drops all counters and set `$oSQL->flagProfiling=true`

__Category__: Debug  



### <a name="eisesql_fn_showprofileinfo"></a>public function __showProfileInfo()__

This function outputs profile info to current standard output. Use it for brief investigation of what's going on within your SQL query sequence.

__Category__: Debug  



### <a name="eisesql_fn_getprofileinfo"></a>public function __getProfileInfo()__

This function returns profiling as the list of associative arrays for each query.

__Returns__: enumerable array of associative arrays:
 - 'query' - query executed
 - 'affected' - number of rows affected
 - 'returned' - number of rows returned
 - 'backtrace' - debug_backtrace() on execution point
 - 'time'- number of microseconds

__Category__: Debug  



### <a name="eisesql_fn_gettableinfo"></a>public function __getTableInfo($tblName, $dbName=null)__

getTableInfo() funiction retrieves useful MySQL table information: in addition to MySQL's 'SHOW FULL COLUMNS ...' and 'SHOW KEYS FROM ...' it also returns some PHP code that could be added to URL string, SQL queries or evaluated. See description below.

__Parameters__: 

* 	__$tblName__ (string) - table name
* 	__$dbName__ (string) - database name (optional), if not set it returns information for table with $tblName in current database

__Returns__: array:
- 'hasActivityStamp' - flag, when __true__, it means that table has \*InsertBy/\*InsertDate/\*EditBy/\*EditDate fields. 
- 'columns' - dictionary with field data with field names as keys, as returned by `'SHOW FULL COLUMNS ...'`:
   - 'Field' - field name,
   - 'Type' - data type as set in the database,
   - 'DataType' - data type in terms of eiseIntra (e.g. 'PK'),
   - 'PKDataType' - data type of primary key (e.g. 'integer'),
   - 'Collation' - data collation,
   - 'Null' - 'YES' or 'NO' when field can be nulled or not,
   - 'Key' - key feature, whether it's foreign on primary,
   - 'Default' - deafult value,
   - 'Extra' - 'auto_increment' or other stuff,
   - 'Privileges' - currency use privileges (e.g. 'select,insert,update,references'),
   - 'Comment' - field comment,
- 'keys' - list of keys that consists of associative arrays, as returned by MySQL `'SHOW KEYS FROM ...'`
- 'PK' - list of primary key columns
- 'PKtype' - one of the following values: 'auto_increment', 'GUID' or 'user_defined'
- 'name' - table name without "tbl_" prefix,
- 'prefix' - 3-4 letter column name prefix,
- 'table' - table name,
- 'columns_index' - associative array of columns with names as keys and names as values. Kept for backward compatibility.
- 'PKVars' - PHP sentence to obtain primary key variable from $_GET or _POST. Example: `'$bltID  = (isset($_POST[\'bltID\']) ? $_POST[\'bltID\'] : $_GET[\'bltID\'] );`
- 'PKCond' - SQL sentence for WHERE condtition to obtain single record by primary key. Example: `'`bltID` = ".(int)($bltID)."'`
- 'PKURI' - PHP string that can be added to URL string. Example: `'bltID=".urlencode($bltID)."'`,
- 'type' - object type. Can be 'view' or table',
- 'Comment' - table comment.

__Category__: Database routines  






