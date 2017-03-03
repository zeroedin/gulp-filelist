# gulp-filelist

[![NPM Version](https://img.shields.io/npm/v/gulp-filelist.svg?style=flat)](https://www.npmjs.org/package/gulp-filelist)
[![NPM Downloads](https://img.shields.io/npm/dm/gulp-filelist.svg?style=flat)](https://www.npmjs.org/package/gulp-filelist)
[![Node.js Version](https://img.shields.io/badge/node.js->=_0.8-brightgreen.svg?style=flat)](http://nodejs.org/download/)
[![Build Status](http://img.shields.io/travis/cjroth/gulp-filelist.svg?style=flat)](https://travis-ci.org/cjroth/gulp-filelist)
[![Coverage Status](https://img.shields.io/coveralls/cjroth/gulp-filelist.svg?style=flat)](https://coveralls.io/r/cjroth/gulp-filelist)
[![Gittip](http://img.shields.io/gittip/cjroth.svg)](https://www.gittip.com/cjroth/)

#### Output list of files in current stream to JSON file or custom format.

Add it to your gulp file:

```js
gulp
  .src(['awesome.file', 'lame.file'])
  .pipe(require('gulp-filelist')('filelist.json'))
  .pipe(gulp.dest('out'))
```

Outputs `out/filelist.json`:

```json
[
  "awesome.file",
  "lame.file"
]
```

## Installation

```bash
$ npm install gulp-filelist
```

## Options

#### Absolute Paths: `{ absolute: true }`

```
gulp
  .src(['awesome.file', 'lame.file'])
  .pipe(require('gulp-filelist')('filelist.json', { absolute: true }))
  .pipe(gulp.dest('out'))
```
Outputs:
```
[
  "/Users/chris/my-project/out/awesome.file",
  "/Users/chris/my-project/out/lame.file"
]
```

#### Relative Paths: `{ relative: true }`

```
gulp
  .src(['awesome.file', 'lame.file'])
  .pipe(require('gulp-rename')(function(path) { path.dirname = 'foo' }))
  .pipe(require('gulp-filelist')('filelist.json', { relative: true }))
  .pipe(gulp.dest('out'))
```
Outputs:
```
[
  "foo/awesome.file",
  "foo/lame.file"
]
```

#### Flattened Paths: `{ flatten: true }`

```
gulp
  .src(['awesome.file', 'lame.file'])
  .pipe(require('gulp-filelist')('filelist.json', { flatten: true }))
  .pipe(gulp.dest('out'))
```
Outputs:
```
[
  "awesome.file",
  "lame.file"
]
```

#### Paths without Extensions: `{ removeExtensions: true }`

```
gulp
  .src(['directory/awesome.file', 'directory/lame.file'])
  .pipe(require('gulp-filelist')('filelist.json', { removeExtensions: true }))
  .pipe(gulp.dest('out'))
```
Outputs:
```
[
  "directory/awesome",
  "directory/lame"
]
```

#### Output file with custom template: `{ destRowTemplate: <rowStringTemplate> }`

```
gulp
  .src(['directory/awesome.file', 'directory/lame.file'])
  .pipe(require('gulp-filelist')('filelist.json', { destRowTemplate: "/// <amd dependency='@filePath@'/>" }))
  .pipe(gulp.dest('out'))
```
Outputs:
```
/// <amd dependency='directory/awesome.file'/>/// <amd dependency='directory/lame.file'/>
```

#### Output file with custom template in JSON format: `{ outputJSON: true, destRowTemplate: <rowStringTemplate> }`

```
gulp
  .src(['directory/awesome.file', 'directory/lame.file'])
  .pipe(require('gulp-filelist')('filelist.json', { outputJSON: true, destRowTemplate: "/// <amd dependency='@filePath@'/>" }))
  .pipe(gulp.dest('out'))
```
Outputs:
```
[
  "directory/awesome.file",
  "directory/lame.file"
]
```


## [MIT Licensed](LICENSE)
