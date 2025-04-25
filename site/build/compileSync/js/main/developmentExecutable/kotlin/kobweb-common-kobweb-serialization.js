(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kobweb-common-kobweb-serialization'] = factory(typeof globalThis['kobweb-common-kobweb-serialization'] === 'undefined' ? {} : globalThis['kobweb-common-kobweb-serialization']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-common-kobweb-serialization.js.map
