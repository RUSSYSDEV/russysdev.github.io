---
layout: project_home
title: "eiseXLSX: Excel read/write PHP library"
excerpt: >
  Read and write XLSX files with native cell addresses like A1 or R1C1, fill-in templates prepared by your customer!
  This class was designed for server-side manipulations with uploaded spreadsheets in Microsoft® Excel™ 2007-2011-2013 file format – OpenXML SpereadsheetML.

---

* Home
* Will be replaced with the ToC, excluding the "Contents" header
{:toc}
{:.to-navbar-left}

# eiseXLSX: Excel read/write PHP library
{:.no_toc}

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
>  Simple XLSX [http://www.kirik.ws/simpleXLSX.html]()  
>  @author kirik [mail@kirik.ws]()  
>  @version 0.1  
>  Developed under GNU General Public License, version 3: [http://www.gnu.org/licenses/lgpl.txt]()

__Copyright__: (c) 2012-2018 Ilya S. Eliseev  
__License__: GNU Public License [http://opensource.org/licenses/gpl-license.php](http://opensource.org/licenses/gpl-license.php)  
__Author__: Ilya Eliseev [ie@e-ise.com](mailto:ie@e-ise.com)  
__Uses__: SimpleXML, DOM  
__Version__: 1.6  
__Package__: eiseXLSX [https://github.com/easyise/eiseXLSX](https://github.com/easyise/eiseXLSX)  

## Installation / Usage

IMPORTANT: Verify that PHP is allowed to write to the temporary directory (/tmp, /var/tmp).

### Install with Composer

Add the following line into your project's `composer.json`, inside "require" block:

```
{
	"require": {
		
		"easyise/eisexlsx": "1.6.*", 

	}
```

Run `composer install` or `php composet.phar install` in your project root directory.

Add this line to the PHP script:

```
<?php
require __DIR__.'/vendor/autoload.php';
```
{:.language-php}


### Manual install

[Download](https://github.com/easyise/eiseXLSX/archive/master.zip) and unzip the library to any folder inside your document root. No special permissions required. 

Include/require this file into your project:
```
<?php
include_once $path_to_eiseXLSX_root."/eiseXLSX.php";
```
{:.language-php}


### Examples

Write:

- Obtain formatted XLSX from your customer
- Unzip it to the folder inside your project (or any other folder you like)
- Make PHP script and include similar code inside:

```
$xlsx = new eiseXLSX("myemptyfile.xlsx");

$xlsx->data('A4', 'Hello, world!'); // either A1 or R1C1 are accepted

$xlsx->Output("mynewfile.xlsx", "F"); // save the file
```
{:.language-php}

Read:

```       
try { //give it a try to avoid any uncaught error 
      // caused by broken content of uploaded file
    $xlsx = new eiseXLSX($_FILES["fileXLSX"]["tmp_name"]);
} catch(eiseXLSX_Exception $e) {
    die($e->getMessage());
}

echo ($myData = $xlsx->data("R15C10")); //voilat!
```
{: .language-php}

## Changelog

New in version 1.6 (20.09.2018): 

- Composer support
- locale dependency fix

- method eiseXLSX::getDataValidationList($cellAddress) - returns data validation list as associative array.
- static method eiseXLSX::checkAddressInRange() - checks whether cell address belong to given range or not.
- method eiseXSLX::getDataByRange() - returns associative array of data in specified cell range.

## Feedback and Support

Please don't be hesistate to leave feedback to the developer! It can be done in the following ways:
* send mail message to [ie@e-ise.com]()
* or make issue with [GitHub's issues](https://github.com/easyise/eiseXLSX/issues)

Contributors are welcome!

---
