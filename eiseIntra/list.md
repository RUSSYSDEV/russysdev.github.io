---
layout: docs
title: "eiseList PHP and jQuery plugin"
sidebar_left:
  title: "PHP Classes/jQuery Plugin"
  class: "rsd-navbar-left"
  id: "rsd-navbar_left"
  folders:
    - title: "class eiseList:"
      url: "#cls_eiselist"
      folders:

      - title: "public properties:"
        folders:

        - title: "$conf"
          url: "#eiselist_prop_conf"

      - title: "static properties:"
        folders:

        - title: "$col_default"
          url: "#eiselist_prop_col_default"

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eiselist_fn___construct"

        - title: "addColumn()"
          url: "#eiselist_fn_addcolumn"

        - title: "setColumnProperty()"
          url: "#eiselist_fn_setcolumnproperty"

        - title: "setColumnOrder()"
          url: "#eiselist_fn_setcolumnorder"

        - title: "getColumn()"
          url: "#eiselist_fn_getcolumn"

        - title: "removeColumn()"
          url: "#eiselist_fn_removecolumn"

        - title: "handleDataRequest()"
          url: "#eiselist_fn_handledatarequest"

        - title: "show()"
          url: "#eiselist_fn_show"

        - title: "updateCell()"
          url: "#eiselist_fn_updatecell"

        - title: "getCookie()"
          url: "#eiselist_fn_getcookie"

        - title: "getFilterValue()"
          url: "#eiselist_fn_getfiltervalue"

      - title: "private methods:"
        folders:

        - title: "handleInput()"
          url: "#eiselist_fn_handleinput"

        - title: "composeSQL()"
          url: "#eiselist_fn_composesql"

        - title: "getSearchCondition()"
          url: "#eiselist_fn_getsearchcondition"




    - title: "class phpLister"
      url: "#cls_phplister"
      folders:




    - title: "jQuery plugin eiseList:"
      url: "#jqp_eiselist"
      folders:

      - title: "public methods:"
        folders:

        - title: "init()"
          url: "#eiselist_jsfn_init"

        - title: "refresh()"
          url: "#eiselist_jsfn_refresh"

        - title: "getListObject()"
          url: "#eiselist_jsfn_getlistobject"

        - title: "getRowSelection()"
          url: "#eiselist_jsfn_getrowselection"




sidebar_right:
  title: "By category"
  class: "rsd-navbar-right"
  id: "rsd-navbar_right"
  folders:
    - title: "List Backward Compatibility"
      folders:

      - title: "phpLister"
        url: "#cls_phplister"
        folders:

    - title: "List Configuration"
      folders:

      - title: "__construct()"
        url: "#eiselist_fn___construct"
        folders:

      - title: "addColumn()"
        url: "#eiselist_fn_addcolumn"
        folders:

      - title: "$col_default"
        url: "#eiselist_prop_col_default"
        folders:

      - title: "$conf"
        url: "#eiselist_prop_conf"
        folders:

      - title: "getColumn()"
        url: "#eiselist_fn_getcolumn"
        folders:

      - title: "getListObject()"
        url: "#eiselist_jsfn_getlistobject"
        folders:

      - title: "init()"
        url: "#eiselist_jsfn_init"
        folders:

      - title: "removeColumn()"
        url: "#eiselist_fn_removecolumn"
        folders:

      - title: "setColumnOrder()"
        url: "#eiselist_fn_setcolumnorder"
        folders:

      - title: "setColumnProperty()"
        url: "#eiselist_fn_setcolumnproperty"
        folders:

    - title: "List Data Handling"
      folders:

      - title: "composeSQL()"
        url: "#eiselist_fn_composesql"
        folders:

      - title: "getFilters"
        url: "#eiselist_jsfn_getfilters"
        folders:

      - title: "getFilterValue()"
        url: "#eiselist_fn_getfiltervalue"
        folders:

      - title: "getSearchCondition()"
        url: "#eiselist_fn_getsearchcondition"
        folders:

      - title: "handleDataRequest()"
        url: "#eiselist_fn_handledatarequest"
        folders:

      - title: "handleInput()"
        url: "#eiselist_fn_handleinput"
        folders:

      - title: "refresh()"
        url: "#eiselist_jsfn_refresh"
        folders:

      - title: "updateCell()"
        url: "#eiselist_fn_updatecell"
        folders:

    - title: "List Display"
      folders:

      - title: "show()"
        url: "#eiselist_fn_show"
        folders:

---

## <a name="cls_eiselist"></a>class __eiseList__

# eiseList

Data listing and filtering class with support of autoloading on scroll event, Excel output, Ajax cell update, column chooser, tabs filter.

   Version 1.5 (4.5)

Formerly known as 'phpList'
(c)2005-2025 Eliseev Ilya https://russysdev.github.io/eiseIntra/

Authors: Ilya Eliseev, Pencho Belneiski, Dmitry Zakharov, Igor Zhuravlev
License: MIT

sponsored: Yusen Logistics Rus LLC

### <a name="eiselist_prop_conf"></a>public property __$conf__

Configuration array with default settings. You can override them in constructor.

```php
public $conf = Array(
    'includePath' => '../'
    , 'dateFormat' => "d.m.Y" // 
    , 'timeFormat' => "H:i" // 
    , 'decimalPlaces' => "2"
    , 'decimalSeparator' => "."
    , 'thousandsSeparator' => ","
    , 'titleTotals' => 'Totals'
    , 'titlePleaseWait' => 'Please wait...'
    , 'titleNothingFound' => 'Nothing found'
    , 'titleERRORBadResponse' => 'ERROR: bad response'
    , 'titleTryReload' => 'try to reload this page'
    , 'titleFilterDateFrom' => 'Period Start'
    , 'titleFilterDateTill' => 'Period End'
    , 'titleFilterApply' => 'Apply'
    , 'titleFilterClear' => 'Clear'
    , 'titleFilterClose' => 'Close'
    , 'titleTabAny' => 'Any %s'
    
    , 'controlBarButtons' => 'btnSearch|btnFieldChooser|btnOpenInExcel|btnReset'

    , 'exactMatch' => false
    
    , 'dataSource' => "" //$_SERVER["PHP_SELF"]
    
    , 'rowsFirstPage' => 100
    , 'rowsPerPage' => 100
    , 'maxRowsForSelection' => 5000
    , 'calcFoundRows' => true
    , 'cacheSQL' => true
    , 'doNotSubmitForm' => true

    , 'isNullFilterValue' => 'n/a'
    
    , 'cookieExpire' => 0 

    , 'hiddenColsExcel' =>  array() // array of columns to be hidden on Excel output
    , 'flagNoExcel' => false

    , 'debug' => false

    , 'tabsFilterColumn' => null // if set, list will try to breakdown data into tabs with titles from column source
);
```

__Category__: List Configuration  



### <a name="eiselist_prop_col_default"></a>static property __$col_default__

Default column settings

```php
private static $col_default = Array(
    'title' => ''
    , 'type' => 'text' // text, integer, date, datetime, select, combobox, ajax_dropdown, checkbox, row_id, order 
    , 'PK' => false // if true, column is a primary key, it will be used to update data
    , 'phpLNums' => null // if true, column will be rendered as row number, it will be used to update data
    , 'sql' => null // SQL expression, if empty, field is used
    , 'source' => null // source for select, combobox, ajax_dropdown
    , 'source_prefix' => null // source for select, combobox, ajax_dropdown, if empty, field is used 
    , 'order_field' => null // field name to order by, if empty, field is used
    , 'filter' => null
    , 'filterValue' => null // value to filter by, if empty, no filter is applied
    , 'exactMatch' => false // if true, filter will be exact match, otherwise LIKE '%filterValue%'
    , 'group' => null // field name to group by, if empty, no grouping is applied
    , 'aggregate' => null // aggregate function to apply, if empty, no aggregate is applied
    , 'flagNoExcel' => false // if true, column will not be shown in Excel output
    , 'checkbox' => false // if true, column will be rendered as checkbox
    , 'class' => '' // CSS class to apply to the column
    , 'width' => '' // CSS width to apply to the column
    , 'href' => null // if set, column will be rendered as link with this href
    , 'nourlencode' => false // if true, href will not be urlencoded
    , 'limitOutput' => 0 // if set, column will be limited to this number of characters
);
```

__Category__: List Configuration  



### <a name="eiselist_fn___construct"></a>public function ____construct()__

Class constructor. Intra object can be passed as part of $arrConfig array with 'intra' key to inherit some settings from eiseIntra.

__Parameters__: 

* 	__$oSQL__ (object) - SQL object
* 	__$strName__ (string) - List name
* 	__$arrConfig__ (array) - Configuration array (see [eiseList::$conf](#eiselist-conf) for possible settings)

__Category__: List Configuration  



### <a name="eiselist_fn_addcolumn"></a>public function __addColumn($arrCol)__

This method adds columns to $Columns property.

__Parameters__: 

* 	$arrCol - associative array with column properties. See description of $Columns property.
* 	$arrCol['field'] - is mandatory
* 	$arrCol['fieldInsertBefore'] - field name to insert before
* 	$arrCol['fieldInsertAfter'] - field name to insert after

__Category__: List Configuration  



### <a name="eiselist_fn_setcolumnproperty"></a>public function __setColumnProperty()__

This method changes column property to defined values and returns its previous value.

__Parameters__: 

* 	__$field__ (string) - field name, 'field' property of column, the search key
* 	__$property__ (string) - property name to change
* 	__$value__ (variant) - value to be set. If NULL, $property become unset from this column

__Returns__: variant - previous property value. If property ot column is not found , it returns NULL

__Category__: List Configuration  



### <a name="eiselist_fn_setcolumnorder"></a>public function __setColumnOrder($arrColFields)__

This method filters columns according to supplied array and put it in specified order

__Parameters__: 

* 	__$arrColFields__ (array) - array of field names to be kept and their order

__Category__: List Configuration  



### <a name="eiselist_fn_getcolumn"></a>public function __getColumn($field, &$key='')__

This function returns column array and updates the key it could be accessed from $lst->Columns list

__Parameters__: 

* 	$field
* 	$key=''

__Category__: List Configuration  



### <a name="eiselist_fn_removecolumn"></a>public function __removeColumn($field)__

This function removes column by field name.

__Parameters__: 

* 	$field

__Category__: List Configuration  



### <a name="eiselist_fn_handledatarequest"></a>public function __handleDataRequest()__

This function handles data requests and returns them in requested format: JSON, Aggregate data JSON or Excel XML.

It caches SQL query and columns configuration for faster response on next requests.

__Category__: List Data Handling  



### <a name="eiselist_fn_show"></a>public function __show()__

This function directly outputs list contents in HTML.

__Category__: List Display  



### <a name="eiselist_fn_updatecell"></a>public function __updateCell()__

This function updates a particular field in eiseList with DataAction=updateCell. If there's no $intra and user isn't granted to update or write on the script below, it doesn't work.
Otherwise it updates a field in the table specified in sqlFrom basing on primary key value. AFter update it generates json with intra and dies.

In currenct version it works only with string and int values. NULL cannot be transferred.

__Parameters__: 

* 	__$newData__ (array) - data necesasry fo update, as associative array:
     - pk (string) - primary key value
     - field (string) - field name
     - value (string) - field value

__Category__: List Data Handling  



### <a name="eiselist_fn_getcookie"></a>public function __getCookie()__

This function returns cookie array.

__Returns__: array of cookie data for given list. If there're no cookie set, it returns null.



### <a name="eiselist_fn_getfiltervalue"></a>public function __getFilterValue( $field )__

This function obtains filter value for $field parameter from $_GET.

__Parameters__: 

* 	$field string - field name to get filter value for.

__Returns__: string - filter value. If filter's not set, it returns NULL.

__Category__: List Data Handling  



### <a name="eiselist_fn_handleinput"></a>private function __handleInput()__

This method handles eiseList input: $_GET, $_COOKIE and session parameters.
What can be set to the list via input:
- hidden columns
- maximum row number to obtain during the query
- sort order field (list should have the column with 'order_field' parameter with this field name)
- sort order direction
- filter values

The list gets search parameters from cookie or session, but if there's something set with $_GET, this data overrides cookie settings.
What parameters can be set with $_GET:
- ```<list name>HiddenCols``` - comma-separated list of hidden columns
- ```<list name>MaxRows``` - maximum row number to obtain during the query
- ```<list name>OB``` - field name to order by
- ```<list name>ASC_DESC``` - direction field, can be 'ASC' or 'DESC'
- ```<list name>_<field name>``` - filter value(s).

Parameters that saved with cookies are stored as serialized array under key ```$this->conf['cookieName']```.
Cookie array member keys are: 
- HiddenCols - comma-separated string with columns names to be hidden
- MaxRows - maximum row number to obtain
- OB - order by field name
- ASC_DESC - ordering direction (ascending/descending)
- ```<filter values>``` - are stored under keys consists of ```$this->name.'_'.$col['filter']``` .

Filter values for columns with  ```'filterType'=>'multiline'``` are stored into ```$_SESSION``` variable as array member under ```$this->conf['cookieName']``` key.

Hidden columns array, maximum row number, sort ordering parameters are being set to the corresponding list variables.
Filter values are assigned to $this->Columns array members as 'filterValue' array member.
Afterwards it sets cookie with specified parameters and saves correspoding data into the session.

__Category__: List Data Handling  



### <a name="eiselist_fn_composesql"></a>private function __composeSQL()__

This function composes SQL query for the list basing on list columns, filters, sorting and grouping settings.

__Category__: List Data Handling  



### <a name="eiselist_fn_getsearchcondition"></a>private function __getSearchCondition(&$col)__

This method returns SQL search expression for given column as string that looks like ```myColumn='my filter value'```.
In common case: ```<searchSubject> <searchOperator> <searchCriteria>```

```<searchSubject>``` is column name or SQL expression that would be tested on match with supplied filter value.

```<searchOperator>``` and ```<searchCriteria>``` are defined basing on column type, filter value and other factors.

For text, it searches for partial match by default (expression is ```myColumn LIKE '%my filter value%'```)

In case when column has 'exactMatch' property set to TRUE or filter value is encolsed into double or single quotes ("'" or """), it returns expression for direct match: ```myColumn='my filter value'```

For numeric values it allows to use comparison operators, like ```=```, ```,```, ```<```, ```>=``` or ```<=``` before the number in filter value.
Same is for date/datetime values. For these types it also allows logical "&" ("and")  operator.

If filter value is empty, it returns empty string (only if ```exact match``` option is not set for this column).
If filter value matches matches isNullFilterValue from configuration we return ```<searchExpression> IS NULL```.

__Parameters__: 

* 	__$col__ (array) - column, a single member of eiseList::Columns property.

__Returns__: string

__Category__: List Data Handling  






## <a name="cls_phplister"></a>class __phpLister__

phpLister class extends eiseList class to provide backward compatibility with phpLister library.
It has the same constructor as phpLister class had and an Execute method that sets main SQL parameters.

__Category__: List Backward Compatibility  




## <a name="jqp_eiselist"></a>jquery_plugin __eiseList__

eiseList jQuery wrapper
===

requires jQuery UI 1.8: 
http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js


Published under GPL version 2 license
(c)2005-2025 Ilya S. Eliseev ie@e-ise.com, easyise@gmail.com

Contributors:
 - Pencho Belneiski
 - Alexander Demidov
 - Dmitry Zakharov
 - Igor Zhuravlev

 eiseList reference [http://russysdev.github.io/eiseIntra/gridlist]()

### <a name="eiselist_jsfn_init"></a>public function __init(conf)__

This function initializes eiseList plugin on specified element. This element is formed with eiseList PHP class. It craetes eiseList object and associates it with the element.

__Parameters__: 

* 	{*} conf - Configuration object that overrides default settings. See eiseList.defaults for available settings and their default values.

__Category__: List Configuration  
__Returns__:   



### <a name="eiselist_jsfn_refresh"></a>public function __refresh()__

Refreshes the eiseList contents according to existing filters and sort order.

__Category__: List Data Handling  
__Returns__:   



### <a name="eiselist_jsfn_getlistobject"></a>public function __getListObject()__

```eiseList('getListObject')``` returns eiseList object associated with the element.

__Category__: List Configuration  
__Returns__: eiseList object  



### <a name="eiselist_jsfn_getrowselection"></a>public function __getRowSelection()__

This method returns array or string of selected row IDs - in other words, rows marked with checkboxes in fields that match the selector```input[name='sel_"+list.id+"[]']```.

__Returns__: array of row IDs  






