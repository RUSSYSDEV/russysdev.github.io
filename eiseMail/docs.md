---
layout: docs
title: "eiseIntra core"
sidebar_left:
  title: Class reference
  class: rsd-navbar-left
  id: "rsd_navbar_left"
  folders:
    - title: "class eiseSMTP:"
      url: "#eisesmtp"
      folders:

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eisesmtp-__construct"

        - title: "addMessage()"
          url: "#eisesmtp-addmessage"

        - title: "send()"
          url: "#eisesmtp-send"

        - title: "getMessageSource()"
          url: "#eisesmtp-getmessagesource"

      - title: "private methods:"
        folders:

        - title: "msg2String()"
          url: "#eisesmtp-msg2string"

        - title: "say()"
          url: "#eisesmtp-say"

        - title: "listen()"
          url: "#eisesmtp-listen"

        - title: "isItOk()"
          url: "#eisesmtp-isitok"

      - title: "public properties:"
        folders:

        - title: "$arrMessages"
          url: "#eisesmtp-arrmessages"




    - title: "class eiseIMAP:"
      url: "#eiseimap"
      folders:

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eiseimap-__construct"

        - title: "connect()"
          url: "#eiseimap-connect"

        - title: "receive()"
          url: "#eiseimap-receive"

        - title: "mailOverviewUTF8()"
          url: "#eiseimap-mailoverviewutf8"

        - title: "checkMailOverview()"
          url: "#eiseimap-checkmailoverview"

        - title: "handleMessage()"
          url: "#eiseimap-handlemessage"

        - title: "save()"
          url: "#eiseimap-save"

      - title: "private methods:"
        folders:

        - title: "fetch_file()"
          url: "#eiseimap-fetch_file"

      - title: "static properties:"
        folders:

        - title: "$arrDefaultConfig"
          url: "#eiseimap-arrdefaultconfig"




    - title: "class eiseMailException:"
      url: "#eisemailexception"
      folders:

      - title: "public methods:"
        folders:

        - title: "__construct()"
          url: "#eisemailexception-__construct"

        - title: "getMessages()"
          url: "#eisemailexception-getmessages"




    - title: "class eiseMail_base:"
      url: "#eisemail_base"
      folders:

      - title: "public methods:"
        folders:

        - title: "coverPassword()"
          url: "#eisemail_base-coverpassword"

      - title: "static methods:"
        folders:

        - title: "explodeAddresses()"
          url: "#eisemail_base-explodeaddresses"

        - title: "getAddresses()"
          url: "#eisemail_base-getaddresses"

        - title: "prepareAddressRFC()"
          url: "#eisemail_base-prepareaddressrfc"

        - title: "doReplacements()"
          url: "#eisemail_base-doreplacements"

        - title: "getSubject()"
          url: "#eisemail_base-getsubject"

      - title: "protected methods:"
        folders:

        - title: "v()"
          url: "#eisemail_base-v"




sidebar_right:
  title: By category
  class: rsd-navbar-right
  id: "rsd_navbar_right"
  folders:
    - title: "Mail receive"
      folders:

      - title: "eiseIMAP::connect()"
        url: "#eiseimap-connect"
        folders:

      - title: "eiseIMAP::fetch_file()"
        url: "#eiseimap-fetch_file"
        folders:

      - title: "eiseIMAP::receive()"
        url: "#eiseimap-receive"
        folders:

    - title: "Mail send"
      folders:

      - title: "eiseSMTP::addMessage()"
        url: "#eisesmtp-addmessage"
        folders:

      - title: "eiseSMTP::send()"
        url: "#eisesmtp-send"
        folders:

    - title: "Message processing"
      folders:

      - title: "eiseIMAP::mailOverviewUTF8()"
        url: "#eiseimap-mailoverviewutf8"
        folders:

      - title: "eiseMail_base::doReplacements()"
        url: "#eisemail_base-doreplacements"
        folders:

      - title: "eiseMail_base::explodeAddresses()"
        url: "#eisemail_base-explodeaddresses"
        folders:

      - title: "eiseMail_base::getAddresses()"
        url: "#eisemail_base-getaddresses"
        folders:

      - title: "eiseMail_base::getSubject()"
        url: "#eisemail_base-getsubject"
        folders:

      - title: "eiseMail_base::prepareAddressRFC()"
        url: "#eisemail_base-prepareaddressrfc"
        folders:

    - title: "Utilities"
      folders:

      - title: "eiseMail_base::coverPassword()"
        url: "#eisemail_base-coverpassword"
        folders:

      - title: "eiseMail_base::v()"
        url: "#eisemail_base-v"
        folders:

---

eiseMail library
===

It consists of two major classes:
1. [eiseSMTP](#eisesmtp) - the class that sends mail using sockets and supports TLS and other required security features. Developed especially to make batch send much easier.
2. [eiseIMAP](#eiseimap) - the class that reads mail with IMAP. It's not just a wrapper to native PHP IMAP, it is aimed to obtain message attachments in simpliest possible way.

Both classes are based on [eiseMail_base](#eisemail_base) class that contains some handful utilities.

In case of exception, class methods are throwing [eiseMailException](#eisemailexception) object with mail message queue in its actual state so you can trace what messages were sent and what were not.  
PHP version: >5.1

__License__: GNU Public License <http://opensource.org/licenses/gpl-license.php>  
__Uses__: : OpenSSL, IMAP  
__Version__: : 1.0  
__Author__: : Ilya Eliseev <ie@e-ise.com>, contributors: Dmitry Zakharov, Igor Zhuravlev

Sponsors: Yusen Logistics Rus LLC, Russia  




## <a name="eisesmtp"></a>class __eiseSMTP__

Class for mail sending and communications via SMTP. In difference with other mail utilities in PHP, it is aimed for batch mailing to various recipients with a little adaptation of mail message to each recipient.
Message body, header, footer, subject can be set on main configuration options and then implemented in each mail in batch.

It can be used in the following way:
1.  Create object with connection settings to the SMTP server
2.  Add messages to send queue using addMessage() method (attachments can be added to messages as associative array members, class will handle them in proper way)
3.  Send queue using send() method, it returns message array with timestamps when messages were actually sent.
   
   
[send()](#eisemail-send) method uses sockets to connect to SMTP server. It supports host authentication and TLS channel encryption. It pushes the message queue to the server right after connection is established, channel encrypted and authentication succeeded. 

Being executed with `['flagAddToSentItems'] = true` send() method will make an attempt to save message in sender's "Sent Items" folder.
   
Class has been tested for proper communication with the following SMTP servers:
-   Postfix/Sendmail
-   Microsoft Exchange
-   Google mail
-   Microsoft Office365
-   Yandex mail
   
Actual example can be found in eiseMail_demo.php script attached to this package.

### <a name="eisesmtp-__construct"></a>public function ____construct($arrConfig)__

Constructor just initializes the object and covers password for possible verbose mode.

__Parameters__: 
* __$arrConfig__ (array) - configuration options array:
	- Content-Type (string) - message body content type, default "text/plain"
	- charset (string) - message body charset, default "utf-8"
	- host (string) - SMTP server host name / IP address, default "localhost"
	- port (string) - SMTP server port, default "25"
	- tls (boolean) - flag use TLS channel encryption, default false
	- login (string) - SMTP server login, default ""
	- password (string) - SMTP server password, default ""
	- localhost (string) - defines how to introduce yourself to SMTP server with HELO/EHLO SMTP command, default "localhost"
	- Subject (string) - default subject for message queue, default ''
	- Head (string) - default message body head, default ''
	- Bottom (string) - default message bottom , default ''
	- flagAddToSentItems (boolean) - set to true if you need a copy of message to be saved in user Sent Items, default false
	- imap_host (string) - IMAP host address, default ''
	- imap_login (string) - (optional) IMAP login. By default it is set by 'login' field. Specify only if it differs from it. Default ''
	- imap_password (string) - (optional) IMAP password, default ''
	- verbose (boolean) - when set to TRUE class methods are sending actual conversation data to standard output, default false
	- debug (boolean) - when set to TRUE mail is actually sent to 'rcpt_to_debug' address + verbose, default false
	
	Default mail message fields can be set here also:  
	- Content-type (default is 'text/plain')
	- charset (default is 'utf8')
	- From 
	- To
	- Reply-To 
	- Subject (string)
	- flagEscapeSubject
	- Head
	- Bottom
	
	See more at [eiseSMTP::addMessage()](#eisesmtp-addmessage) description.


### <a name="eisesmtp-addmessage"></a>public function __addMessage ($msg)__

This method adds message to message queue. Also it prepares all mandatory SMTP headers like `mail from:` and `rcpt to:` basing on From, To, Cc and Bcc fields.

__Category__: Mail send  

__Parameters__: 
* __$msg__ (array) - Associative array with message data. See description below:
	 - From (string) - content of 'From' field, can be set by default with object configuration options, see [eiseSMTP::__construct()](#eisesmtp-__construct), default `$this->conf['From']`. If not set, it will be taken from login field.
	 - Content_Type (string) - MIME-type, default is $this->conf['Content-Type']
	 - charset (string) - charset, default $this->conf['charset']
	 - To (string) - "To" header contents, default $this->conf['To']
	 - Reply-To (string) - "Reply-To" header contents, default' => $this->conf['Reply-To']
	 - Cc (string) - "Cc" addresses list, default null
	 - Bcc (string) - "Bcc" address list, default null
	 - Subject (string) - Message subject, default $this->conf['Subject']
	 - flagEscapeSubject (booelan) - flag that tells whether to escape subject or not, default can be set by $this->conf['flagEscapeSubject']
	 - Head (string) - Message header, default is $this->conf['Head']. Contents of this field will be combined with Text and Bottom members of this array. Before send all necessary replacements will be done with eiseMail_base::doReplacements().
	 - Text (string) - Message body, default ''
	 - Bottom (string) - Message footer, default $this->conf['Bottom']
	 - Attachments (array) - enumerable array of attachments. Each attachment have the following structure:
	     - filename (string) - file name as it will saved with the message
	     - content (binary) - attachment contents
	     - Content-Type (string) - attachment MIME-type
	
	Example:
	``` php
	$sender->addMessage(array('From'=> '"John Doe" <john.doe@acme.com>'
	        , 'To' => '"Bar, Foo" <foo.bar@sukaba.com>'
	        , 'Subject' => 'Message with 2 kinds of attachments'
	        , 'Text' => 'Hello there'
	        , 'Attachments' => array(
	           array ('filename'=>'file1.txt'
	               , 'content'=>"Hello\r\nfrom the text file"
	               , 'Content-Type'=>'text/plain')
	           , array ('filename'=>'file2.txt'
	               , 'content'=>"Hello\r\nfrom the text file again"
	               , 'Content-Type'=>'text/plain')
	           , array ('filename'=>'welcome_to_the_internet.jpg'
	               , 'content'=>file_get_contents('welcome_to_the_internet.jpg')
	               , 'Content-Type'=>'image/jpeg')
	
	           )
	        );
	```


### <a name="eisesmtp-send"></a>public function __send($arrMsg=null)__

This method performs connection to SMTP server and sends all message queue. 
Then it converts each message from $arrMessages to string, performs base64-encoding, chunk-splitting of the attachemtns and send each message to anyone in To, Cc and Bcc messages.  
In case of failure it throws eiseMailException object with message queue. If you need to analyze what message were sent or not, you can walk through eiseMailException $arrMessages array. Each member of this array will be updated with the following members:
- send_time (int) - UNIX timestamp when message was sent, in case of success
- error (string) - Error message, in case of failure

__Category__: Mail send  

__Parameters__: 
* __$arrMsg__ (array) - single message, see ...


### <a name="eisesmtp-getmessagesource"></a>public function __getMessageSource($ixToGet = null)__

This function returns source of a partiqular message in queue, its number (index) is specified by $ixToGet parameter. If this parameter is omitted, first message source is returned. This method uses msg2String private method.

__Parameters__: 
* __$ixToGet__ (integer) - Message number (index) in queue.
	
__Returns__: string Message source.


### <a name="eisesmtp-msg2string"></a>private function __msg2String($msg)__

This function prepares message for sending: it converts it to string with headers and message parts

__Parameters__: 
* __$msg__ (array) - message array
	
__Returns__: string Ready-to-send message data after SMTP DATA command.


### <a name="eisesmtp-say"></a>private function __say($words, $arrExpectedReplyCode=array())__

This function transmits data to SMTP server

__Parameters__: 
* __$words__ (string) - data to transmit
* __$arrExpectedReplyCode__ (array) - array of expected reply codes from the server.
	
__Returns__: void


### <a name="eisesmtp-listen"></a>private function __listen($arrExpectedReplyCode=array())__

This function listens for reply from SMTP server

__Parameters__: 
* __$arrExpectedReplyCode__ (array) - array of expected reply codes from the server.
	
__Returns__: string $data - string with SMTP reply to last transmission


### <a name="eisesmtp-isitok"></a>private function __isItOk($rcv, $arrExpectedReplyCode)__

This function analyze reply from SMTP server and, in case of unexpected reply, it throws the exception

__Parameters__: 
* __$rcv__ (string) - server reply
* __$arrExpectedReplyCode__ (array) - array of expected reply codes from the server.
	
__Returns__: void


### <a name="eisesmtp-arrmessages"></a>public variable __$arrMessages__

Mail message queue to send.






## <a name="eiseimap"></a>class __eiseIMAP__

Class to handle messages from IMAP/POP3 server

Uses PHP IMAP extension function

__Link__: http://php.net/manual/en/ref.imap.php  

### <a name="eiseimap-__construct"></a>public function ____construct($arrConfig)__

Object constructor. Receives configuration array as parameter and merges it with the default one.

__Parameters__: 
* __$arrConfig__ (array) - see [eiseImap::$arrDefaultConfig](#eiseimap-arrdefaultconfig)


### <a name="eiseimap-connect"></a>public function __connect()__

This method establishes connection with IMAP server.

__Category__: Mail receive  



### <a name="eiseimap-receive"></a>public function __receive()__

This method retrieves messages from the remote server as an associative array.

__Category__: Mail receive  

__Returns__: Message array in the same manner as source for eiseSMTP function.
- From (string) - sender, encoded to UTF-8
- To (string) - addressee, encoded to UTF-8
- CC (string) - CC field, encoded to UTF-8
- Subject (string) - Subject field, encoded to UTF-8
- overview (object) - first object from return value of [imap_fetch_overview()](http://php.net/manual/ru/function.imap-fetch-overview.php) function
- source (string) - message source
- Attachments (array) - array of attachments, in the same manner as for eiseSMTP function:
     - filename (string) - filename, encoded to UTF-8
     - content (binary) - binary content of the attached file
     - Content-Type (string) - content MIME type


### <a name="eiseimap-mailoverviewutf8"></a>public function __mailOverviewUTF8($overview)__

This function converts mail headers to unicode and updates $overview object that returned 
by [imap_fetch_overview()](http://php.net/manual/en/function.imap-fetch-overview.php) PHP function and updates the object with corresponding fields with _utf8 suffix:
 $overview->to_uft8
 $overview->from_uft8
 $overview->subject_utf8

__Category__: Message processing  

__Parameters__: 
* __$overview__ (object) - a single overview message object taken from the array returned by [imap_fetch_overview()](http://php.net/manual/en/function.imap-fetch-overview.php) PHP function
	
__Returns__: $overview object


### <a name="eiseimap-checkmailoverview"></a>public function __checkMailOverview($overview)__

Function that allows to filter mail by its overview.
If function returns true, mail attachments will be dowloaded also.
This is interface function, to be overridden in extending class.
By default it returns true, i.e. all messages will be returned with attachments.

__Parameters__: 
* __$overview__ (object) - a single overview message object taken from the array returned by [imap_fetch_overview() PHP function](http://php.net/manual/en/function.imap-fetch-overview.php)
	
__Returns__: variant - When it returns false if message will be skipped. If any other value - message will be completely fetched from the server


### <a name="eiseimap-handlemessage"></a>public function __handleMessage()__

Callback function to handle current messages stored in $this->msg object

__Returns__: boolean - If it returns true, receive() method sets flags for it specified in $conf['set_flags_on_handle']


### <a name="eiseimap-save"></a>public function __save($strMessage)__

This function saves message in specified IMAP mailbox. It was used in this library to save sent mail to "Sent Items" in function [eiseSMTP::send()](#eisesmtp-send).

__Parameters__: 
* __$strMessage__ (sttring) - the message, ready-to-send via SMTP


### <a name="eiseimap-fetch_file"></a>private function __fetch_file($part, $partID)__

Function recursively walks through all $part object and picks up any attachment.

This object is returned by [imap_fetchstructure()](http://php.net/manual/ru/function.imap-fetchstructure.php) PHP IMAP function. 

There can be 3 cases:
1. Message is the file: it has only one part that contains attached file
2. Multipart message: when message contains few parts: some for texts, some for attachments
3. Alternative messages: when message consists of few parts: each one can have few subparts with attachments/texts etc.  
    This function just walks through all these parts recursively.

__Category__: Mail receive  

__Parameters__: 
* __$part__ (object) - the object that represents message structure element
* $partID - id for part to be analyzed for attachments. '0' represents root $part of message, '1', '2', etc - subparts of root part
	    '2.1', '2.2', etc - subparts of sub-root part, and so on.


### <a name="eiseimap-arrdefaultconfig"></a>static variable __$arrDefaultConfig__

Default configuration associative array:
- host (string) - IMAP server host name / IP address, default "localhost"
- port (string) - IMAP server port , default "993"
- flags (string) - flags according to `imap_open()` PHP function , default '/imap/ssl'
- mailbox_name (string) - flags according to imap_open() PHP function, default 'INBOX'
- login (string) - SMTP server login , default ""
- password (string) - SMPT server password , default ""
- imap_open_options (int) - options for [imap_open()](http://php.net/manual/ru/function.imap-open.php), default 0
- imap_open_n_retries (int) - attempt number for [imap_open()](http://php.net/manual/ru/function.imap-open.php), default 1
- imap_open_params (string) - parameters array for [imap_open()](http://php.net/manual/ru/function.imap-open.php), default array() 
- search_criteria (string) -  search criteria for imap_search() function, default 'NEW'
- max_messages (string) -  maximum messages, default 10
- set_flags_on_scan (string) - flags to set on message when it's been scanned by script, default '\Seen'
- set_flags_on_handle (string) - flags to set on message when it's been handled by script, default '\Answered'
- flagGetMessageSource (string) - when TRUE it will obtain all message source on reception, default false
- verbose (string) - when set to TRUE class methods are sending actual flow data to standard output, default true






## <a name="eisemailexception"></a>class __eiseMailException__

This extension of Exception class should allow us to pass back messages array in its actual state

### <a name="eisemailexception-__construct"></a>public function ____construct($usrMsg, $arrMessages=array())__

Receives user message and $messages array

__Parameters__: 
* $usrMsg {string} text user message
* $arrMessages {array} array of messages that can be set as an attemp to save unsent / unhandled messages in case of exception.


### <a name="eisemailexception-getmessages"></a>public function __getMessages()__

Receives user message and $messages array

__Parameters__: 
* $usrMsg {string} text user message
* $arrMessages {array} array of messages that can be set as an attemp to save unsent / unhandled messages in case of exception.
	
	 
	function __construct($usrMsg, $arrMessages=array()){
	    parent::__construct($usrMsg);
	    $this->arrMessages = $arrMessages;
	}
	
	/* 
	This function should be used in 'catch' block after eiseMail::send() activation to obtain eiseMail::arrMessages array in its actual state





## <a name="eisemail_base"></a>class __eiseMail_base__

This class contains basic functions to handle mails/addresses/flow etc

### <a name="eisemail_base-coverpassword"></a>public function __coverPassword()__

In order to prevent uncovered password display in verbose mode, this function offers partial password coverage. Number of symbols to show is set by `eiseMail_base::passSymbolsToShow`. Default value is 3.
Password will be shown with first `eiseMail_base::passSymbolsToShow`, all the rest will be replaced with asterisks. Example: `echo eiseMail::coverPassword('qwerty'); // will print 'qwe***'`

__Category__: Utilities  



### <a name="eisemail_base-explodeaddresses"></a>static function __explodeAddresses($addrList, $defaultDomain = '')__

Explodes address list according to RFC2822: 
`"Name Surname" <mailbox@host.domain>`, `"Surname, Name" <mailbox1@host.domain>`
etc to array. Ordinary explode() will not work, because comma (",") can be a part of personal information.
E.g. `"John Smith, Mr" <john.smith@domain.com>`

__Category__: Message processing  

__Parameters__: 
* __$addrList__ (string) - Address list
	
__Returns__: array of strings with addresses


### <a name="eisemail_base-getaddresses"></a>static function __getAddresses($addrList, $defaultDomain = '')__

Retrieves exact unique addresses from list matching according to RFC2822: 
"Name Surname" <mailbox@host.domain>, "Surname, Name" <mailbox1@host.domain>
etc

__Category__: Message processing  

__Parameters__: 
* __$addrList__ (string) - Address list
	
__Returns__: array of strings with addresses w/o personal info


### <a name="eisemail_base-prepareaddressrfc"></a>static function __prepareAddressRFC( $addr, $defaultDomain='')__

Gets RFC-compliant mail address to be used with 'MAIL FROM:' and 'RCPT TO:' SMPT commands

__Category__: Message processing  

__Parameters__: 
* __$addr__ (string) - mail address list
	
__Returns__: false if $addr contains something wrong. Otherwise removes personal information from the address and returns address like '<mailbox@domain.com>'


### <a name="eisemail_base-doreplacements"></a>static function __doReplacements($text, $arrReplacements)__

It replaces escaped statements (e.g. ##Sender## or ##orderHref##) in $text
with values from $arrReplacements array (e.g 'Sender' => 'John Doe', 'orderHref' => 'http://mysite.com/orders/12345')

__Category__: Message processing  

__Parameters__: 
* __$text__ (string) - original text
* __$arrReplacements__ (array) - is an associative array of keys and replacements. Each occurence of ##$key## will be replaced with corresponding value.
	
__Returns__: string corrected text


### <a name="eisemail_base-getsubject"></a>static function __getSubject($rfc822)__

This function retrieves raw message subject from text representation of mail message.

__Category__: Message processing  

__Parameters__: 
* __$rfc822__ (string) - Mail message in rfc822 format
	
__Returns__: string with subject


### <a name="eisemail_base-v"></a>protected function __v($string)__

This function echoes if 'verbose' configuration flag is on.

__Category__: Utilities  

__Parameters__: 
* __$string__ (string) - string to echo.
	
__Returns__: void





