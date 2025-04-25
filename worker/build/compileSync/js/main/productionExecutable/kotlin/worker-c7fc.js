(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-worker.js', './kobweb-frontend-kobweb-worker-interface.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-worker.js'), require('./kobweb-frontend-kobweb-worker-interface.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform.worker:worker'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.exmaple.blogmultiplatform.worker:worker'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-worker'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform.worker:worker'. Its dependency 'kobweb-frontend-kobweb-worker' was not found. Please, check whether 'kobweb-frontend-kobweb-worker' is loaded prior to 'com.exmaple.blogmultiplatform.worker:worker'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-worker-interface'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform.worker:worker'. Its dependency 'kobweb-frontend-kobweb-worker-interface' was not found. Please, check whether 'kobweb-frontend-kobweb-worker-interface' is loaded prior to 'com.exmaple.blogmultiplatform.worker:worker'.");
    }
    globalThis['com.exmaple.blogmultiplatform.worker:worker'] = factory(typeof globalThis['com.exmaple.blogmultiplatform.worker:worker'] === 'undefined' ? {} : globalThis['com.exmaple.blogmultiplatform.worker:worker'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-worker'], globalThis['kobweb-frontend-kobweb-worker-interface']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_worker, kotlin_com_varabyte_kobweb_kobweb_worker_interface) {
  'use strict';
  //region block: imports
  var to = kotlin_kotlin.$_$.s;
  var json = kotlin_kotlin.$_$.n;
  var add = kotlin_kotlin.$_$.j;
  var Unit_instance = kotlin_kotlin.$_$.f;
  var protoOf = kotlin_kotlin.$_$.o;
  var THROW_CCE = kotlin_kotlin.$_$.q;
  var invoke$default = kotlin_com_varabyte_kobweb_kobweb_worker.$_$.e;
  var OutputDispatcher = kotlin_com_varabyte_kobweb_kobweb_worker.$_$.b;
  var initMetadataForClass = kotlin_kotlin.$_$.k;
  var VOID = kotlin_kotlin.$_$.b;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.e;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_worker_interface.$_$.a;
  var InputMessage = kotlin_com_varabyte_kobweb_kobweb_worker.$_$.a;
  var WorkerStrategy = kotlin_com_varabyte_kobweb_kobweb_worker.$_$.c;
  var createPassThroughSerializer = kotlin_com_varabyte_kobweb_kobweb_worker.$_$.d;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(main$strategy$1, VOID, VOID, VOID, [OutputDispatcher]);
  initMetadataForClass(EchoWorkerFactory, 'EchoWorkerFactory', EchoWorkerFactory);
  //endregion
  function main() {
    var factory = new EchoWorkerFactory();
    var ioSerializer = factory.i6();
    var strategy = factory.j6(new main$strategy$1(ioSerializer));
    var tmp = self;
    tmp.onmessage = main$lambda(ioSerializer, strategy);
  }
  function main$strategy$1($ioSerializer) {
    this.k6_1 = $ioSerializer;
  }
  protoOf(main$strategy$1).l6 = function (output, transferables) {
    var tmp;
    try {
      tmp = this.k6_1.b6(output);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var outputSerialized = tmp;
    if (!(outputSerialized == null)) {
      self.postMessage(add(json([to('_output', outputSerialized)]), transferables.t5()), transferables.u5());
    }
  };
  protoOf(main$strategy$1).x5 = function (output, transferables) {
    return this.l6((!(output == null) ? typeof output === 'string' : false) ? output : THROW_CCE(), transferables);
  };
  function main$lambda($ioSerializer, $strategy) {
    return function (e) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var json = e.data;
      var tmp;
      try {
        var tmp_0 = json['_input'];
        tmp = $ioSerializer.z5((!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE());
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e_0 = $p;
          var tmp_2 = console;
          // Inline function 'kotlin.text.buildString' call
          // Inline function 'kotlin.apply' call
          var this_0 = StringBuilder_init_$Create$();
          // Inline function 'main.<anonymous>.<anonymous>' call
          this_0.v4('Unable to deserialize input passed into worker, ignoring it.');
          var tmp0_safe_receiver = e_0.message;
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
            this_0.v4('\nException: ' + tmp0_safe_receiver);
          }
          var tmp$ret$4 = this_0.toString();
          tmp_2.warn(tmp$ret$4);
          tmp_1 = null;
        } else {
          throw $p;
        }
        tmp = tmp_1;
      }
      var inputDeserialized = tmp;
      var tmp_3;
      if (!(inputDeserialized == null)) {
        var transferables = Companion_getInstance().q5(json);
        $strategy.d6(new InputMessage(inputDeserialized, transferables));
        tmp_3 = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function mainWrapper() {
    main();
  }
  function EchoWorkerFactory$createStrategy$lambda($postOutput) {
    return function ($this$WorkerStrategy, input) {
      $postOutput.y5(input);
      return Unit_instance;
    };
  }
  function EchoWorkerFactory() {
  }
  protoOf(EchoWorkerFactory).j6 = function (postOutput) {
    return WorkerStrategy(EchoWorkerFactory$createStrategy$lambda(postOutput));
  };
  protoOf(EchoWorkerFactory).i6 = function () {
    return createPassThroughSerializer(this);
  };
  //region block: post-declaration
  protoOf(main$strategy$1).y5 = invoke$default;
  //endregion
  mainWrapper();
  return _;
}));

//# sourceMappingURL=worker-c7fc.js.map
