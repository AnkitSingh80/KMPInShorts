(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    globalThis['html-internal-html-core-runtime'] = factory(typeof globalThis['html-internal-html-core-runtime'] === 'undefined' ? {} : globalThis['html-internal-html-core-runtime']);
}(function (_) {
  'use strict';
  //region block: pre-declaration
  //endregion
  return _;
}));

//# sourceMappingURL=html-internal-html-core-runtime.js.map
