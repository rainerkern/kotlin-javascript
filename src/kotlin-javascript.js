(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-javascript'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-javascript'.");
    }
    root['kotlin-javascript'] = factory(typeof this['kotlin-javascript'] === 'undefined' ? {} : this['kotlin-javascript'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main() {
    println('Hello Javascript World');
  }
  _.main = main;
  main();
  Kotlin.defineModule('kotlin-javascript', _);
  return _;
}));
