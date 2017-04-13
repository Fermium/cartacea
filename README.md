<a href="https://fermiumlabs.com/">
    <img src="https://fermiumlabs.com/Assets/img/logos/Horizontal-Main_500px.png" alt="Fermium LABS logo" width="200" align="right" />
</a>

[![wercker status](https://app.wercker.com/status/86627b9183b151b80605d8ee376ab308/s/master "wercker status")](https://app.wercker.com/project/byKey/86627b9183b151b80605d8ee376ab308) [![Analytics](https://ga-beacon.appspot.com/UA-69533556-3/cartacea/readme/?flat)](https://github.com/igrigorik/ga-beacon)


# Cartacea

Cartacea is an vaguely easy-to-use document authoring system. It's designed to be used by both human bipeds and headless machines, such as CI services.

It allows you to use Pandoc and LaTex with minimun to no command line knowledge and take advantage of modern tools like GitHub.

While running in a CI environment it can take advantage of [latex-docker](https://github.com/fermiumlabs/latex-docker).

### Document authoring

You can write documents with all the ease and simplicity of plain straight markdown, plus additions from Pandoc and a few plugins.

While you write Cartacea watches for changes and rebuild automatically the PDF document.


### Features 

- Rebuilds documents while you write, watching for changes. `gulp`
- Check that all the necessary software is installed. `gulp test`
- Compress and optimize pdf files. `gulp release'
- Zero command line configuration. Everything is set through your document header.


## Getting started

Cartacea is based on NodeJS is messy.

Write your documents in markdown in the [input](input) folder following the examples. Then:

```shell
# install dependencies
npm install

#verify that you have all the software correctly installed
$(npm bin)/gulp test

#build and watch for changes
$(npm bin)/gulp

#build only
$(npm bin)/gulp build

#build, compress and optimize documents
$(npm bin)/gulp release

```

## Templates

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

A huge thank you to the [creator](http://aaronwolen.com/) of the original [pandoc-letter](https://github.com/aaronwolen/pandoc-letter) and to all the [pandoc](http://pandoc.org/) community.

## License

The technical stuff is licensed under BSD 3-clause license. 
The graphical content, included but not limited to: 

* letterhead.pdf
* signature.pdf
* background.eps
* logo.eps

Is protected by **copyright**. If you copy our company graphics we'll not be happy.

Anyway, feel free to open an issue or ask us at [info@fermiumlabs.com](mailto:info@fermiumlabs.com)

## FAQ 

##### Why LaTeX ?

We know, LaTeX is painful. Word is easier, right? 
First, LaTeX is typographic excellence. Nothing is quite beautiful like a perfectly crafted PDF. In today era of pdf documents generated from HTML all of this is being lost.

Unfortunately, LaTeX is hard to use. In it's savage, natural state, given all the grace it has, was unusable for our application.
Cartacea should help with that.

Secondly, LaTex is incredibly maintainable. A document written 10 years ago in latex can still (with a bit of work) be used today. Latex is itself one of the most extensive codebases in the world. We hope that 

Thirdly, all those packages really helps. LaTeX can not only render books and letters, but also figures, diagrams, posters, presentations, business cards, brochures, invoices.
