---
layout: project_home
title: "docblock2web: phpDoc/JSDoc to Markdown"
excerpt: >
  Generate Markdown from your phpDoc inline documentation for further publishing with Jekyll, GitHub pages, WordPress etc.

---

docblock2web
===

{{ post.excerpt }}

Make your code documentation more friendly by publishing it on the web (e.g. on [http://github.io]()).

This tool extracts inline documentation blocks made according to [phpDocumentor](https://www.phpdoc.org) specifications  from your source code file and creates [Markdown](https://daringfireball.net/projects/markdown/syntax) that could be used with [Jekyll](https://jekyllrb.com), WordPress, WiKi, etc.

[JSDoc](http://usejsdoc.org) support will be added in nearest feature.

Online version is coming soon also.

Usage example:
``` python
from docblock2web import docblock2web

filePath = 'sample.php' 

dbw = docblock2web( open(filePath) )

print( dbw.md() )
```

PHP documentation on this site was made with docbock2web. Here is the script for [eiseIntra core](/eiseIntra/core) section of this site:
``` python
inputFiles = [\
    '../../works/htdocs/common/eiseIntra/inc_intra.php',\
    '../../works/htdocs/common/eiseIntra/inc_intra_data.php',\
    '../../works/htdocs/common/eiseIntra/inc_mysqli.php']

outputFile = '../russysdev.github.io/eiseIntra/core.md'


def jekyllfile(files):
    
    doc =   "---\n"+\
            "layout: docs\n"+\
            "title: \"eiseIntra core\"\n"+\
            "sidebar_left:\n"+\
            "  title: Class reference\n"+\
            "  class: rsd-navbar-left\n"+\
            "  id: \"rsd_navbar_left\"\n"+\
            "  folders:\n"
    
    dbws = []
    merged_categories = {}
    md = ''
    
    for i, path in enumerate(files):
        file = open(path)
        dbw = docblock2web(file)
        doc += dbw.toc()
        md += dbw.md()
        dbws.append(dbw)
        merged_categories = docblock2web.merge_categories( merged_categories, dbw.categories )
        
        
    doc += "sidebar_right:\n"+\
            "  title: By category\n"+\
            "  class: rsd-navbar-right\n"+\
            "  id: \"rsd_navbar_right\"\n"+\
            "  folders:\n"
            
    doc += dbws[0].cats(categories = merged_categories)
        
    doc += '---\n\n'    
    
    doc += md
    
    return doc
    
fdoc = open(outputFile, 'w')
text = jekyllfile(inputFiles)
fdoc.write(text)

```

Requires Python version 3.