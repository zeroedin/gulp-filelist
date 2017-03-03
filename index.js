'use strict';
var pkg = require('./package');
var gutil = require('gulp-util');
var through = require('through2');
var path = require('path');
var File = require('vinyl');

// consts
module.exports = function(out, options) {

  options = options || {};

  var fileList = [];

  return through.obj(function(file, enc, cb) {

    if (file.isNull()) {
      cb(null, file);
      return;
    }

    if (file.isStream()) {
      cb(new gutil.PluginError(pkg.name, 'Streams not supported'));
      return;
    }

    var filePath;
    if (options.absolute) {
      filePath = path.normalize(file.path);
    } else if (options.flatten) {
      filePath = path.basename(file.path);
    } else if (options.relative) {
      filePath = file.relative;
    } else {
      filePath = path.relative(file.cwd, file.path);
    }
    if (options.removeExtensions) {
      var extension = path.extname(filePath);
      if (extension.length) {
        filePath = filePath.slice(0, -extension.length);
      }
    }
    filePath = filePath.replace(/\\/g, '/');

    if(options.destRowTemplate) {
      fileList.push(options.destRowTemplate.replace('@filePath@', filePath));
    } else {
      fileList.push(filePath);
    }

    cb();
  }, function(cb) {
    var buffer;
    if (options.outputJson){
      buffer = new Buffer(JSON.stringify(fileList, null, '  '));
    } else {
      buffer = new Buffer(fileList.join(''));
    }

    var fileListFile = new File({
      path: out,
      contents: buffer
    });

    this.push(fileListFile);
    cb();
  });
};
