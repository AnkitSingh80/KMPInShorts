(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['kobweb-frontend-silk-widgets-kobweb'] = factory(typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined' ? {} : globalThis['kobweb-frontend-silk-widgets-kobweb']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-silk-widgets-kobweb.js.map
