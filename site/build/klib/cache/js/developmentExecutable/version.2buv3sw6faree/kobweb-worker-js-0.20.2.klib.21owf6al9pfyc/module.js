(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kobweb-frontend-kobweb-worker'] = factory(typeof globalThis['kobweb-frontend-kobweb-worker'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-worker']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  function get__self() {
    _init_properties_WorkerStrategy_kt__g3thbl();
    return _self;
  }
  var _self;
  var properties_initialized_WorkerStrategy_kt_2au8y5;
  function _init_properties_WorkerStrategy_kt__g3thbl() {
    if (!properties_initialized_WorkerStrategy_kt_2au8y5) {
      properties_initialized_WorkerStrategy_kt_2au8y5 = true;
      _self = self;
    }
  }
  return _;
}));
