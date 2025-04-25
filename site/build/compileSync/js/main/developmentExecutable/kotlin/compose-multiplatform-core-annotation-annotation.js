(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-annotation-annotation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-annotation-annotation'.");
    }
    globalThis['compose-multiplatform-core-annotation-annotation'] = factory(typeof globalThis['compose-multiplatform-core-annotation-annotation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-annotation-annotation'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Long = kotlin_kotlin.$_$.mg;
  var VOID = kotlin_kotlin.$_$.g;
  var protoOf = kotlin_kotlin.$_$.sc;
  var THROW_CCE = kotlin_kotlin.$_$.sg;
  var getStringHashCode = kotlin_kotlin.$_$.mb;
  var Annotation = kotlin_kotlin.$_$.cg;
  var initMetadataForClass = kotlin_kotlin.$_$.ob;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(IntRange, 'IntRange', VOID, VOID, [Annotation]);
  //endregion
  function IntRange(from, to) {
    from = from === VOID ? new Long(0, -2147483648) : from;
    to = to === VOID ? new Long(-1, 2147483647) : to;
    this.from_1 = from;
    this.to_1 = to;
  }
  protoOf(IntRange).get_from_wom7eb_k$ = function () {
    return this.from_1;
  };
  protoOf(IntRange).get_to_kntnng_k$ = function () {
    return this.to_1;
  };
  protoOf(IntRange).equals = function (other) {
    if (!(other instanceof IntRange))
      return false;
    var tmp0_other_with_cast = other instanceof IntRange ? other : THROW_CCE();
    if (!this.from_1.equals(tmp0_other_with_cast.from_1))
      return false;
    if (!this.to_1.equals(tmp0_other_with_cast.to_1))
      return false;
    return true;
  };
  protoOf(IntRange).hashCode = function () {
    var result = imul(getStringHashCode('from'), 127) ^ this.from_1.hashCode();
    result = result + (imul(getStringHashCode('to'), 127) ^ this.to_1.hashCode()) | 0;
    return result;
  };
  protoOf(IntRange).toString = function () {
    return '@androidx.annotation.IntRange(' + 'from=' + this.from_1.toString() + ', ' + 'to=' + this.to_1.toString() + ')';
  };
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-annotation-annotation.js.map
