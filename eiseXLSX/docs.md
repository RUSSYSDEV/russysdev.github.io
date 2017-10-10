---
layout: docs
title: "eiseXLSX reference"
sidebar_left:
  title: Class reference
  class: rsd-navbar-left
  id: "rsd_navbar_left"
  folders:
    - title: "class eiseXLSX:"
      url: "#eisexlsx"
      folders:

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eisexlsx-__construct"

        - title: "data()"
          url: "#eisexlsx-data"

        - title: "getDataValidationList()"
          url: "#eisexlsx-getdatavalidationlist"

        - title: "getDataByRange()"
          url: "#eisexlsx-getdatabyrange"

        - title: "getRowCount()"
          url: "#eisexlsx-getrowcount"

        - title: "fill()"
          url: "#eisexlsx-fill"

        - title: "getFillColor()"
          url: "#eisexlsx-getfillcolor"

        - title: "cloneRow()"
          url: "#eisexlsx-clonerow"

        - title: "findSheetByName()"
          url: "#eisexlsx-findsheetbyname"

        - title: "selectSheet()"
          url: "#eisexlsx-selectsheet"

        - title: "cloneSheet()"
          url: "#eisexlsx-clonesheet"

        - title: "renameSheet()"
          url: "#eisexlsx-renamesheet"

        - title: "removeSheet()"
          url: "#eisexlsx-removesheet"

        - title: "Output()"
          url: "#eisexlsx-output"

      - title: "static methods:"
        folders:

        - title: "checkAddressInRange()"
          url: "#eisexlsx-checkaddressinrange"

        - title: "getRangeArea()"
          url: "#eisexlsx-getrangearea"

        - title: "cellAddress()"
          url: "#eisexlsx-celladdress"




    - title: "class eiseXLSX_Exception:"
      url: "#eisexlsx_exception"
      folders:

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eisexlsx_exception-__construct"

        - title: "__toString()"
          url: "#eisexlsx_exception-__tostring"




sidebar_right:
  title: By category
  class: rsd-navbar-right
  id: "rsd_navbar_right"
  folders:
    - title: "Cell address routines"
      folders:

      - title: "cellAddress()"
        url: "#eisexlsx-celladdress"
        folders:

      - title: "checkAddressInRange()"
        url: "#eisexlsx-checkaddressinrange"
        folders:

      - title: "getRangeArea()"
        url: "#eisexlsx-getrangearea"
        folders:

    - title: "Cell decoration"
      folders:

      - title: "fill()"
        url: "#eisexlsx-fill"
        folders:

      - title: "getFillColor()"
        url: "#eisexlsx-getfillcolor"
        folders:

    - title: "Read / Write"
      folders:

      - title: "__construct()"
        url: "#eisexlsx-__construct"
        folders:

      - title: "Output()"
        url: "#eisexlsx-output"
        folders:

    - title: "Sheet manipulations"
      folders:

      - title: "cloneRow()"
        url: "#eisexlsx-clonerow"
        folders:

      - title: "data()"
        url: "#eisexlsx-data"
        folders:

      - title: "getDataByRange()"
        url: "#eisexlsx-getdatabyrange"
        folders:

      - title: "getDataValidationList()"
        url: "#eisexlsx-getdatavalidationlist"
        folders:

      - title: "getRowCount()"
        url: "#eisexlsx-getrowcount"
        folders:

    - title: "Workbook manipulations"
      folders:

      - title: "cloneSheet()"
        url: "#eisexlsx-clonesheet"
        folders:

      - title: "findSheetByName()"
        url: "#eisexlsx-findsheetbyname"
        folders:

      - title: "removeSheet()"
        url: "#eisexlsx-removesheet"
        folders:

      - title: "renameSheet()"
        url: "#eisexlsx-renamesheet"
        folders:

      - title: "selectSheet()"
        url: "#eisexlsx-selectsheet"
        folders:

---

eiseXLSX
===

XLSX file data read-write library that operates with native cell addresses like A1 or R1C1.

This class was designed for server-side manipulations with uploaded spreadsheets in Microsoft® Excel™ 2007-2011-2013 file format – OpenXML SpereadsheetML.

Current version of this library allows to read user-uploaded file contents and to write data to preliminary uploaded template file and send it back to the user:
* it allows to change existing cell data
* clone rows and fill-in new rows with data
* clone sheets within workbook, remove unnecessary sheets
* colorization of cells.

This library offers the easiest way to make Excel™-based data exchange with information systems written in PHP.

Users are no longer need to convert Excel™ spreadsheets to CSV and other formats, they can simply upload data to the website using their worksheets.

You can use files received from users as your website’s output document templates with 100% match of cell formats, sheet layout, design, etc. With eiseXLSX you can stop wasting your time working on output documents layout – you can just ask your customer staff to prepare documents they’d like to see in XLSX format. Then you can put these files to the server and fill them with necessary data using PHP.

Unlike other PHP libraries for XLSX files manipulation eiseXLSX is simple, compact and laconic. You don’t need to learn XLSX file format to operate with it. Just use only cell addresses in any formats (A1 and R1C1 are supported) and data from your website database. As simple as that.
  
>  Based on:  
>  Simple XLSX   
>  @author kirik <mail@kirik.ws>  
>  @version 0.1  
>  Developed under GNU General Public License, version 3: <http://www.gnu.org/licenses/lgpl.txt>

__Package__: eiseXLSX <https://github.com/easyise/eiseXLSX>  
__Copyright__: (c) 2012-2017 Ilya S. Eliseev  
__License__: GNU Public License <http://opensource.org/licenses/gpl-license.php>  
__Version__: 1.9beta  
__Author__: Ilya Eliseev <ie@e-ise.com>, Continutors: Igor Zhuravlev, Dmitry Zakharov  
__Uses__: SimpleXML, DOM  




## <a name="eisexlsx"></a>class __eiseXLSX__

The class that creates objects with Excel workbooks inside. Public class methods are allowing to make any declared manupulations with the workbook.

### <a name="eisexlsx-__construct"></a>public function ____construct( $templatePath='' )__

The constructor. It reads Excel workbook supplied as the template or data source to read. It can be either XLSX file or unzipped one, into the directory speicfied in $templatePath parameter. Unzipping XLSX files will reduce your server CPU load ;).

Also it parses all XMLs inside the workbook and makes all the necessary preparations for future data read and manipulations.

If $templatePath parameter is omitted it reads default template. If path's not found it throws an exception (object of eiseXLSX_Exception class).

__Category__: Read / Write  

__Parameters__: 
* __$templatePath__ (string) - The path to Excel workbook file or directory.


### <a name="eisexlsx-data"></a>public function __data($cellAddress, $data = null, $t = "s")__

eiseXLSX::data() function reads or sets data for cell with specified $cellAddress. If parameter $data is omitted, function just returns current cell data. If $data contains something, function tries to set it.
Data types note:
- strings are to be returned and assigned as strings
- numeric values are to be returned and set as strings with numeric values in latin1 locale inside.
- date/time values are to be returned and set as strings formatted as 'YYYY-MM-DD HH:MM:SS'

__Category__: Sheet manipulations  

__Parameters__: 
* __$cellAddress__ (string) - both R1C1 and A1 address formats are acceptable. Case-insensitive. Examples: "AI75", "r10c25".
* __$data__ (mixed) - data to set. If not set at function call, function just returns data. If set, function sets this data for given cell.
* __$t__ (string) - if omitted eiseXLSX accepts the data as string and put contents to sharedStrings.xml. Otherwise it tries to re-format date as seconds or number as real one with period as decimal separator.
	Possible values: 'n' - for numeric values like integer or real numbers;
	  's' (default) - for strings, but if string can be evaluated as number using is_numeric() PHP function, numeric value will be set;
	  'd' - for datetime values.
	
__Returns__: string - cell data before new value is set (if any).


### <a name="eisexlsx-getdatavalidationlist"></a>public function __getDataValidationList($cellAddress)__

This function returns contents of drop-down list for given cell, if Data Validation / List option is activated for given cell. If there's no list, this function returns NULL, if reference to drop-down list cell range is broken, it returns FALSE. Otherwise it returns associative array with origin cell addresses as keys and cell data as values. Function eiseXLSX::getDataByRange() (that uses eiseXLSX::data()) is used to obtain cell data.
eiseXLSX::getDataValidatioList() can be useful when you need to obtain contents of reference tables of spreadsheet fields when you try to import the workbook into the database. 
NOTE: This function supports only local cell range references, within current workbook. If requested cell takes drop-down list values from another workbook, function returns FALSE.
NOTE: Function supports only single-row or single-columns references to drop-down cell range. Otherwise it returns FALSE.

__Category__: Sheet manipulations  

__Parameters__: 
* __$cellAddress__ (string) - Cell address. Both R1C1 and A1 address formats are acceptable. Case-insensitive. Examples: "AI75", "r10c25".
	
__Returns__: mixed - NULL if there's no data validation, associative array of drop-down values with origin cell addresses as keys and FALSE in case of broken/invalid reference to drop-down cell range.


### <a name="eisexlsx-getdatabyrange"></a>public function __getDataByRange($range)__

This function returns an array of data obtained from the specified $range. This range can be as well as formula-formatted (e.g. "Sheet 2!$A1:$B12") as normal particular range (like "B15:B50"). Cell list, range list and other range formats are NOT SUPPORTED (YET).
Reference sheets (if any) should exist in the same workbook as current sheet.
Empty values are not returned. 
If range cannot be located, function returns FALSE.

__Category__: Sheet manipulations  

__Parameters__: 
* __$range__ (string) - cell range in normal format (like "A14:X14") or formula-based refrence ("Sheet 3!$Z15:$Y17").
	
__Returns__: array of data obtained from range with R1C1 address as keys and values as they've been obtained with data() function. If range cannot be located, function returns FALSE.


### <a name="eisexlsx-getrowcount"></a>public function __getRowCount()__

This method returns number of rows in active sheet.

__Category__: Sheet manipulations  

__Returns__: int - row number of the last row.


### <a name="eisexlsx-fill"></a>public function __fill($cellAddress, $fillColor)__

Fills cell at $cellAddress with color $fillColor or clears cell off any background color, if $fillColor is set to NULL, 0 or ''.
If cell is not found or color string is wrongly specified, it throws an exception.

__Category__: Cell decoration  

__Parameters__: 
* __$cellAddress__ (string) - Cell address, both A1 and R1C1 address formats are acceptable.
* __$fillColor__ (string) - HTML-style color in Hex pairs, for example: #FFCC66. Should always start with hash.
	
__Returns__: simpleXML object that represents specified cell.


### <a name="eisexlsx-getfillcolor"></a>public function __getFillColor($cellAddress)__

This function returns fill color of cell located at $cellAddress. Color is returned as W3C hexadecimal value that starts with hash symbol.
If cell is not found it throws an exception.

WARNING: in current version this function doesn't take into account alfa channel information stored in first 'two bytes' of OpenXML color information string. It presumes that there's always 'FF' mask in alha channel (no transparency).

__Category__: Cell decoration  

__Parameters__: 
* __$cellAddress__ (string) - Cell address, both A1 and R1C1 address formats are acceptable.
	
__Returns__: string Color in W3C format.


### <a name="eisexlsx-clonerow"></a>public function __cloneRow($ySrc, $yDest)__

eiseXLSX::cloneRow() method clones row with number $ySrc to $yDest, other existing cells are moved down by one position. 
All row contents and styles are simply copied from origin.
It returns simpleXML object with cloned row.
WARNING: In version 1.6 this method is not friendly to PrintAreas, it they exist and include cells below cloned one. You'll probalby receive 'Currupted file' message from Excel.
WARNING: This function wasn't tested for cloning rows from down to up: it's recommended to use it only if $ySrc < $yDest, i.e. when your origin row is upper than destination.

__Category__: Sheet manipulations  

__Parameters__: 
* __$ySrc__ (int) - row number of origin. Starts from 1, as user can see on Excel screen
* __$yDest__ (int) - destination row number.
	
__Returns__: object simpleXML object with newly added row


### <a name="eisexlsx-findsheetbyname"></a>public function __findSheetByName($name)__

This function returns sheet ID as specified in sheetId attribute of the officeDocument.

__Category__: Workbook manipulations  

__Parameters__: 
* $name string - sheet name to find
	
__Returns__: string - sheet ID if sheet found in current workbook, otherwise false.


### <a name="eisexlsx-selectsheet"></a>public function __selectSheet($id)__

Function sets sheet with specified $id as active. Internally, $this->_cSheet becomes a sheet with $id.
If such sheet cannot be located in the workbook, function throws an exception.
NOTICE: sheet numbers (Id's) are started from 1 in speadSheetML.

__Category__: Workbook manipulations  

__Parameters__: 
* __$id__ (string) - sheet ID as specified in sheetId attribute of the officeDocument.
	
__Returns__: object SimpleXML object that represents the sheet.


### <a name="eisexlsx-clonesheet"></a>public function __cloneSheet($originSheetId, $newSheetName = '')__

This method clones original sheet with sheetId supplied with $originSheetId parameter into new one labeled as $newSheetName
New sheet doesn't become active. eiseXLSX::cloneSheet() returns sheetId of newly created sheet.

__Category__: Workbook manipulations  

__Parameters__: 
* __$originSheetId__ (string) - sheetId of origin sheet
* __$newSheetName__ (string) - new sheet label, if not set eiseXLSX sets 'Sheet <newSheetId>' as label.
	
__Returns__: string $newSheetId - id of sheet added to the workbook.


### <a name="eisexlsx-renamesheet"></a>public function __renameSheet($sheetId, $newName)__

This method changes sheet tab label for specified sheet with $sheetId to $newName.

__Category__: Workbook manipulations  

__Parameters__: 
* __$sheetId__ (string) - sheetId of the sheet to be renamed
* __$newName__ (string) - new sheet tab label
	
__Returns__: null


### <a name="eisexlsx-removesheet"></a>public function __removeSheet($id)__

removeSheet() method deletes the sheet specified with $id parameter.

__Category__: Workbook manipulations  

__Parameters__: 
* __$id__ (string) - sheetId of target sheet
	
__Returns__: null


### <a name="eisexlsx-output"></a>public function __Output($fileName = "", $dest = "S")__

This method outputs Excel sheet, with the following destination options specified in $dest parameter:

1. D - Excel workbook will be sent to the output as an XLSX file for user download, with "Content-disposition: attachment" header. File name should be specified in $fileName parameter. In case when it empty method will use template file/folder name. Missing ".xlsx" extension will be added.
2. I - Excel workbook is being send out with Content-disposition: inline. It works only with older versions of MSIE/MS Office. It's not recommended to use it. Go for "D" with properly specified filename instead.
3. F - Excel workbook will be saved as file with the name and path specified in $fileName parameter. If there's only file name, it will use current path so remember to chdir() to the location you need. If there's no $fileName, method will save workbook under temporary name. File name will be returned.
4. S (or default) - Method will return workbook file as string. If $fileName parameter is set, workbook will be also saved under this name.

There's some smart guess option added for $dest parameter: if you specify only $fileName - omitted $dest will be set to 'D'. If $fileName containes directory separators - omitted $dest will be set to 'F' 

Below are the examples of typical usage scenarios:
* `$xlsx->Output('my_workbook.xlsx', 'D');` - user will see download prompt with the file named 'my_workbook.xlsx'
* `$xlsx->Output('my_workbook.xlsx');` - the same, user will see download prompt with the file named 'my_workbook.xlsx'
* `$xlsx->Output('/var/files/my_workbook.xlsx', 'F');` - file will be saved on server
* `$xlsx->Output('my_workbook.xlsx', 'F');` - file will be saved at server in current working directory
* `$xlsx->Output('/my_workbook.xlsx');` - file will be tried to save on server root
* `$my_workbook = $xlsx->Output();` - variable $my_workbook will contain workbook file content. Usable when you need to make mail attachment, for example.

__Category__: Read / Write  

__Parameters__: 
* __$fileName__ (string) - (optional) File name. If not set, original template name will be used. Missing file extension (.xlsx) will be added automatically.
* __$dest__ (string) - (optional) Destination of method output. See description above.
	
__Returns__: string Workbook file name when $dest="F" or string with workbook content when $dest="S". When $dest="I" or "D" it quits PHP with die().


### <a name="eisexlsx-checkaddressinrange"></a>static function __checkAddressInRange($adrNeedle, $adrHaystack)__

checkAddressInRange() function checks whether given cell belong to specified cell address range.

__Category__: Cell address routines  

__Parameters__: 
* __$adrNeedle__ (string) - cell address to check. Both R1C1 and A1 address formats are acceptable. Case-insensitive. Examples: "AI75", "r10c25".
* __$adrHaystack__ (string) - cell address range. Both R1C1 and A1 address formats are acceptable. Can be as single cell, cell range (cell1:cell2) and list of cells and ranges, space-separated. Case-insensitive. Examples: "AI75:AJ86", "r10c25:r1c25 ", "C168 AF113:AG116 AI113:AI116 L113:N116".
	
__Returns__: boolean - true if cell belongs to the range, false otherwise


### <a name="eisexlsx-getrangearea"></a>static function __getRangeArea($range)__

This function returns array of top-left and bottom-right coordinates of particular range area.

__Category__: Cell address routines  

__Parameters__: 
* $range string - cell address range. Both R1C1 and A1 address formats are acceptable. Can be as single cell or cell range (cell1:cell2). Case-insensitive. Examples: "AI75:AJ86", "r10c25:r1c25".
	
__Returns__: array - array(array($x_left, $x_right), array($y_top, $y_bottom)) where x and y are column and row number correspondingly.


### <a name="eisexlsx-celladdress"></a>static function __cellAddress($cellAddress)__

Receives cell address in R1C1 or A1 format and returns address variations as array.

Array members are: abscissa, ordinate, A1 and R1C1 -formatted addresses.

__Category__: Cell address routines  

__Parameters__: 
* __$cellAddress__ (string) - both R1C1 and A1 address formats are acceptable. Case-insensitive. Examples: "AI75", "r10c25".
	
__Returns__: array `[ $x, $y, $a1, $r1c1 ]`:
* $x - column number (starting from 1)
* $y - row number (starting from 1)
* $a1 - cell address in A1 format. "A" in capital case.
* $r1c1 - cell address in R1C1. "R" and "C" are capital too.





## <a name="eisexlsx_exception"></a>class __eiseXLSX_Exception__

Throwable class for exceptions.

### <a name="eisexlsx_exception-__construct"></a>public function ____construct($msg)__

Class constructor, updates message and prints debug backtrace.



### <a name="eisexlsx_exception-__tostring"></a>public function ____toString()__

Allows to get message directly from the caught exception






