# A simple letter template for Pandoc

[![Gitter](https://img.shields.io/gitter/room/nwjs/nw.js.svg?maxAge=2592000)](https://gitter.im/fermiumlabs/Lobby)

[![Build Status](https://travis-ci.org/fermiumlabs/cartacea.svg?branch=master)](https://travis-ci.org/fermiumlabs/cartacea)

This template allows you to write letters, documentation and other business documents in Markdown and convert them to nice looking PDFs using [Pandoc](http://pandoc.org/) and [LaTeX](https://www.latex-project.org/) 


## Getting started

Write your documents in markdown in the [_input](_input) folder following the examples. Then:

```shell
npm install -g gulp
npm install

#build and watch for changes
gulp 

#build only
gulp build
```

## Features

#### letter

The following parameters can be used in the YAML metadata
`address`
:   Name and address of the recipient; takes a list for a multi-line address.

`author`
:   Writer of the letter; can take a list for a multi-line signature.

`blockquote`
:   Changes style of block quotations to match [bootstrap][].

`cc`
:   Recipients to be carbon-copied; can take a list for multiple recipients.

`closing`
:   Text for the complementary close.

`closing-indentation`
:   Amount for closing signature block to be intended from left margin.

`date`
:   Custom date (current date will be automatically inserted if not specified).

`encl`
:   List of enclosures.

`letterhead`
:   Image file to be used as letterhead (requires the [wallpaper][] package), applied only to the first page.

`opening`
:   Text for the salutation.

`ps`
:   Text to be added at the end of the letter as a postscript.

`return-address`
:   Address of the sender: takes a list to allow a multi-line address.

`signature`
:   Image file for a signature.

`background`
:   Nice background picture from file [background.eps](template/background.eps)

`watermark`, `watermark-color`
:   Watermark for writings such as "Confidential" or "Draft"

`signature-before`, `signature-after`
:   Allows adjustment of vertical space surrounding signature.

## Thanks

A huge thank you to the [creator](http://aaronwolen.com/) of the original [repository](https://github.com/aaronwolen/pandoc-letter) and to all the [pandoc](http://pandoc.org/) team.

## License

The technical stuff is licensed under BSD 3-clause license. 
The graphical content, included but not limited to: 

* letterhead.pdf
* signature.pdf
* background.eps
* logo.eps

Is protected by **copyright**. If you copy our company graphics we'll not be happy.

Anyway, feel free to open an issue or ask us at [info@fermiumlabs.com](mailto:info@fermiumlabs.com)

## Todo 

* Move background outside of main templates and include them
* Make a single template for letters and documents, differentiated by different inclusions
* Include other tex templates in main from pandoc frontmatter
