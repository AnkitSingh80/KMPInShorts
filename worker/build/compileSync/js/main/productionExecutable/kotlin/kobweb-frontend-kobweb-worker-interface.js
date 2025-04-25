(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-worker-interface'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-worker-interface'.");
    }
    globalThis['kobweb-frontend-kobweb-worker-interface'] = factory(typeof globalThis['kobweb-frontend-kobweb-worker-interface'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-worker-interface'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var emptyMap = kotlin_kotlin.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.r;
  var Unit_instance = kotlin_kotlin.$_$.f;
  var protoOf = kotlin_kotlin.$_$.o;
  var initMetadataForCompanion = kotlin_kotlin.$_$.l;
  var copyToArray = kotlin_kotlin.$_$.h;
  var to = kotlin_kotlin.$_$.s;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.g;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c;
  var Pair = kotlin_kotlin.$_$.p;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var json = kotlin_kotlin.$_$.n;
  var initMetadataForClass = kotlin_kotlin.$_$.k;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(Transferables, 'Transferables');
  //endregion
  function Companion() {
    Companion_instance = this;
    this.p5_1 = new Transferables(emptyMap(), emptyMap());
  }
  protoOf(Companion).q5 = function (json) {
    var tmp0_safe_receiver = json['_transferableKeys'];
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return this.p5_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var transferableNames = tmp_0;
    var tmp2_safe_receiver = json['_extraKeys'];
    var tmp_1;
    if (tmp2_safe_receiver == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_1 = tmp2_safe_receiver;
    }
    var tmp3_elvis_lhs = tmp_1;
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      return this.p5_1;
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    var extraNames = tmp_2;
    // Inline function 'kotlin.collections.mutableMapOf' call
    var transferables = LinkedHashMap_init_$Create$();
    var inductionVariable = 0;
    var last = transferableNames.length;
    while (inductionVariable < last) {
      var name = transferableNames[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.set' call
      var value = ensureNotNull(json[name]);
      transferables.u1(name, value);
    }
    // Inline function 'kotlin.collections.mutableMapOf' call
    var extras = LinkedHashMap_init_$Create$();
    var inductionVariable_0 = 0;
    var last_0 = extraNames.length;
    while (inductionVariable_0 < last_0) {
      var name_0 = extraNames[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'kotlin.collections.set' call
      var value_0 = ensureNotNull(json[name_0]);
      extras.u1(name_0, value_0);
    }
    return new Transferables(transferables, extras);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Transferables(transferables, extras) {
    Companion_getInstance();
    this.r5_1 = transferables;
    this.s5_1 = extras;
  }
  protoOf(Transferables).t5 = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.r5_1.o();
    var tmp$ret$0 = copyToArray(this_0);
    var tmp = to('_transferableKeys', tmp$ret$0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this.s5_1.o();
    var tmp$ret$1 = copyToArray(this_1);
    var tmp_0 = [tmp, to('_extraKeys', tmp$ret$1)];
    // Inline function 'kotlin.collections.map' call
    var this_2 = this.r5_1.q();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var _iterator__ex2g4s = this_2.b();
    while (_iterator__ex2g4s.c()) {
      var item = _iterator__ex2g4s.d();
      // Inline function 'com.varabyte.kobweb.worker.Transferables.toJson.<anonymous>' call
      // Inline function 'kotlin.collections.toPair' call
      var tmp$ret$3 = new Pair(item.j(), item.k());
      destination.d1(tmp$ret$3);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp8 = copyToArray(destination);
    // Inline function 'kotlin.collections.map' call
    var this_3 = this.s5_1.q();
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var _iterator__ex2g4s_0 = this_3.b();
    while (_iterator__ex2g4s_0.c()) {
      var item_0 = _iterator__ex2g4s_0.d();
      // Inline function 'com.varabyte.kobweb.worker.Transferables.toJson.<anonymous>' call
      // Inline function 'kotlin.collections.toPair' call
      var tmp$ret$8 = new Pair(item_0.j(), item_0.k());
      destination_0.d1(tmp$ret$8);
    }
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.plus' call
    var elements = copyToArray(destination_0);
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$13 = tmp8.concat(elements);
    return json(arrayConcat([tmp_0, tmp$ret$13]));
  };
  protoOf(Transferables).u5 = function () {
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = this.r5_1.p();
    return copyToArray(this_0);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_getInstance;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-worker-interface.js.map
