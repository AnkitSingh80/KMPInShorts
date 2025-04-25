(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['worker-c7fc'] = factory(typeof globalThis['worker-c7fc'] === 'undefined' ? {} : globalThis['worker-c7fc']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));
