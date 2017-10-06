---
layout: project_home
title: "eiseMail: send/receive email PHP library"
excerpt: >
  Read mail messages, answer it with PHP using eiseSMTP and eiseIMAP, lightweight and simple alternatives to native libraries and mail() function.

---

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}
{:.to-navbar-left}

eiseMail library
===
{:.no_toc}

{{ post.excerpt }}

## Overview

This library consists of two major classes:
1. [eiseSMTP](#eisesmtp) - the class that sends mail using sockets and supports TLS and other required security features. Developed especially to make batch send much easier.
2. [eiseIMAP](#eiseimap) - the class that reads mail with IMAP. It's not just a wrapper to native PHP IMAP, it is aimed to obtain message attachments in simpliest possible way.

Both classes are based on [eiseMail_base](#eisemail_base) class that contains some handful utilities.

In case of exception, class methods are throwing [eiseMailException](#eisemailexception) object with mail message queue in its actual state so you can trace what messages were sent and what were not.  
PHP version required: >5.1

__License__: GNU Public License <http://opensource.org/licenses/gpl-license.php>  
__Uses__: : OpenSSL, IMAP  
__Version__: : 1.0  
__Author__: : Ilya Eliseev <ie@e-ise.com>, contributors: Dmitry Zakharov, Igor Zhuravlev

## Installation/Download

To be advised. Will be available on GitHub/PHPClasses soon!