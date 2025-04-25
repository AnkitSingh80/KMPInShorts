(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-worker-interface.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-worker-interface.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-worker'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kobweb-frontend-kobweb-worker'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-worker-interface'] === 'undefined') {
      throw new Error("Error loading module 'kobweb-frontend-kobweb-worker'. Its dependency 'kobweb-frontend-kobweb-worker-interface' was not found. Please, check whether 'kobweb-frontend-kobweb-worker-interface' is loaded prior to 'kobweb-frontend-kobweb-worker'.");
    }
    globalThis['kobweb-frontend-kobweb-worker'] = factory(typeof globalThis['kobweb-frontend-kobweb-worker'] === 'undefined' ? {} : globalThis['kobweb-frontend-kobweb-worker'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-worker-interface']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_worker_interface) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.o;
  var initMetadataForClass = kotlin_kotlin.$_$.k;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_worker_interface.$_$.a;
  var VOID = kotlin_kotlin.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.f;
  var initMetadataForInterface = kotlin_kotlin.$_$.m;
  var THROW_CCE = kotlin_kotlin.$_$.q;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(InputMessage, 'InputMessage');
  function invoke$default(output, transferables, $super) {
    transferables = transferables === VOID ? Companion_getInstance().p5_1 : transferables;
    var tmp;
    if ($super === VOID) {
      this.x5(output, transferables);
      tmp = Unit_instance;
    } else {
      tmp = $super.x5.call(this, output, transferables);
    }
    return tmp;
  }
  initMetadataForInterface(OutputDispatcher, 'OutputDispatcher');
  initMetadataForClass(createPassThroughSerializer$1);
  initMetadataForClass(WorkerStrategy, 'WorkerStrategy');
  initMetadataForClass(WorkerStrategyContext, 'WorkerStrategyContext');
  initMetadataForClass(WorkerStrategy$1, VOID, VOID, WorkerStrategy);
  //endregion
  function InputMessage(input, transferables) {
    this.v5_1 = input;
    this.w5_1 = transferables;
  }
  function OutputDispatcher() {
  }
  function createPassThroughSerializer(_this__u8e3s4) {
    return new createPassThroughSerializer$1();
  }
  function createPassThroughSerializer$1() {
  }
  protoOf(createPassThroughSerializer$1).z5 = function (input) {
    return input;
  };
  protoOf(createPassThroughSerializer$1).a6 = function (output) {
    return output;
  };
  protoOf(createPassThroughSerializer$1).b6 = function (output) {
    return this.a6((!(output == null) ? typeof output === 'string' : false) ? output : THROW_CCE());
  };
  function get__self() {
    _init_properties_WorkerStrategy_kt__g3thbl();
    return _self;
  }
  var _self;
  function WorkerStrategy() {
    this.c6_1 = get__self();
  }
  function WorkerStrategy_0(handleInput) {
    _init_properties_WorkerStrategy_kt__g3thbl();
    return new WorkerStrategy$1(handleInput);
  }
  function WorkerStrategyContext(self_0, transferables) {
    this.e6_1 = self_0;
    this.f6_1 = transferables;
  }
  function WorkerStrategy$1($handleInput) {
    this.h6_1 = $handleInput;
    WorkerStrategy.call(this);
  }
  protoOf(WorkerStrategy$1).d6 = function (inputMessage) {
    return this.h6_1(new WorkerStrategyContext(this.c6_1, inputMessage.w5_1), inputMessage.v5_1);
  };
  var properties_initialized_WorkerStrategy_kt_2au8y5;
  function _init_properties_WorkerStrategy_kt__g3thbl() {
    if (!properties_initialized_WorkerStrategy_kt_2au8y5) {
      properties_initialized_WorkerStrategy_kt_2au8y5 = true;
      _self = self;
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = InputMessage;
  _.$_$.b = OutputDispatcher;
  _.$_$.c = WorkerStrategy_0;
  _.$_$.d = createPassThroughSerializer;
  _.$_$.e = invoke$default;
  //endregion
  return _;
}));

//# sourceMappingURL=kobweb-frontend-kobweb-worker.js.map
