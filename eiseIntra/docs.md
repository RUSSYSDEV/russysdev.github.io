---
layout: docs
sidebar_left:
  title: Function reference
  class: rsd-navbar-left
  id: "rsd_navbar_left"
  folders:

    - title: "class eiseIntraData:"
      url: "#eiseintradata"
      folders:

      - title: "static properties:"
        folders:

        - title: "$arrIntraDataTypes"
          url: "#eiseintradata-arrintradatatypes"

      - title: "public methods:"
        folders:

        - title: "formatByType2PHP()"
          url: "#eiseintradata-formatbytype2php"

        - title: "formatByType2SQL()"
          url: "#eiseintradata-formatbytype2sql"

        - title: "result2JSON()"
          url: "#eiseintradata-result2json"

        - title: "unq()"
          url: "#eiseintradata-unq"

        - title: "decPHP2SQL()"
          url: "#eiseintradata-decphp2sql"

        - title: "decSQL2PHP()"
          url: "#eiseintradata-decsql2php"

        - title: "dateSQL2PHP()"
          url: "#eiseintradata-datesql2php"

        - title: "datetimeSQL2PHP()"
          url: "#eiseintradata-datetimesql2php"

        - title: "datePHP2SQL()"
          url: "#eiseintradata-datephp2sql"

        - title: "datetimePHP2SQL()"
          url: "#eiseintradata-datetimephp2sql"

        - title: "getTableInfo()"
          url: "#eiseintradata-gettableinfo"

        - title: "getSQLValue()"
          url: "#eiseintradata-getsqlvalue"

        - title: "getMultiPKCondition()"
          url: "#eiseintradata-getmultipkcondition"

        - title: "getDataFromCommonViews()"
          url: "#eiseintradata-getdatafromcommonviews"

      - title: "static methods:"
        folders:

        - title: "getBasicDataType()"
          url: "#eiseintradata-getbasicdatatype"

        - title: "getIntraDataType()"
          url: "#eiseintradata-getintradatatype"

        - title: "getDecimalPlaces()"
          url: "#eiseintradata-getdecimalplaces"





    - title: "class eiseSQL:"
      url: "#eisesql"
      folders:

      - title: "public properties:"
        folders:

        - title: "$arrIntra2DBTypeMap"
          url: "#eisesql-arrintra2dbtypemap"

        - title: "$arrDBTypeMap"
          url: "#eisesql-arrdbtypemap"

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eisesql-__construct"

        - title: "connect()"
          url: "#eisesql-connect"

        - title: "selectDB()"
          url: "#eisesql-selectdb"

        - title: "e()"
          url: "#eisesql-e"

        - title: "unq()"
          url: "#eisesql-unq"

        - title: "secure()"
          url: "#eisesql-secure"

        - title: "q()"
          url: "#eisesql-q"

        - title: "n()"
          url: "#eisesql-n"

        - title: "f()"
          url: "#eisesql-f"

        - title: "fa()"
          url: "#eisesql-fa"

        - title: "ff()"
          url: "#eisesql-ff"

        - title: "i()"
          url: "#eisesql-i"

        - title: "a()"
          url: "#eisesql-a"

        - title: "d()"
          url: "#eisesql-d"

        - title: "startProfiling()"
          url: "#eisesql-startprofiling"

        - title: "showProfileInfo()"
          url: "#eisesql-showprofileinfo"

        - title: "getProfileInfo()"
          url: "#eisesql-getprofileinfo"






sidebar_right:
  title: Function reference
  class: rsd-navbar-right
  id: "rsd_navbar_right"
  folders:

    - title: "Data formatting"
      folders:

      - title: "datePHP2SQL()"
        url: "#eiseintradata-datephp2sql"
        folders:

      - title: "dateSQL2PHP()"
        url: "#eiseintradata-datesql2php"
        folders:

      - title: "datetimePHP2SQL()"
        url: "#eiseintradata-datetimephp2sql"
        folders:

      - title: "datetimeSQL2PHP()"
        url: "#eiseintradata-datetimesql2php"
        folders:

      - title: "decPHP2SQL()"
        url: "#eiseintradata-decphp2sql"
        folders:

      - title: "decSQL2PHP()"
        url: "#eiseintradata-decsql2php"
        folders:

      - title: "formatByType2PHP()"
        url: "#eiseintradata-formatbytype2php"
        folders:

      - title: "formatByType2SQL()"
        url: "#eiseintradata-formatbytype2sql"
        folders:

      - title: "getDecimalPlaces()"
        url: "#eiseintradata-getdecimalplaces"
        folders:

      - title: "getSQLValue()"
        url: "#eiseintradata-getsqlvalue"
        folders:

      - title: "unq()"
        url: "#eiseintradata-unq"
        folders:

    - title: "Data read"
      folders:

      - title: "getDataFromCommonViews()"
        url: "#eiseintradata-getdatafromcommonviews"
        folders:

      - title: "getTableInfo()"
        url: "#eiseintradata-gettableinfo"
        folders:

      - title: "result2JSON()"
        url: "#eiseintradata-result2json"
        folders:

    - title: "Database routines"
      folders:

      - title: "getMultiPKCondition()"
        url: "#eiseintradata-getmultipkcondition"
        folders:

      - title: "getTableInfo()"
        url: "#eiseintradata-gettableinfo"
        folders:

    - title: "Useful stuff"
      folders:

      - title: "getTableInfo()"
        url: "#eiseintradata-gettableinfo"
        folders:


---
## <a name="eiseintradata"></a>class __eiseIntraData__

eiseIntraData class that encapsulates data handling routines

Data types definition and conversion
SQL <-> PHP output data conversions
SQL query result conversion to JSON or Array (result2JSON())
Reference table routines (getDataFromCommonViews())
Archive/Restore routines
etc

__Package__: eiseIntra  
__Version__: 2.0beta  

### <a name="eiseintradata-arrintradatatypes"></a>static variable __$arrIntraDataTypes__

$arrIntraDataTypes defines basic type set that is used for conversion of data obtained from the database into user-specific locale.



### <a name="eiseintradata-formatbytype2php"></a>public function __formatByType2PHP($type, $value, $decPlaces = null)__

This function formats data for user-friendly output according to user data type provided in $type parameter.

__Category__: Data formatting  

__Parameters__: 
* __$type__ (string) - data type, according to eiseIntra::$arrUserDataType
* __$value__ (variant) - data as it's been returned from the database or calculated in PHP
* __$decPlaces__ (int) - number of decimal places
  
__Returns__: string


### <a name="eiseintradata-formatbytype2sql"></a>public function __formatByType2SQL($type, $value, &$thisType = '')__

This function formats data to SQL-query friendly value, not escaped, without quotes.

__Category__: Data formatting  

__Parameters__: 
* __$type__ (string) - any data type supperted by SQL server
* __$value__ (variant) - value to be formatted
* __$thisType__ (string) - detected eiseIntra data type from [$arrIntraDataTypes](#eiseintradata_arrintradatatypes), this parameter is set by ref.
  
__Returns__: string - The value formatted.


### <a name="eiseintradata-result2json"></a>public function __result2JSON($rs, $arrConf = array()__

This function returns SQL result as JSON string or array, in format that can be understood by eiseIntra's JavaScript fill() methods. Output format is a bit more complex than just list of rows as dictionaries. It also contains some features that scipt interpret for data display:
- read/write permissions for given field in given tuple
- text representation for field if it's foregn key value with reference to some disctionary
- HREF for a field, if any.
For example, we have a following result: [{a: b, c: d, e: f, e_text: f_text}, {a: b1, c: d1, e: f1, e_text: f_text1}]. In the simiplest case, by default, it will be formatted in the following way: 
[{a: {v: b }, c: {v: d}, e: {v: f, t: f_text} }, {a: {v: b1 },{c: {v: d1}}, e: {v: f1, t: f_text1} }] - as you can see data value is places under "v" key, and text represntation that originally comes with "_text" suffix is placed under "t" key for field "e".
More through output cofiguration can be set with $arrConf parameter of this function.

__Category__: Data read  

__Parameters__: 
* __$rs__ (resource) - SQL server resource handle
* __$arrConf__ (array) - confiration array. Here is detailed description of each feature:
  - 'flagAllowDeny' (string) - when set to 'deny', 'arrPermittedFields' contains only editable fields, and vice-versa when it's set to 'allow' (default)
  - 'arrPermittedFields' (array) - this function can add 'rw' property with values 'rw' or 'r' property for each field in a record and it will force JavaScript function fill() to make correcspoding fields editable or not. If this array is empty and 'flagAllowDeny' is set to 'allow' this property is omitted. For example, if `$arrConf['arrPermittedFields'] == ['c']` and `$arrConf['flagAllowDeny'] == 'allow'` 'c' field will be prenected in the following way: {c: {v: 'd', rw: 'r'}}.
  - 'fields' (array) - the array with fields configuration data. Developer can customize output of decimal fields by setting 'decimalPlaces' or 'minDecimalPlaces' values. Also user can specify href 'href' asnd its 'target' for this fields. HREFs can be formed dynamically with data from the same record. To proceed with is you need to specify field name in square brackets. Example: if `$arrConf['fields']['c']['href'] == '/page.php?a=[a]' and $arrConf['fields']['c']['target'] == '_blank'` it will return `{c: {v: d, h: '/page.php?a=b', tr: '_blank'}}`
  - 'flagEncode' (boolean) - When true, function returns JSON-encoded string, otherwise it returns an array.
  
__Returns__: array (default) or string when $arrConf['flagEncode']==True


### <a name="eiseintradata-unq"></a>public function __unq($sqlReadyValue)__

This function unquotes SQL value previously prepared to be added into SQL code by functions like $oSQL->e(). Same exists in eiseSQL class.

__Category__: Data formatting  

__Parameters__: 
* __$sqlReadyValue__ (string) - 
  
__Returns__: string $sqlReadyValue without quotes, or NULL if source string is 'NULL' (case-insensitive)


### <a name="eiseintradata-decphp2sql"></a>public function __decPHP2SQL($val, $valueIfNull=null)__

This function converts decimal value from user input locale into SQL-friendly value.
If $val is empty string it returns $valueIfNull string or 'NULL' string.

__Category__: Data formatting  

__Parameters__: 
* __$val__ (string) - user data.
  
__Returns__: variant - double value converted from original one or $valueIfNull if it's set or 'NULL' string otherwise.


### <a name="eiseintradata-decsql2php"></a>public function __decSQL2PHP($val, $decimalPlaces=null)__

This function converts data fetched from SQL query to string, according to $intra locale settings.

__Category__: Data formatting  

__Parameters__: 
* __$val__ (variant) - Can be either integer, double or string (anyway it will be converted to 'double') as it's been obtained from SQL or calculated in PHP.
* __$decimalPlaces__ (integer) - if not set, $intra->conf['decimalPlaces'] value will be used.
  
__Returns__: string decimal value.


### <a name="eiseintradata-datesql2php"></a>public function __dateSQL2PHP($dtVar, $precision='date')__

This function converts date value as it's been fetched from SQL ('YYYY-MM-DD' or any strtotime()-parseable format) into string accoring to $intra locale settings ($intra->conf['dateFormat'] and $intra->conf['timeFormat']). If $precision is not 'date' (e.g. 'time' or 'datetime') it will also adds a time component.

__Category__: Data formatting  

__Parameters__: 
* __$dtVar__ (string) - Date/time value to be converted
* __$precision__ (string) - precision for date conversion, 'date' is default.
  
__Returns__: string - converted date or date/time value


### <a name="eiseintradata-datetimesql2php"></a>public function __datetimeSQL2PHP($dtVar)__

This function converts date value as it's been fetched from SQL ('YYYY-MM-DD' or any strtotime()-parseable format) into string accoring to $intra locale settings ($intra->conf['dateFormat'] and $intra->conf['timeFormat']).

__Category__: Data formatting  

__Parameters__: 
* __$dtVar__ (string) - Date/time value to be converted
  
__Returns__: string - converted date/time value


### <a name="eiseintradata-datephp2sql"></a>public function __datePHP2SQL($dtVar, $valueIfEmpty="NULL")__

This function converts date value received from user input into SQL-friendly value, quoted with single quotes. If origin value is empty string it returns $valueIfEmpty parameter or 'NULL' if it's not set. Origin value is checked for compliance to date format using regular expression $intra->conf['prgDate']. Also $dtVar format accepts <input type="date"> output formatted as 'YYYY-MM-DD' string. If $dtVar format is wrong it returns $valueIfEmpty or 'NULL' string.

__Category__: Data formatting  

__Parameters__: 
* __$dtVar__ (string) - origin date value
* __$valueIfEmpty__ (variant) - value to be returned if $dtVar is empty or badly formatted.
  
__Returns__: string - Converted value ready to be added to SQL query string.


### <a name="eiseintradata-datetimephp2sql"></a>public function __datetimePHP2SQL($dtVar, $valueIfEmpty="NULL")__

This function converts date/time value received from user input into SQL-friendly string, quoted with single quotes. If origin value is empty string it returns $valueIfEmpty parameter or 'NULL' if it's not set. Origin value is checked for compliance to date format using regular expression $intra->conf['prgDate'] and $intra->conf['prgTime']. Time part is optional. Function also accepts 'YYYY-MM-DD[ HH:MM:SS]' string. If $dtVar format is wrong it returns $valueIfEmpty or 'NULL' string.

__Category__: Data formatting  

__Parameters__: 
* __$dtVar__ (string) - origin date value
* __$valueIfEmpty__ (variant) - value to be returned if $dtVar is empty or badly formatted.
  
__Returns__: string - Converted value ready to be added to SQL query string.


### <a name="eiseintradata-gettableinfo"></a>public function __getTableInfo($dbName, $tblName)__

getTableInfo() funiction retrieves useful MySQL table information: in addition to MySQL's 'SHOW FULL COLUMNS ...' and 'SHOW KEYS FROM ...' it also returns some PHP code that could be added to URL string, SQL queries or evaluated. See description below. Currently it uses [eiseSQL::getTableInfo()](#eisesql_gettableinfo) function.

__Category__: Data read
Database routines
Useful stuff  

__Parameters__: 
* __$dbName__ (string) - database name
* __$tblName__ (string) - table name
  
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
- 'keys' - list of keys that consists of associative arrays, as returned by MySQL 'SHOW KEYS FROM ...'
- 'PK' - list of primary key columns
- 'PKtype' - one of the following values: 'auto_increment', 'GUID' or 'user_defined'
- 'prefix' - 3-4 letter column name prefix,
- 'table' - table name,
- 'columns_index' - associative array of columns with names as keys and names as values. Kept for backward compatibility.
- 'PKVars' - PHP sentence to obtain primary key variable from $_GET or _POST. Example: `'$bltID  = (isset($_POST[\'bltID\']) ? $_POST[\'bltID\'] : $_GET[\'bltID\'] );`
- 'PKCond' - SQL sentence for WHERE condtition to obtain single record by primary key. Example: `'`bltID` = ".(int)($bltID)."'`
- 'PKURI' - PHP string that can be added to URL string. Example: `'bltID=".urlencode($bltID)."'`,
- 'type' - object type. Can be 'view' or table',
- 'Comment' - table comment.


### <a name="eiseintradata-getsqlvalue"></a>public function __getSQLValue($col, $flagForArray=false)__

getSQLValue() function returns ready-to-eval PHP code to be used in SQL queries. Currently kept for backward compatibility.

__Category__: Data formatting  

__Parameters__: 
* __$col__ (array) - array in the same format as it's been received from [eiseSQL::getTableInfo()](#eisesql_gettableinfo) function. 'Field' member is obilgatory.
* __$flagForArray__ (boolean) - when set to __true__, it uses not $_POST[$col['Field']] but $_POST[$col['Field']][$i]. It is useful when we need to dispatch data list.
  
__Returns__: string PHP code that could be evaluated in SQL query.


### <a name="eiseintradata-getmultipkcondition"></a>public function __getMultiPKCondition($arrPK, $strValue)__

This tiny function composes WHERE SQL condition for multiple column primary key. It's assumed that column values are  delimited with double-hash ('##').

__Category__: Database routines  

__Parameters__: 
* __$arrPK__ (array) - Primary key array, as returned by [eiseSQL::getTableInfo()](#eisesql_gettableinfo) function, in 'PK' array member.
* __$strValue__ (string) - double key value


### <a name="eiseintradata-getdatafromcommonviews"></a>public function __getDataFromCommonViews($strValue, $strText, $strTable, $strPrefix, $flagShowDeleted=false, $extra='', $flagNoLimits=false)__

This function reads data from SQL views or tables that's used as foreign key references. This function is widely used in eiseIntra as the data source for <select> elements and AJAX autocomplete (ajax_dropdown) elements. It can retrieve single record or whole recordset that match some criteria. It returns a recordset of value-text pairs with 'optValue' field that correspond to values and 'optText' field that correspond to text. Also it returns 'optTextLocal' for text representation in local language and 'optFlagDeleted' with flag that shows whether record is disabled for use or not.

__Category__: Data read  

__Parameters__: 
* __$strValue__ (string) - value to search for; when it's specified, the function searches for records by primary key.
* __$strText__ (string) - text to search for - when we try to find match by text with `LIKE %..%`, e.g. for AJAX autocomplete list.
* __$strTable__ (string) - table or view name
* __$strPrefix__ (string) - 3-4-letters table field prefix. When set, it expects $strTable to have columns named as <prefix>ID, <prefix>Title, <prefix>TitleLocal and <prefix>FlagDeleted. When this parameter is empty, it expects this view to have 'optValue', 'optText', 'optTextLocal' and 'optFlagDeleted' columns. Otherwise it throws an exception from MySQL side.
* __$flagShowDeleted__ (boolean) - when __true__, values are not filtered with '*FlagDeleted=0'
* __$extra__ (string) - some extra criteria, pipe('|')-delimited string. Table/view should contain fields named like 'extra', 'extra1', 'extra2'...
* __$flagNoLimits__ (boolean) - when __false__, it returns only first 30 matching records. Otherwise it reutrns all matched records.
  
__Returns__: resource with data obtained from the database


### <a name="eiseintradata-getbasicdatatype"></a>static function __getBasicDataType($type)__

This function returns basic data type for provided $type variable. It can be as any MySQL data type as input type used in eiseIntra.

__Parameters__: 
* __$type__ (string) - input type parameter, e.g. 'select' or 'money'
  
__Returns__: string - basic type from keys of eiseIntraData::$arrBasicTypes. If basic type's not found it returns 'text'.


### <a name="eiseintradata-getintradatatype"></a>static function __getIntraDataType($type, $field = '')__

This function returns Intra type from key set of $arrIntraDataTypes array above. It takes $type and $field name as parameters, and it can be as Intra types as SQL data types returned by fetch_fields() or getTableInfo() functions.



### <a name="eiseintradata-getdecimalplaces"></a>static function __getDecimalPlaces($val, $minPlaces = 0)__

eiseIntra::getDecimalPlaces() gets actual number of digits beyond decimal separator. It reads original float or string value with "." (period symbol) as delimiter and returns actual number of decimal places skipping end zeros.

__Category__: Data formatting  

__Parameters__: 
* __or__ (string) - float $val - origin number
  
__Returns__: int - number of decimals. If $val is not numberic (i.e. it doesn't fit is_numeric() PHP function) it returns NULL.





