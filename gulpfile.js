var gulp = require('gulp');
var shell = require('gulp-shell');
var cache = require('gulp-cached');
var clean = require('gulp-clean');
var frontMatter = require('gulp-front-matter');
var changed = require('gulp-changed');
var print = require('gulp-print');


// invoke pandoc and build the pdfs
//files are processed like in a stream
gulp.task('pdf', function() {
    return gulp.src('src/**/00_header.md', {
            verbose: false
        })
        .pipe(frontMatter({
            property: 'frontMatter', // property added to file object 
            remove: false // should we remove front-matter header? 
        }))
        //only changed pdf files
        .pipe(changed('_build' ))
        // display the files that are being built
        .pipe(print())
        // parses the YAML frontmatter into a JS object that we can use in the following piped steps.

        //this is a farly complicate usage of gulp-shell. exercise caution and restrain.
        .pipe(shell([
            //recreate the destination directory inside _build, no matter how many layers of folder it has
            'mkdir -p <%= "_build/"%>',
            //pandoc with the latex engine
            'pandoc --latex-engine=xelatex' + " " +
            //gets the template filename from the frontMatter. The path is considered from the ./templates/ directory
            '--template=\"' + __dirname + '/templates/<%= file.frontMatter.template %>.tex\"' + " " +
            //get the output filename from the frontMatter, and the output file path from the path of the file currently being processed
            '-o \"<%= "_build/" + file.frontMatter.filetitle + ".pdf" %>\"' + " " +
            //process all files. Here there are no quotes because bash will expand "*.md"
            '<%= "src/" + file.relative.split("/").slice(0, -1).join("/") + "/*.md" %>'
        ], {
            verbose: true
        }))
});

// compress and optimize the pdf files with ghostscript
gulp.task('compress', function() {
    return gulp.src('_build/*.pdf')
        .pipe(changed('_build/*.pdf')) //only changed pdf files
        .pipe(print())
        .pipe(shell([
            //optimize pdf and improve compatibility. check http://www.tjansson.dk/2012/04/compressing-pdfs-using-ghostscript-under-linux/
            'gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dDownsampleColorImages=true -dColorImageResolution=150 -dNOPAUSE -dQUIET -dBATCH -sOutputFile=\"_build/<%= file.relative.replace(".pdf",".tmp") %>\" \"_build/<%= file.relative %>\"',
            //remove old .pdf and rename .tmp to .pdf
            'rm \"_build/<%= file.relative %>\"',
            'mv \"_build/<%= file.relative.replace(".pdf",".tmp") %>\" \"_build/<%= file.relative %>\"'
        ], {
            verbose: false
        }))
})


gulp.task('check-sw', shell.task([
    'which node > /dev/null',
    'which pdflatex > /dev/null',
    'which pandoc > /dev/null',
    'which pandoc-fignos > /dev/null',
    'which pandoc-eqnos > /dev/null',
    'which pandoc-tablenos > /dev/null',
    'which gs > /dev/null',
    'which rm > /dev/null',
    'which mv > /dev/null',
    'which mkdir > /dev/null',
    'echo \"           all necessary software is in path and reachable\"',
    'check-node-version --node 6 --quiet'

], {
    verbose: false
}));



// delete input directory
gulp.task('clean', function() {
    return gulp.src('_build/**/*', {}).pipe(clean());
});

// watch for changes and rebuild the changed PDFs
gulp.task('watch', function() {
    gulp.watch('src/**/*.md', gulp.parallel('pdf'));
});

//######################################################
//ONLY TASK AFTER THIS COMMENT ARE TO BE CONSIDERE PUBLIC!
//######################################################


//build and watch for changes
gulp.task('default', gulp.series('pdf','watch'));

//build, then exit
gulp.task('build', gulp.series('pdf'));

//clean, build, optimize, then exit
gulp.task('release', gulp.series('clean', 'pdf', 'compress'));

// test Cartacea
gulp.task('test', gulp.series('check-sw', 'build', 'compress'));
