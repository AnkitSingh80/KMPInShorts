(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kobweb-frontend-kobweb-core.js', './kobweb-frontend-silk-foundation.js', './compose-multiplatform-core-compose-runtime-runtime.js', './html-internal-html-core-runtime.js', './kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js', './kobweb-frontend-silk-widgets.js', './kobweb-frontend-silk-widgets-kobweb.js', './kobweb-frontend-kobweb-silk.js', './html-html-core.js', './kobweb-frontend-kobweb-compose.js', './kotlinx-serialization-kotlinx-serialization-core.js', './kotlinx-coroutines-core.js', './kobweb-frontend-compose-html-ext.js', './kotlinx-serialization-kotlinx-serialization-json.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kobweb-frontend-kobweb-core.js'), require('./kobweb-frontend-silk-foundation.js'), require('./compose-multiplatform-core-compose-runtime-runtime.js'), require('./html-internal-html-core-runtime.js'), require('./kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.js'), require('./kobweb-frontend-silk-widgets.js'), require('./kobweb-frontend-silk-widgets-kobweb.js'), require('./kobweb-frontend-kobweb-silk.js'), require('./html-html-core.js'), require('./kobweb-frontend-kobweb-compose.js'), require('./kotlinx-serialization-kotlinx-serialization-core.js'), require('./kotlinx-coroutines-core.js'), require('./kobweb-frontend-compose-html-ext.js'), require('./kotlinx-serialization-kotlinx-serialization-json.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-core'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kobweb-frontend-kobweb-core' was not found. Please, check whether 'kobweb-frontend-kobweb-core' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-foundation'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kobweb-frontend-silk-foundation' was not found. Please, check whether 'kobweb-frontend-silk-foundation' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'compose-multiplatform-core-compose-runtime-runtime' was not found. Please, check whether 'compose-multiplatform-core-compose-runtime-runtime' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['html-internal-html-core-runtime'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'html-internal-html-core-runtime' was not found. Please, check whether 'html-internal-html-core-runtime' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' was not found. Please, check whether 'kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kobweb-frontend-silk-widgets' was not found. Please, check whether 'kobweb-frontend-silk-widgets' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-silk-widgets-kobweb'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kobweb-frontend-silk-widgets-kobweb' was not found. Please, check whether 'kobweb-frontend-silk-widgets-kobweb' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-silk'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kobweb-frontend-kobweb-silk' was not found. Please, check whether 'kobweb-frontend-kobweb-silk' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['html-html-core'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'html-html-core' was not found. Please, check whether 'html-html-core' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-kobweb-compose'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kobweb-frontend-kobweb-compose' was not found. Please, check whether 'kobweb-frontend-kobweb-compose' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-core'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kotlinx-serialization-kotlinx-serialization-core' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-core' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['kobweb-frontend-compose-html-ext'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kobweb-frontend-compose-html-ext' was not found. Please, check whether 'kobweb-frontend-compose-html-ext' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    if (typeof globalThis['kotlinx-serialization-kotlinx-serialization-json'] === 'undefined') {
      throw new Error("Error loading module 'com.exmaple.blogmultiplatform:site'. Its dependency 'kotlinx-serialization-kotlinx-serialization-json' was not found. Please, check whether 'kotlinx-serialization-kotlinx-serialization-json' is loaded prior to 'com.exmaple.blogmultiplatform:site'.");
    }
    globalThis['com.exmaple.blogmultiplatform:site'] = factory(typeof globalThis['com.exmaple.blogmultiplatform:site'] === 'undefined' ? {} : globalThis['com.exmaple.blogmultiplatform:site'], globalThis['kotlin-kotlin-stdlib'], globalThis['kobweb-frontend-kobweb-core'], globalThis['kobweb-frontend-silk-foundation'], globalThis['compose-multiplatform-core-compose-runtime-runtime'], globalThis['html-internal-html-core-runtime'], kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, globalThis['kobweb-frontend-silk-widgets'], globalThis['kobweb-frontend-silk-widgets-kobweb'], globalThis['kobweb-frontend-kobweb-silk'], globalThis['html-html-core'], globalThis['kobweb-frontend-kobweb-compose'], globalThis['kotlinx-serialization-kotlinx-serialization-core'], globalThis['kotlinx-coroutines-core'], globalThis['kobweb-frontend-compose-html-ext'], globalThis['kotlinx-serialization-kotlinx-serialization-json']);
  }
}(function (_, kotlin_kotlin, kotlin_com_varabyte_kobweb_kobweb_core, kotlin_com_varabyte_kobweb_silk_foundation, kotlin_org_jetbrains_compose_runtime_runtime, kotlin_org_jetbrains_compose_html_internal_html_core_runtime, kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat, kotlin_com_varabyte_kobweb_silk_widgets, kotlin_com_varabyte_kobweb_silk_widgets_kobweb, kotlin_com_varabyte_kobweb_kobweb_silk, kotlin_org_jetbrains_compose_html_html_core, kotlin_com_varabyte_kobweb_kobweb_compose, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_com_varabyte_kobweb_compose_html_ext, kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var ensureNotNull = kotlin_kotlin.$_$.mh;
  var get_api = kotlin_com_varabyte_kobweb_kobweb_core.$_$.a;
  var AppGlobals_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.h;
  var to = kotlin_kotlin.$_$.bi;
  var mapOf = kotlin_kotlin.$_$.i8;
  var Companion_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.i;
  var Router = kotlin_com_varabyte_kobweb_kobweb_core.$_$.e;
  var initKobweb = kotlin_com_varabyte_kobweb_kobweb_core.$_$.b;
  var set_additionalSilkInitialization = kotlin_com_varabyte_kobweb_silk_foundation.$_$.c;
  var removePrefix = kotlin_kotlin.$_$.se;
  var remove = kotlin_com_varabyte_kobweb_kobweb_core.$_$.f;
  var UpdateHistoryMode_REPLACE_getInstance = kotlin_com_varabyte_kobweb_kobweb_core.$_$.g;
  var composableLambdaInstance = kotlin_org_jetbrains_compose_runtime_runtime.$_$.a;
  var renderComposable = kotlin_org_jetbrains_compose_html_internal_html_core_runtime.$_$.e;
  var Unit_getInstance = kotlin_kotlin.$_$.u4;
  var rememberComposableLambda = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c;
  var sourceInformationMarkerStart = kotlin_org_jetbrains_compose_runtime_runtime.$_$.y;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_runtime_runtime.$_$.i1;
  var THROW_CCE = kotlin_kotlin.$_$.sg;
  var sourceInformationMarkerEnd = kotlin_org_jetbrains_compose_runtime_runtime.$_$.x;
  var DeferringHost = kotlin_com_varabyte_kobweb_silk_foundation.$_$.b;
  var protoOf = kotlin_kotlin.$_$.sc;
  var initMetadataForObject = kotlin_kotlin.$_$.tb;
  var removeClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.d;
  var hasClass = kotlin_org_jetbrains_kotlin_kotlin_dom_api_compat.$_$.c;
  var toString = kotlin_kotlin.$_$.ai;
  var toInt = kotlin_kotlin.$_$.lf;
  var charSequenceLength = kotlin_kotlin.$_$.cb;
  var toBoolean = kotlin_kotlin.$_$.hf;
  var isBlank = kotlin_kotlin.$_$.ke;
  var removeSuffix = kotlin_kotlin.$_$.te;
  var initSilkWidgets = kotlin_com_varabyte_kobweb_silk_widgets.$_$.d;
  var initSilkWidgetsKobweb = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.b;
  var SilkApp = kotlin_com_varabyte_kobweb_kobweb_silk.$_$.a;
  var get_SmoothColorStyle = kotlin_com_varabyte_kobweb_silk_widgets.$_$.e;
  var toModifier = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a1;
  var get_vh = kotlin_org_jetbrains_compose_html_html_core.$_$.f5;
  var minHeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.s1;
  var Surface = kotlin_com_varabyte_kobweb_silk_widgets.$_$.a;
  var updateChangedFlags = kotlin_org_jetbrains_compose_runtime_runtime.$_$.c1;
  var THROW_IAE = kotlin_kotlin.$_$.tg;
  var enumEntries = kotlin_kotlin.$_$.sa;
  var Companion_getInstance_1 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a3;
  var Enum = kotlin_kotlin.$_$.hg;
  var initMetadataForClass = kotlin_kotlin.$_$.ob;
  var VOID = kotlin_kotlin.$_$.g;
  var initMetadataForCompanion = kotlin_kotlin.$_$.pb;
  var PluginGeneratedSerialDescriptor = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.s1;
  var UnknownFieldException_init_$Create$ = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.c;
  var IntSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.l;
  var StringSerializer_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.m;
  var typeParametersSerializers = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.n1;
  var GeneratedSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.o1;
  var throwMissingFieldException = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.v1;
  var objectCreate = kotlin_kotlin.$_$.rc;
  var getStringHashCode = kotlin_kotlin.$_$.mb;
  var mutableStateOf = kotlin_org_jetbrains_compose_runtime_runtime.$_$.w;
  var LaunchedEffect = kotlin_org_jetbrains_compose_runtime_runtime.$_$.m;
  var Companion_getInstance_2 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g3;
  var fillMaxSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z;
  var Center_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e3;
  var Box = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.a;
  var Text = kotlin_org_jetbrains_compose_html_html_core.$_$.q5;
  var KMutableProperty0 = kotlin_kotlin.$_$.hd;
  var THROW_ISE = kotlin_kotlin.$_$.ug;
  var getLocalDelegateReference = kotlin_kotlin.$_$.jb;
  var CoroutineImpl = kotlin_kotlin.$_$.oa;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.o;
  var isInterface = kotlin_kotlin.$_$.dc;
  var initMetadataForLambda = kotlin_kotlin.$_$.sb;
  var SuspendFunction1 = kotlin_kotlin.$_$.pa;
  var createCompositionCoroutineScope = kotlin_org_jetbrains_compose_runtime_runtime.$_$.s;
  var CompositionScopedCoroutineScopeCanceller = kotlin_org_jetbrains_compose_runtime_runtime.$_$.f;
  var rememberPageContext = kotlin_com_varabyte_kobweb_kobweb_core.$_$.d;
  var SpanText = kotlin_com_varabyte_kobweb_silk_foundation.$_$.a;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.c4;
  var Long = kotlin_kotlin.$_$.mg;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.y9;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.v;
  var get_px = kotlin_org_jetbrains_compose_html_html_core.$_$.z4;
  var margin = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.r1;
  var width = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.u2;
  var Image = kotlin_com_varabyte_kobweb_silk_widgets_kobweb.$_$.a;
  var Text_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.d;
  var id = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.h1;
  var height = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.g1;
  var padding = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.f2;
  var Colors_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b3;
  var backgroundColor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.j;
  var fontSize = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_html_html_core.$_$.n;
  var outline = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z1;
  var onFocusIn = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w1;
  var onFocusOut = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x1;
  var toAttrs = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w2;
  var Input = kotlin_org_jetbrains_compose_html_html_core.$_$.m5;
  var Password_getInstance = kotlin_org_jetbrains_compose_html_html_core.$_$.c;
  var color = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.w;
  var borderRadius = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.m;
  var Companion_getInstance_4 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.v2;
  var fontWeight = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.d1;
  var Companion_getInstance_5 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.u2;
  var cursor = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.x;
  var onClick = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.v1;
  var Button = kotlin_org_jetbrains_compose_html_html_core.$_$.i5;
  var Companion_getInstance_6 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.b3;
  var textAlign = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.l2;
  var padding_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.e2;
  var Center_getInstance_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.z2;
  var CenterHorizontally_getInstance = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.c3;
  var Column = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.b;
  var margin_0 = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.q1;
  var border = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o;
  var transition = kotlin_com_varabyte_kobweb_kobweb_compose.$_$.o2;
  var Companion_getInstance_7 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.d3;
  var get_ms = kotlin_org_jetbrains_compose_html_html_core.$_$.u4;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_html_html_core.$_$.g;
  var Companion_getInstance_9 = kotlin_com_varabyte_kobweb_compose_html_ext.$_$.e3;
  var Companion_getInstance_10 = kotlin_com_varabyte_kobweb_silk_foundation.$_$.m1;
  var base = kotlin_com_varabyte_kobweb_silk_foundation.$_$.x;
  var Default_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_json.$_$.a;
  var getKClass = kotlin_kotlin.$_$.e;
  var arrayOf = kotlin_kotlin.$_$.hh;
  var createKType = kotlin_kotlin.$_$.b;
  var serializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.g2;
  var KSerializer = kotlin_org_jetbrains_kotlinx_kotlinx_serialization_core.$_$.y1;
  var encodeToByteArray = kotlin_kotlin.$_$.de;
  var decodeToString = kotlin_kotlin.$_$.ae;
  var println = kotlin_kotlin.$_$.ta;
  var Exception = kotlin_kotlin.$_$.jg;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.qb;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  initMetadataForClass(JsTheme, 'JsTheme', VOID, Enum);
  initMetadataForClass(SidePanel, 'SidePanel', SidePanel);
  initMetadataForCompanion(Companion);
  initMetadataForObject($serializer, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(RandomJoke, 'RandomJoke', VOID, VOID, VOID, VOID, VOID, {0: $serializer_getInstance});
  initMetadataForCompanion(Companion_0);
  initMetadataForObject($serializer_0, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(User, 'User', User, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_0});
  initMetadataForCompanion(Companion_1);
  initMetadataForObject($serializer_1, '$serializer', VOID, VOID, [GeneratedSerializer]);
  initMetadataForClass(UserWithoutPassword, 'UserWithoutPassword', UserWithoutPassword, VOID, VOID, VOID, VOID, {0: $serializer_getInstance_1});
  initMetadataForClass(Screen, 'Screen');
  initMetadataForObject(AdminHome, 'AdminHome', VOID, Screen);
  initMetadataForObject(AdminLogin, 'AdminLogin', VOID, Screen);
  initMetadataForObject(ComposableSingletons$IndexKt, 'ComposableSingletons$IndexKt');
  initMetadataForLambda(HomePage$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForObject(ComposableSingletons$LoginKt, 'ComposableSingletons$LoginKt');
  initMetadataForLambda(LoginScreen$lambda$lambda$lambda$slambda, CoroutineImpl, [CoroutineImpl], [1]);
  initMetadataForCoroutine($checkUserExistenceCOROUTINE$0, CoroutineImpl);
  initMetadataForObject(Image_0, 'Image');
  initMetadataForObject(Res, 'Res');
  initMetadataForObject(Id, 'Id');
  //endregion
  function forceReloadNow() {
    window.stop();
    window.location.reload();
  }
  function handleServerStatusEvents() {
    var status = ensureNotNull(document.getElementById('status'));
    var lastVersion = {_v: null};
    var shouldReload = {_v: false};
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = status.children[0];
    var warningIcon = ensureNotNull(tmp$ret$1);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = status.children[1];
    var spinnerIcon = ensureNotNull(tmp$ret$3);
    // Inline function 'org.w3c.dom.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$5 = status.children[2];
    var statusText = ensureNotNull(tmp$ret$5);
    status.addEventListener('transitionend', handleServerStatusEvents$lambda(status, shouldReload));
    // Inline function 'org.w3c.dom.EventSourceInit' call
    var o = {};
    o['withCredentials'] = true;
    var eventSource = new EventSource('/api/kobweb-status', o);
    eventSource.addEventListener('version', handleServerStatusEvents$lambda_0(lastVersion, status, shouldReload));
    eventSource.addEventListener('status', handleServerStatusEvents$lambda_1(warningIcon, spinnerIcon, statusText, status));
    eventSource.onerror = handleServerStatusEvents$lambda_2(eventSource);
  }
  function main() {
    handleServerStatusEvents();
    get_api(window).set_logOnError_wi584t_k$(true);
    AppGlobals_getInstance().initialize_8ufbf0_k$(mapOf(to('title', 'BlogMutlplatform')));
    Companion_getInstance().set_wjk6wo_k$('');
    var router = new Router();
    initKobweb(router, main$lambda);
    router.addRouteInterceptor_kgq7h7_k$(main$lambda_0);
    set_additionalSilkInitialization(main$lambda_1);
    router.tryRoutingTo$default_gm9buu_k$(remove(Companion_getInstance(), removePrefix(window.location.href, window.origin)), UpdateHistoryMode_REPLACE_getInstance());
    var root = ensureNotNull(document.getElementById('root'));
    while (!(root.firstChild == null)) {
      root.removeChild(ensureNotNull(root.firstChild));
    }
    renderComposable('root', ComposableLambda$invoke$ref_3(composableLambdaInstance(1108811911, true, main$lambda_2(router))));
  }
  function ComposableLambda$invoke$ref($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      HomePage($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_0($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt$lambda_2$lambda_dts8wk($composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      LoginScreen($composer_0, 0);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_1($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$MainKt$lambda_3$lambda_ezu85n(it, $composer, $changed) {
    var $composer_0 = $composer;
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(it) ? 4 : 2);
    if (!(($dirty & 19) === 18) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-440954647, true, ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80(it), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'ComposableSingletons$MainKt.lambda-3.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_2(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it_0;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      DeferringHost(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$MainKt$lambda_3$lambda$lambda_g9fe80($it) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $it($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_2($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref(composableLambdaInstance(188215112, false, ComposableSingletons$MainKt$lambda_1$lambda_sdpc0d));
    var tmp_0 = this;
    tmp_0.lambda_2_r8sbbo_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1712232191, false, ComposableSingletons$MainKt$lambda_2$lambda_dts8wk));
    var tmp_1 = this;
    tmp_1.lambda_3_r8sbbn_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(854823496, false, ComposableSingletons$MainKt$lambda_3$lambda_ezu85n));
  }
  protoOf(ComposableSingletons$MainKt).get_lambda_1_hy4v3x_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_2_e2b1xe_k$ = function () {
    return this.lambda_2_r8sbbo_1;
  };
  protoOf(ComposableSingletons$MainKt).get_lambda_3_oyd30f_k$ = function () {
    return this.lambda_3_r8sbbn_1;
  };
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function handleServerStatusEvents$lambda($status, $shouldReload) {
    return function (it) {
      var tmp;
      if (hasClass($status, 'fade-out')) {
        removeClass($status, ['fade-out']);
        var tmp_0;
        if ($shouldReload._v) {
          forceReloadNow();
          tmp_0 = Unit_getInstance();
        }
        tmp = tmp_0;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_0($lastVersion, $status, $shouldReload) {
    return function (evt) {
      var version = toInt(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp;
      if ($lastVersion._v == null) {
        $lastVersion._v = version;
        tmp = Unit_getInstance();
      }
      var tmp_0;
      if (!($lastVersion._v === version)) {
        $lastVersion._v = version;
        var tmp_1;
        // Inline function 'kotlin.js.asDynamic' call
        if (document.hidden) {
          forceReloadNow();
          tmp_1 = Unit_getInstance();
        } else {
          // Inline function 'kotlin.text.isNotEmpty' call
          var this_0 = $status.className;
          if (charSequenceLength(this_0) > 0) {
            $shouldReload._v = true;
            tmp_1 = Unit_getInstance();
          } else {
            forceReloadNow();
            tmp_1 = Unit_getInstance();
          }
        }
        tmp_0 = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_1($warningIcon, $spinnerIcon, $statusText, $status) {
    return function (evt) {
      var tmp = JSON;
      var values = tmp.parse(toString((evt instanceof MessageEvent ? evt : THROW_CCE()).data));
      var tmp_0 = values.text;
      var text = (!(tmp_0 == null) ? typeof tmp_0 === 'string' : false) ? tmp_0 : THROW_CCE();
      var tmp_1 = values.isError;
      var isError = toBoolean((!(tmp_1 == null) ? typeof tmp_1 === 'string' : false) ? tmp_1 : THROW_CCE());
      var tmp_2;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(text)) {
        $warningIcon.className = isError ? 'visible' : 'hidden';
        $spinnerIcon.className = isError ? 'hidden' : 'visible';
        $statusText.innerHTML = '<i>' + text + '<\/i>';
        $status.className = 'fade-in';
        tmp_2 = Unit_getInstance();
      } else {
        var tmp_3;
        if ($status.className === 'fade-in') {
          $status.className = 'fade-out';
          tmp_3 = Unit_getInstance();
        }
        tmp_2 = tmp_3;
      }
      return Unit_getInstance();
    };
  }
  function handleServerStatusEvents$lambda_2($eventSource) {
    return function (it) {
      $eventSource.close();
      return Unit_getInstance();
    };
  }
  function main$lambda(ctx) {
    ctx.get_router_j3zccy_k$().register_vkebx7_k$('/', ComposableSingletons$MainKt_getInstance().lambda_1_r8sbbp_1);
    ctx.get_router_j3zccy_k$().register_vkebx7_k$('/admin/login', ComposableSingletons$MainKt_getInstance().lambda_2_r8sbbo_1);
    return Unit_getInstance();
  }
  function main$lambda_0($this$addRouteInterceptor) {
    $this$addRouteInterceptor.set_path_tgrnnc_k$(removeSuffix(removeSuffix($this$addRouteInterceptor.get_path_wos8ry_k$(), '.html'), '.htm'));
    return Unit_getInstance();
  }
  function main$lambda_1(ctx) {
    initSilkWidgets(ctx);
    initSilkWidgetsKobweb(ctx);
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('login-input-base', get_LoginInputBase());
    ctx.get_theme_iz24rk_k$().registerStyle$default_qiw5ck_k$('login-input-focus', get_LoginInputFocus());
    return Unit_getInstance();
  }
  function ComposableLambda$invoke$ref_3($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function main$lambda$lambda($router) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        $router.renderActivePage_fc13h0_k$(ComposableSingletons$MainKt_getInstance().lambda_3_r8sbbn_1, $composer_0, 6, 0);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_4($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function main$lambda_2($router) {
    return function ($this$renderComposable, $composer, $changed) {
      var $composer_0 = $composer;
      // Inline function 'kotlin.run' call
      // Inline function 'main.<anonymous>.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1190994075, true, main$lambda$lambda($router), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'main.<anonymous>.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_4(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      AppEntry(tmp0, $composer_0, 6);
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  function AppEntry(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(433505400);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.changedInstance_s1wkiy_k$(content) ? 4 : 2);
    if (!(($dirty & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'kotlin.run' call
      // Inline function 'com.exmaple.blogmultiplatform.AppEntry.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(-1512839369, true, AppEntry$lambda(content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.exmaple.blogmultiplatform.AppEntry.<anonymous>.<anonymous>' call
        var value = ComposableLambda$invoke$ref_6(dispatchReceiver);
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0 = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      SilkApp(tmp0, $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp0_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.updateScope_t8jcf_k$(AppEntry$lambda_0(content, $changed));
    }
  }
  function AppEntry$lambda$lambda($content) {
    return function ($this$Surface, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        tmp = $content($composer_0, 0);
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_5($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function AppEntry$lambda($content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 3) === 2) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp_0 = minHeight(toModifier(get_SmoothColorStyle(), $composer_0, 0), get_vh(100));
        // Inline function 'kotlin.run' call
        // Inline function 'com.exmaple.blogmultiplatform.AppEntry.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(-415356067, true, AppEntry$lambda$lambda($content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_1;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.exmaple.blogmultiplatform.AppEntry.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_5(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp_2 = tmp_1;
        var tmp0 = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Surface(tmp_0, null, null, null, null, tmp0, $composer_0, 196608, 30);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_6($boundThis) {
    return function (p0, p1) {
      return $boundThis.invoke_z8di7s_k$(p0, p1);
    };
  }
  function AppEntry$lambda_0($content, $$changed) {
    return function ($composer, $force) {
      AppEntry($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  var JsTheme_Primary_instance;
  var JsTheme_Secondary_instance;
  var JsTheme_Tertiary_instance;
  var JsTheme_LightGray_instance;
  var JsTheme_Gray_instance;
  var JsTheme_DarkGray_instance;
  var JsTheme_HalfWhite_instance;
  var JsTheme_HalfBlack_instance;
  var JsTheme_White_instance;
  var JsTheme_Green_instance;
  var JsTheme_Yellow_instance;
  var JsTheme_Red_instance;
  var JsTheme_Purple_instance;
  var JsTheme_Sponsored_instance;
  function values() {
    return [JsTheme_Primary_getInstance(), JsTheme_Secondary_getInstance(), JsTheme_Tertiary_getInstance(), JsTheme_LightGray_getInstance(), JsTheme_Gray_getInstance(), JsTheme_DarkGray_getInstance(), JsTheme_HalfWhite_getInstance(), JsTheme_HalfBlack_getInstance(), JsTheme_White_getInstance(), JsTheme_Green_getInstance(), JsTheme_Yellow_getInstance(), JsTheme_Red_getInstance(), JsTheme_Purple_getInstance(), JsTheme_Sponsored_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Primary':
        return JsTheme_Primary_getInstance();
      case 'Secondary':
        return JsTheme_Secondary_getInstance();
      case 'Tertiary':
        return JsTheme_Tertiary_getInstance();
      case 'LightGray':
        return JsTheme_LightGray_getInstance();
      case 'Gray':
        return JsTheme_Gray_getInstance();
      case 'DarkGray':
        return JsTheme_DarkGray_getInstance();
      case 'HalfWhite':
        return JsTheme_HalfWhite_getInstance();
      case 'HalfBlack':
        return JsTheme_HalfBlack_getInstance();
      case 'White':
        return JsTheme_White_getInstance();
      case 'Green':
        return JsTheme_Green_getInstance();
      case 'Yellow':
        return JsTheme_Yellow_getInstance();
      case 'Red':
        return JsTheme_Red_getInstance();
      case 'Purple':
        return JsTheme_Purple_getInstance();
      case 'Sponsored':
        return JsTheme_Sponsored_getInstance();
      default:
        JsTheme_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var JsTheme_entriesInitialized;
  function JsTheme_initEntries() {
    if (JsTheme_entriesInitialized)
      return Unit_getInstance();
    JsTheme_entriesInitialized = true;
    JsTheme_Primary_instance = new JsTheme('Primary', 0, '#00A2FF', Companion_getInstance_1().rgb_udwlgr_k$(0, 162, 255));
    JsTheme_Secondary_instance = new JsTheme('Secondary', 1, '#001019', Companion_getInstance_1().rgb_udwlgr_k$(0, 16, 25));
    JsTheme_Tertiary_instance = new JsTheme('Tertiary', 2, '#001925', Companion_getInstance_1().rgb_udwlgr_k$(0, 25, 37));
    JsTheme_LightGray_instance = new JsTheme('LightGray', 3, '#FAFAFA', Companion_getInstance_1().rgb_udwlgr_k$(250, 250, 250));
    JsTheme_Gray_instance = new JsTheme('Gray', 4, '#E9E9E9', Companion_getInstance_1().rgb_udwlgr_k$(233, 233, 233));
    JsTheme_DarkGray_instance = new JsTheme('DarkGray', 5, '#646464', Companion_getInstance_1().rgb_udwlgr_k$(100, 100, 100));
    JsTheme_HalfWhite_instance = new JsTheme('HalfWhite', 6, '#FFFFFF', Companion_getInstance_1().rgba_vsmmr0_k$(255, 255, 255, 0.5));
    JsTheme_HalfBlack_instance = new JsTheme('HalfBlack', 7, '#000000', Companion_getInstance_1().rgba_vsmmr0_k$(0, 0, 0, 0.5));
    JsTheme_White_instance = new JsTheme('White', 8, '#FFFFFF', Companion_getInstance_1().rgb_udwlgr_k$(255, 255, 255));
    JsTheme_Green_instance = new JsTheme('Green', 9, '#00FF94', Companion_getInstance_1().rgb_udwlgr_k$(0, 255, 148));
    JsTheme_Yellow_instance = new JsTheme('Yellow', 10, '#FFEC45', Companion_getInstance_1().rgb_udwlgr_k$(255, 236, 69));
    JsTheme_Red_instance = new JsTheme('Red', 11, '#FF6359', Companion_getInstance_1().rgb_udwlgr_k$(255, 99, 89));
    JsTheme_Purple_instance = new JsTheme('Purple', 12, '#8B6DFF', Companion_getInstance_1().rgb_udwlgr_k$(139, 109, 255));
    JsTheme_Sponsored_instance = new JsTheme('Sponsored', 13, '#3300FF', Companion_getInstance_1().rgb_udwlgr_k$(51, 0, 255));
  }
  var $ENTRIES;
  function JsTheme(name, ordinal, hex, rgb) {
    Enum.call(this, name, ordinal);
    this.hex_1 = hex;
    this.rgb_1 = rgb;
  }
  protoOf(JsTheme).get_hex_18j4ge_k$ = function () {
    return this.hex_1;
  };
  protoOf(JsTheme).get_rgb_18ix0c_k$ = function () {
    return this.rgb_1;
  };
  function JsTheme_Primary_getInstance() {
    JsTheme_initEntries();
    return JsTheme_Primary_instance;
  }
  function JsTheme_Secondary_getInstance() {
    JsTheme_initEntries();
    return JsTheme_Secondary_instance;
  }
  function JsTheme_Tertiary_getInstance() {
    JsTheme_initEntries();
    return JsTheme_Tertiary_instance;
  }
  function JsTheme_LightGray_getInstance() {
    JsTheme_initEntries();
    return JsTheme_LightGray_instance;
  }
  function JsTheme_Gray_getInstance() {
    JsTheme_initEntries();
    return JsTheme_Gray_instance;
  }
  function JsTheme_DarkGray_getInstance() {
    JsTheme_initEntries();
    return JsTheme_DarkGray_instance;
  }
  function JsTheme_HalfWhite_getInstance() {
    JsTheme_initEntries();
    return JsTheme_HalfWhite_instance;
  }
  function JsTheme_HalfBlack_getInstance() {
    JsTheme_initEntries();
    return JsTheme_HalfBlack_instance;
  }
  function JsTheme_White_getInstance() {
    JsTheme_initEntries();
    return JsTheme_White_instance;
  }
  function JsTheme_Green_getInstance() {
    JsTheme_initEntries();
    return JsTheme_Green_instance;
  }
  function JsTheme_Yellow_getInstance() {
    JsTheme_initEntries();
    return JsTheme_Yellow_instance;
  }
  function JsTheme_Red_getInstance() {
    JsTheme_initEntries();
    return JsTheme_Red_instance;
  }
  function JsTheme_Purple_getInstance() {
    JsTheme_initEntries();
    return JsTheme_Purple_instance;
  }
  function JsTheme_Sponsored_getInstance() {
    JsTheme_initEntries();
    return JsTheme_Sponsored_instance;
  }
  var com_exmaple_blogmultiplatform_components_SidePanel$stable;
  function SidePanel() {
  }
  function com_exmaple_blogmultiplatform_components_SidePanel$stableprop_getter() {
    return com_exmaple_blogmultiplatform_components_SidePanel$stable;
  }
  var com_exmaple_blogmultiplatform_models_RandomJoke_$serializer$stable;
  var com_exmaple_blogmultiplatform_models_RandomJoke$stable;
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance();
  };
  var Companion_instance;
  function Companion_getInstance_11() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function $serializer() {
    $serializer_instance = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.exmaple.blogmultiplatform.models.RandomJoke', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('id', false);
    tmp0_serialDesc.addElement_5pzumi_k$('joke', false);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer).serialize_w5l73y_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    tmp1_output.encodeIntElement_krhhce_k$(tmp0_desc, 0, value.id_1);
    tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.joke_1);
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_w5l73y_k$(encoder, value instanceof RandomJoke ? value : THROW_CCE());
  };
  protoOf($serializer).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = 0;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeIntElement_941u6a_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return RandomJoke_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [IntSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance;
  function $serializer_getInstance() {
    if ($serializer_instance == null)
      new $serializer();
    return $serializer_instance;
  }
  function RandomJoke_init_$Init$(seen0, id, joke, serializationConstructorMarker, $this) {
    if (!(3 === (3 & seen0))) {
      throwMissingFieldException(seen0, 3, $serializer_getInstance().descriptor_1);
    }
    $this.id_1 = id;
    $this.joke_1 = joke;
    return $this;
  }
  function RandomJoke_init_$Create$(seen0, id, joke, serializationConstructorMarker) {
    return RandomJoke_init_$Init$(seen0, id, joke, serializationConstructorMarker, objectCreate(protoOf(RandomJoke)));
  }
  function RandomJoke(id, joke) {
    Companion_getInstance_11();
    this.id_1 = id;
    this.joke_1 = joke;
  }
  protoOf(RandomJoke).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(RandomJoke).get_joke_woop0o_k$ = function () {
    return this.joke_1;
  };
  protoOf(RandomJoke).component1_7eebsc_k$ = function () {
    return this.id_1;
  };
  protoOf(RandomJoke).component2_7eebsb_k$ = function () {
    return this.joke_1;
  };
  protoOf(RandomJoke).copy_xhhsuv_k$ = function (id, joke) {
    return new RandomJoke(id, joke);
  };
  protoOf(RandomJoke).copy$default_u53uay_k$ = function (id, joke, $super) {
    id = id === VOID ? this.id_1 : id;
    joke = joke === VOID ? this.joke_1 : joke;
    return $super === VOID ? this.copy_xhhsuv_k$(id, joke) : $super.copy_xhhsuv_k$.call(this, id, joke);
  };
  protoOf(RandomJoke).toString = function () {
    return 'RandomJoke(id=' + this.id_1 + ', joke=' + this.joke_1 + ')';
  };
  protoOf(RandomJoke).hashCode = function () {
    var result = this.id_1;
    result = imul(result, 31) + getStringHashCode(this.joke_1) | 0;
    return result;
  };
  protoOf(RandomJoke).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RandomJoke))
      return false;
    var tmp0_other_with_cast = other instanceof RandomJoke ? other : THROW_CCE();
    if (!(this.id_1 === tmp0_other_with_cast.id_1))
      return false;
    if (!(this.joke_1 === tmp0_other_with_cast.joke_1))
      return false;
    return true;
  };
  function com_exmaple_blogmultiplatform_models_RandomJoke_$serializer$stableprop_getter() {
    return com_exmaple_blogmultiplatform_models_RandomJoke_$serializer$stable;
  }
  function com_exmaple_blogmultiplatform_models_RandomJoke$stableprop_getter() {
    return com_exmaple_blogmultiplatform_models_RandomJoke$stable;
  }
  var com_exmaple_blogmultiplatform_models_User_$serializer$stable;
  var com_exmaple_blogmultiplatform_models_User$stable;
  var com_exmaple_blogmultiplatform_models_UserWithoutPassword_$serializer$stable;
  var com_exmaple_blogmultiplatform_models_UserWithoutPassword$stable;
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_0();
  };
  var Companion_instance_0;
  function Companion_getInstance_12() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function $serializer_0() {
    $serializer_instance_0 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.exmaple.blogmultiplatform.models.User', this, 3);
    tmp0_serialDesc.addElement_5pzumi_k$('_id', true);
    tmp0_serialDesc.addElement_5pzumi_k$('username', true);
    tmp0_serialDesc.addElement_5pzumi_k$('password', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_0).serialize_hergb9_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value._id_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value._id_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.username_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.username_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 2) ? true : !(value.password_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 2, value.password_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_0).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_hergb9_k$(encoder, value instanceof User ? value : THROW_CCE());
  };
  protoOf($serializer_0).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_local2 = null;
    var tmp7_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp7_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
      tmp6_local2 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
      tmp3_bitMask0 = tmp3_bitMask0 | 4;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp7_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          case 2:
            tmp6_local2 = tmp7_input.decodeStringElement_3oenpg_k$(tmp0_desc, 2);
            tmp3_bitMask0 = tmp3_bitMask0 | 4;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp7_input.endStructure_1xqz0n_k$(tmp0_desc);
    return User_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, tmp6_local2, null);
  };
  protoOf($serializer_0).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_0).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_0;
  function $serializer_getInstance_0() {
    if ($serializer_instance_0 == null)
      new $serializer_0();
    return $serializer_instance_0;
  }
  function User_init_$Init$(seen0, _id, username, password, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_0().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this._id_1 = '';
    else
      $this._id_1 = _id;
    if (0 === (seen0 & 2))
      $this.username_1 = '';
    else
      $this.username_1 = username;
    if (0 === (seen0 & 4))
      $this.password_1 = '';
    else
      $this.password_1 = password;
    return $this;
  }
  function User_init_$Create$(seen0, _id, username, password, serializationConstructorMarker) {
    return User_init_$Init$(seen0, _id, username, password, serializationConstructorMarker, objectCreate(protoOf(User)));
  }
  function User(_id, username, password) {
    Companion_getInstance_12();
    _id = _id === VOID ? '' : _id;
    username = username === VOID ? '' : username;
    password = password === VOID ? '' : password;
    this._id_1 = _id;
    this.username_1 = username;
    this.password_1 = password;
  }
  protoOf(User).get__id_18jb1r_k$ = function () {
    return this._id_1;
  };
  protoOf(User).get_username_ytz5i7_k$ = function () {
    return this.username_1;
  };
  protoOf(User).get_password_bodifw_k$ = function () {
    return this.password_1;
  };
  protoOf(User).component1_7eebsc_k$ = function () {
    return this._id_1;
  };
  protoOf(User).component2_7eebsb_k$ = function () {
    return this.username_1;
  };
  protoOf(User).component3_7eebsa_k$ = function () {
    return this.password_1;
  };
  protoOf(User).copy_nc7k0r_k$ = function (_id, username, password) {
    return new User(_id, username, password);
  };
  protoOf(User).copy$default_h98aju_k$ = function (_id, username, password, $super) {
    _id = _id === VOID ? this._id_1 : _id;
    username = username === VOID ? this.username_1 : username;
    password = password === VOID ? this.password_1 : password;
    return $super === VOID ? this.copy_nc7k0r_k$(_id, username, password) : $super.copy_nc7k0r_k$.call(this, _id, username, password);
  };
  protoOf(User).toString = function () {
    return 'User(_id=' + this._id_1 + ', username=' + this.username_1 + ', password=' + this.password_1 + ')';
  };
  protoOf(User).hashCode = function () {
    var result = getStringHashCode(this._id_1);
    result = imul(result, 31) + getStringHashCode(this.username_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.password_1) | 0;
    return result;
  };
  protoOf(User).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof User))
      return false;
    var tmp0_other_with_cast = other instanceof User ? other : THROW_CCE();
    if (!(this._id_1 === tmp0_other_with_cast._id_1))
      return false;
    if (!(this.username_1 === tmp0_other_with_cast.username_1))
      return false;
    if (!(this.password_1 === tmp0_other_with_cast.password_1))
      return false;
    return true;
  };
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).serializer_9w0wvi_k$ = function () {
    return $serializer_getInstance_1();
  };
  var Companion_instance_1;
  function Companion_getInstance_13() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function $serializer_1() {
    $serializer_instance_1 = this;
    var tmp0_serialDesc = new PluginGeneratedSerialDescriptor('com.exmaple.blogmultiplatform.models.UserWithoutPassword', this, 2);
    tmp0_serialDesc.addElement_5pzumi_k$('_id', true);
    tmp0_serialDesc.addElement_5pzumi_k$('username', true);
    this.descriptor_1 = tmp0_serialDesc;
  }
  protoOf($serializer_1).serialize_oiavsi_k$ = function (encoder, value) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_output = encoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 0) ? true : !(value._id_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 0, value._id_1);
    }
    if (tmp1_output.shouldEncodeElementDefault_x8eyid_k$(tmp0_desc, 1) ? true : !(value.username_1 === '')) {
      tmp1_output.encodeStringElement_1n5wu2_k$(tmp0_desc, 1, value.username_1);
    }
    tmp1_output.endStructure_1xqz0n_k$(tmp0_desc);
  };
  protoOf($serializer_1).serialize_5ase3y_k$ = function (encoder, value) {
    return this.serialize_oiavsi_k$(encoder, value instanceof UserWithoutPassword ? value : THROW_CCE());
  };
  protoOf($serializer_1).deserialize_sy6x50_k$ = function (decoder) {
    var tmp0_desc = this.descriptor_1;
    var tmp1_flag = true;
    var tmp2_index = 0;
    var tmp3_bitMask0 = 0;
    var tmp4_local0 = null;
    var tmp5_local1 = null;
    var tmp6_input = decoder.beginStructure_yljocp_k$(tmp0_desc);
    if (tmp6_input.decodeSequentially_xlblqy_k$()) {
      tmp4_local0 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
      tmp3_bitMask0 = tmp3_bitMask0 | 1;
      tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
      tmp3_bitMask0 = tmp3_bitMask0 | 2;
    } else
      while (tmp1_flag) {
        tmp2_index = tmp6_input.decodeElementIndex_bstkhp_k$(tmp0_desc);
        switch (tmp2_index) {
          case -1:
            tmp1_flag = false;
            break;
          case 0:
            tmp4_local0 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 0);
            tmp3_bitMask0 = tmp3_bitMask0 | 1;
            break;
          case 1:
            tmp5_local1 = tmp6_input.decodeStringElement_3oenpg_k$(tmp0_desc, 1);
            tmp3_bitMask0 = tmp3_bitMask0 | 2;
            break;
          default:
            throw UnknownFieldException_init_$Create$(tmp2_index);
        }
      }
    tmp6_input.endStructure_1xqz0n_k$(tmp0_desc);
    return UserWithoutPassword_init_$Create$(tmp3_bitMask0, tmp4_local0, tmp5_local1, null);
  };
  protoOf($serializer_1).get_descriptor_wjt6a0_k$ = function () {
    return this.descriptor_1;
  };
  protoOf($serializer_1).childSerializers_5ghqw5_k$ = function () {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [StringSerializer_getInstance(), StringSerializer_getInstance()];
  };
  var $serializer_instance_1;
  function $serializer_getInstance_1() {
    if ($serializer_instance_1 == null)
      new $serializer_1();
    return $serializer_instance_1;
  }
  function UserWithoutPassword_init_$Init$(seen0, _id, username, serializationConstructorMarker, $this) {
    if (!(0 === (0 & seen0))) {
      throwMissingFieldException(seen0, 0, $serializer_getInstance_1().descriptor_1);
    }
    if (0 === (seen0 & 1))
      $this._id_1 = '';
    else
      $this._id_1 = _id;
    if (0 === (seen0 & 2))
      $this.username_1 = '';
    else
      $this.username_1 = username;
    return $this;
  }
  function UserWithoutPassword_init_$Create$(seen0, _id, username, serializationConstructorMarker) {
    return UserWithoutPassword_init_$Init$(seen0, _id, username, serializationConstructorMarker, objectCreate(protoOf(UserWithoutPassword)));
  }
  function UserWithoutPassword(_id, username) {
    Companion_getInstance_13();
    _id = _id === VOID ? '' : _id;
    username = username === VOID ? '' : username;
    this._id_1 = _id;
    this.username_1 = username;
  }
  protoOf(UserWithoutPassword).get__id_18jb1r_k$ = function () {
    return this._id_1;
  };
  protoOf(UserWithoutPassword).get_username_ytz5i7_k$ = function () {
    return this.username_1;
  };
  protoOf(UserWithoutPassword).component1_7eebsc_k$ = function () {
    return this._id_1;
  };
  protoOf(UserWithoutPassword).component2_7eebsb_k$ = function () {
    return this.username_1;
  };
  protoOf(UserWithoutPassword).copy_plwnsl_k$ = function (_id, username) {
    return new UserWithoutPassword(_id, username);
  };
  protoOf(UserWithoutPassword).copy$default_x50jeu_k$ = function (_id, username, $super) {
    _id = _id === VOID ? this._id_1 : _id;
    username = username === VOID ? this.username_1 : username;
    return $super === VOID ? this.copy_plwnsl_k$(_id, username) : $super.copy_plwnsl_k$.call(this, _id, username);
  };
  protoOf(UserWithoutPassword).toString = function () {
    return 'UserWithoutPassword(_id=' + this._id_1 + ', username=' + this.username_1 + ')';
  };
  protoOf(UserWithoutPassword).hashCode = function () {
    var result = getStringHashCode(this._id_1);
    result = imul(result, 31) + getStringHashCode(this.username_1) | 0;
    return result;
  };
  protoOf(UserWithoutPassword).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UserWithoutPassword))
      return false;
    var tmp0_other_with_cast = other instanceof UserWithoutPassword ? other : THROW_CCE();
    if (!(this._id_1 === tmp0_other_with_cast._id_1))
      return false;
    if (!(this.username_1 === tmp0_other_with_cast.username_1))
      return false;
    return true;
  };
  function com_exmaple_blogmultiplatform_models_User_$serializer$stableprop_getter() {
    return com_exmaple_blogmultiplatform_models_User_$serializer$stable;
  }
  function com_exmaple_blogmultiplatform_models_User$stableprop_getter() {
    return com_exmaple_blogmultiplatform_models_User$stable;
  }
  function com_exmaple_blogmultiplatform_models_UserWithoutPassword_$serializer$stableprop_getter() {
    return com_exmaple_blogmultiplatform_models_UserWithoutPassword_$serializer$stable;
  }
  function com_exmaple_blogmultiplatform_models_UserWithoutPassword$stableprop_getter() {
    return com_exmaple_blogmultiplatform_models_UserWithoutPassword$stable;
  }
  var com_exmaple_blogmultiplatform_navigation_Screen_AdminHome$stable;
  var com_exmaple_blogmultiplatform_navigation_Screen_AdminLogin$stable;
  var com_exmaple_blogmultiplatform_navigation_Screen$stable;
  function AdminHome() {
    AdminHome_instance = this;
    Screen.call(this, '/admin/');
  }
  protoOf(AdminHome).toString = function () {
    return 'AdminHome';
  };
  protoOf(AdminHome).hashCode = function () {
    return 1493474345;
  };
  protoOf(AdminHome).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AdminHome))
      return false;
    other instanceof AdminHome || THROW_CCE();
    return true;
  };
  var AdminHome_instance;
  function AdminHome_getInstance() {
    if (AdminHome_instance == null)
      new AdminHome();
    return AdminHome_instance;
  }
  function AdminLogin() {
    AdminLogin_instance = this;
    Screen.call(this, '/admin/login');
  }
  protoOf(AdminLogin).toString = function () {
    return 'AdminLogin';
  };
  protoOf(AdminLogin).hashCode = function () {
    return -943247009;
  };
  protoOf(AdminLogin).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AdminLogin))
      return false;
    other instanceof AdminLogin || THROW_CCE();
    return true;
  };
  var AdminLogin_instance;
  function AdminLogin_getInstance() {
    if (AdminLogin_instance == null)
      new AdminLogin();
    return AdminLogin_instance;
  }
  function Screen(route) {
    this.route_1 = route;
  }
  protoOf(Screen).get_route_iy3cio_k$ = function () {
    return this.route_1;
  };
  function com_exmaple_blogmultiplatform_navigation_Screen_AdminHome$stableprop_getter() {
    return com_exmaple_blogmultiplatform_navigation_Screen_AdminHome$stable;
  }
  function com_exmaple_blogmultiplatform_navigation_Screen_AdminLogin$stableprop_getter() {
    return com_exmaple_blogmultiplatform_navigation_Screen_AdminLogin$stable;
  }
  function com_exmaple_blogmultiplatform_navigation_Screen$stableprop_getter() {
    return com_exmaple_blogmultiplatform_navigation_Screen$stable;
  }
  function HomePage($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(2105950111);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      $composer_0.startReplaceGroup_5hh8aj_k$(-1194282634);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = this_0.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.exmaple.blogmultiplatform.pages.HomePage.<anonymous>' call
        var value = mutableStateOf(null);
        this_0.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp0_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var randomJoke$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(-1194280694);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_1.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.exmaple.blogmultiplatform.pages.HomePage.<anonymous>' call
        var value_0 = HomePage$slambda_0(null);
        this_1.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp1_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      LaunchedEffect(Unit_getInstance(), tmp1_group, $composer_0, 6);
      var tmp_3 = fillMaxSize(Companion_getInstance_2());
      var tmp_4 = Center_getInstance();
      Box(tmp_3, tmp_4, null, ComposableSingletons$IndexKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 3072, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(HomePage$lambda_1($changed));
    }
  }
  function ComposableLambda$invoke$ref_7($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$IndexKt$lambda_1$lambda_5yb608($this$Box, $composer, $changed) {
    var $composer_0 = $composer;
    if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
      Text('THIS PAGE INTENTIONALLY LEFT BLANK', $composer_0, 6);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    return Unit_getInstance();
  }
  function ComposableSingletons$IndexKt() {
    ComposableSingletons$IndexKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_7(composableLambdaInstance(482393561, false, ComposableSingletons$IndexKt$lambda_1$lambda_5yb608));
  }
  protoOf(ComposableSingletons$IndexKt).get_lambda_1_hy4v3x_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$IndexKt_instance;
  function ComposableSingletons$IndexKt_getInstance() {
    if (ComposableSingletons$IndexKt_instance == null)
      new ComposableSingletons$IndexKt();
    return ComposableSingletons$IndexKt_instance;
  }
  function HomePage$lambda($randomJoke$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('randomJoke', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $randomJoke$delegate.get_value_j01efc_k$();
  }
  function HomePage$lambda_0($randomJoke$delegate, _set____db54di) {
    getLocalDelegateReference('randomJoke', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $randomJoke$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function HomePage$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(HomePage$slambda).invoke_d9fzmj_k$ = function ($this$LaunchedEffect, $completion) {
    var tmp = this.create_rcuf4x_k$($this$LaunchedEffect, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(HomePage$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(HomePage$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(HomePage$slambda).create_rcuf4x_k$ = function ($this$LaunchedEffect, completion) {
    var i = new HomePage$slambda(completion);
    i.$this$LaunchedEffect_1 = $this$LaunchedEffect;
    return i;
  };
  protoOf(HomePage$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function HomePage$slambda_0(resultContinuation) {
    var i = new HomePage$slambda(resultContinuation);
    var l = function ($this$LaunchedEffect, $completion) {
      return i.invoke_d9fzmj_k$($this$LaunchedEffect, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function HomePage$lambda_1($$changed) {
    return function ($composer, $force) {
      HomePage($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function LoginScreen($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.startRestartGroup_lebv1i_k$(230677524);
    if (!($changed === 0) || !$composer_0.get_skipping_3owdve_k$()) {
      // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
      var getContext = null;
      var $composer_1 = $composer_0;
      sourceInformationMarkerStart($composer_1, 773894976, 'CC(rememberCoroutineScope)482@20254L144:Effects.kt#9igjgp');
      if (!((1 & 1) === 0)) {
        getContext = LoginScreen$lambda_3;
      }
      var composer = $composer_1;
      sourceInformationMarkerStart($composer_1, -954370320, 'CC(remember):Effects.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it = $composer_1.rememberedValue_4dg93v_k$();
      var tmp;
      if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'androidx.compose.runtime.rememberCoroutineScope.<anonymous>' call
        var value = new CompositionScopedCoroutineScopeCanceller(createCompositionCoroutineScope(getContext(), composer));
        $composer_1.updateRememberedValue_l1wh71_k$(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp_0 = tmp;
      var tmp1_group = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
      sourceInformationMarkerEnd($composer_1);
      var wrapper = tmp1_group;
      var tmp0 = wrapper.get_coroutineScope_5k7h45_k$();
      sourceInformationMarkerEnd($composer_1);
      var scope = tmp0;
      var context = rememberPageContext($composer_0, 0);
      $composer_0.startReplaceGroup_5hh8aj_k$(1415574895);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_0 = this_0.rememberedValue_4dg93v_k$();
      var tmp_1;
      if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>' call
        var value_0 = mutableStateOf(' ');
        this_0.updateRememberedValue_l1wh71_k$(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      var tmp0_group = (tmp_2 == null ? true : !(tmp_2 == null)) ? tmp_2 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var errorText$delegate = tmp0_group;
      $composer_0.startReplaceGroup_5hh8aj_k$(1415576729);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_1 = this_1.rememberedValue_4dg93v_k$();
      var tmp_3;
      if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>' call
        var value_1 = mutableStateOf(null);
        this_1.updateRememberedValue_l1wh71_k$(value_1);
        tmp_3 = value_1;
      } else {
        tmp_3 = it_1;
      }
      var tmp_4 = tmp_3;
      var tmp1_group_0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
      $composer_0.endReplaceGroup_ek144q_k$();
      var focusedField$delegate = tmp1_group_0;
      var tmp_5 = fillMaxSize(Companion_getInstance_2());
      var tmp_6 = Center_getInstance();
      // Inline function 'kotlin.run' call
      // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>' call
      var dispatchReceiver = rememberComposableLambda(1846984474, true, LoginScreen$lambda_4(scope, context, focusedField$delegate, errorText$delegate), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_2 = $composer_0;
      sourceInformationMarkerStart($composer_2, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_2.changed_ga7h3f_k$(dispatchReceiver);
      // Inline function 'kotlin.let' call
      // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
      var it_2 = $composer_2.rememberedValue_4dg93v_k$();
      var tmp_7;
      if (invalid || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
        // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>' call
        var value_2 = ComposableLambda$invoke$ref_10(dispatchReceiver);
        $composer_2.updateRememberedValue_l1wh71_k$(value_2);
        tmp_7 = value_2;
      } else {
        tmp_7 = it_2;
      }
      var tmp_8 = tmp_7;
      var tmp0_0 = (tmp_8 == null ? true : !(tmp_8 == null)) ? tmp_8 : THROW_CCE();
      sourceInformationMarkerEnd($composer_2);
      Box(tmp_5, tmp_6, null, tmp0_0, $composer_0, 3072, 4);
    } else {
      $composer_0.skipToGroupEnd_lh3zi2_k$();
    }
    var tmp2_safe_receiver = $composer_0.endRestartGroup_yxpjv9_k$();
    if (tmp2_safe_receiver == null)
      null;
    else {
      tmp2_safe_receiver.updateScope_t8jcf_k$(LoginScreen$lambda_5($changed));
    }
  }
  function rememberLoggedIn(remember, user) {
    user = user === VOID ? null : user;
    // Inline function 'org.w3c.dom.set' call
    // Inline function 'kotlin.js.asDynamic' call
    localStorage['remember'] = remember.toString();
    if (!(user == null)) {
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage['userId'] = user.get__id_18jb1r_k$();
      // Inline function 'org.w3c.dom.set' call
      // Inline function 'kotlin.js.asDynamic' call
      localStorage['username'] = user.get_username_ytz5i7_k$();
    }
  }
  function ComposableLambda$invoke$ref_8($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    SpanText('Sign in', null, null, null, $composer_0, 6, 14);
    return Unit_getInstance();
  }
  function ComposableSingletons$LoginKt() {
    ComposableSingletons$LoginKt_instance = this;
    var tmp = this;
    tmp.lambda_1_r8sbbp_1 = ComposableLambda$invoke$ref_8(composableLambdaInstance(-684662377, false, ComposableSingletons$LoginKt$lambda_1$lambda_f1msqn));
  }
  protoOf(ComposableSingletons$LoginKt).get_lambda_1_hy4v3x_k$ = function () {
    return this.lambda_1_r8sbbp_1;
  };
  var ComposableSingletons$LoginKt_instance;
  function ComposableSingletons$LoginKt_getInstance() {
    if (ComposableSingletons$LoginKt_instance == null)
      new ComposableSingletons$LoginKt();
    return ComposableSingletons$LoginKt_instance;
  }
  function LoginScreen$lambda($errorText$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $errorText$delegate.get_value_j01efc_k$();
  }
  function LoginScreen$lambda_0($errorText$delegate, _set____db54di) {
    getLocalDelegateReference('errorText', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $errorText$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function LoginScreen$lambda_1($focusedField$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('focusedField', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    return $focusedField$delegate.get_value_j01efc_k$();
  }
  function LoginScreen$lambda_2($focusedField$delegate, _set____db54di) {
    getLocalDelegateReference('focusedField', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    $focusedField$delegate.set_value_v1vabv_k$(_set____db54di);
    return Unit_getInstance();
  }
  function LoginScreen$lambda_3() {
    return EmptyCoroutineContext_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda($focusedField$delegate) {
    return function (it) {
      LoginScreen$lambda_2($focusedField$delegate, 'username');
      return Unit_getInstance();
    };
  }
  function LoginScreen$lambda$lambda$lambda_0($focusedField$delegate) {
    return function (it) {
      LoginScreen$lambda_2($focusedField$delegate, null);
      return Unit_getInstance();
    };
  }
  function LoginScreen$lambda$lambda$lambda_1($this$toAttrs) {
    $this$toAttrs.attr_w68641_k$('placeholder', 'Username');
    return Unit_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda_2($focusedField$delegate) {
    return function (it) {
      LoginScreen$lambda_2($focusedField$delegate, 'name');
      return Unit_getInstance();
    };
  }
  function LoginScreen$lambda$lambda$lambda_3($focusedField$delegate) {
    return function (it) {
      LoginScreen$lambda_2($focusedField$delegate, null);
      return Unit_getInstance();
    };
  }
  function LoginScreen$lambda$lambda$lambda_4($this$toAttrs) {
    $this$toAttrs.attr_w68641_k$('placeholder', 'Password');
    return Unit_getInstance();
  }
  function LoginScreen$lambda$lambda$lambda$slambda($context, $errorText$delegate, resultContinuation) {
    this.$context_1 = $context;
    this.$errorText$delegate_1 = $errorText$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LoginScreen$lambda$lambda$lambda$slambda).invoke_d9fzmj_k$ = function ($this$launch, $completion) {
    var tmp = this.create_rcuf4x_k$($this$launch, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LoginScreen$lambda$lambda$lambda$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LoginScreen$lambda$lambda$lambda$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(6);
            var tmp_0 = this;
            var tmp_1 = document.getElementById('usernameInput');
            tmp_0.username0__1 = (tmp_1 instanceof HTMLInputElement ? tmp_1 : THROW_CCE()).value;
            var tmp_2 = this;
            var tmp_3 = document.getElementById('passwordInput');
            tmp_2.password1__1 = (tmp_3 instanceof HTMLInputElement ? tmp_3 : THROW_CCE()).value;
            var tmp_4;
            var this_0 = this.username0__1;
            if (charSequenceLength(this_0) > 0) {
              var this_1 = this.password1__1;
              tmp_4 = charSequenceLength(this_1) > 0;
            } else {
              tmp_4 = false;
            }

            if (tmp_4) {
              this.set_state_rjd8d0_k$(2);
              suspendResult = checkUserExistence(new User(VOID, this.username0__1, this.password1__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              LoginScreen$lambda_0(this.$errorText$delegate_1, 'Input fields are empty.');
              this.set_state_rjd8d0_k$(1);
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            LoginScreen$lambda_0(this.$errorText$delegate_1, ' ');
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 2:
            this.user2__1 = suspendResult;
            if (!(this.user2__1 == null)) {
              rememberLoggedIn(true, this.user2__1);
              this.$context_1.get_router_j3zccy_k$().navigateTo$default_onbd51_k$(AdminHome_getInstance().get_route_iy3cio_k$());
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              LoginScreen$lambda_0(this.$errorText$delegate_1, "The user doesn't exist.");
              this.set_state_rjd8d0_k$(3);
              suspendResult = delay(new Long(3000, 0), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 3:
            LoginScreen$lambda_0(this.$errorText$delegate_1, ' ');
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(5);
            continue $sm;
          case 5:
            return Unit_getInstance();
          case 6:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 6) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LoginScreen$lambda$lambda$lambda$slambda).create_rcuf4x_k$ = function ($this$launch, completion) {
    var i = new LoginScreen$lambda$lambda$lambda$slambda(this.$context_1, this.$errorText$delegate_1, completion);
    i.$this$launch_1 = $this$launch;
    return i;
  };
  protoOf(LoginScreen$lambda$lambda$lambda$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function LoginScreen$lambda$lambda$lambda$slambda_0($context, $errorText$delegate, resultContinuation) {
    var i = new LoginScreen$lambda$lambda$lambda$slambda($context, $errorText$delegate, resultContinuation);
    var l = function ($this$launch, $completion) {
      return i.invoke_d9fzmj_k$($this$launch, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function LoginScreen$lambda$lambda$lambda_5($scope, $context, $errorText$delegate) {
    return function (it) {
      launch($scope, VOID, VOID, LoginScreen$lambda$lambda$lambda$slambda_0($context, $errorText$delegate, null));
      return Unit_getInstance();
    };
  }
  function LoginScreen$lambda$lambda($scope, $context, $focusedField$delegate, $errorText$delegate) {
    return function ($this$Column, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp0_modifier = width(margin(Companion_getInstance_2(), VOID, VOID, get_px(50)), get_px(100));
        var tmp1_src = '/logo.svg';
        Image(tmp1_src, tmp0_modifier, null, null, null, 'Logo Image', null, $composer_0, 196614, 92);
        var tmp_0 = Text_getInstance();
        var tmp_1 = fontSize(backgroundColor(padding(height(width(margin(id(Companion_getInstance_2(), 'usernameInput'), VOID, VOID, get_px(12)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().get_White_ij46ow_k$()), get_px(14));
        var tmp_2 = get_px(0);
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        Companion_getInstance_3();
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_3 = outline(tmp_1, tmp_2, 'none', Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_4;
        if (LoginScreen$lambda_1($focusedField$delegate) === 'username') {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1365548487);
          var tmp0_group = toModifier(get_LoginInputBase(), $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_4 = tmp0_group;
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1365547399);
          var tmp1_group = toModifier(get_LoginInputFocus(), $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_4 = tmp1_group;
        }
        var tmp_5 = tmp_3.then_mmfvo6_k$(tmp_4);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1365545942);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_6;
        if (false || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = LoginScreen$lambda$lambda$lambda($focusedField$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value);
          tmp_6 = value;
        } else {
          tmp_6 = it;
        }
        var tmp_7 = tmp_6;
        var tmp2_group = (tmp_7 == null ? true : !(tmp_7 == null)) ? tmp_7 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_8 = onFocusIn(tmp_5, tmp2_group);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1365543964);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_0 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_9;
        if (false || it_0 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_0 = LoginScreen$lambda$lambda$lambda_0($focusedField$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_0);
          tmp_9 = value_0;
        } else {
          tmp_9 = it_0;
        }
        var tmp_10 = tmp_9;
        var tmp3_group = (tmp_10 == null ? true : !(tmp_10 == null)) ? tmp_10 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_11 = onFocusOut(tmp_8, tmp3_group);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1365542212);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_1 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_12;
        if (false || it_1 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_1 = LoginScreen$lambda$lambda$lambda_1;
          $composer_0.updateRememberedValue_l1wh71_k$(value_1);
          tmp_12 = value_1;
        } else {
          tmp_12 = it_1;
        }
        var tmp_13 = tmp_12;
        var tmp4_group = (tmp_13 == null ? true : !(tmp_13 == null)) ? tmp_13 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Input(tmp_0, toAttrs(tmp_11, tmp4_group), $composer_0, 0);
        var tmp_14 = Password_getInstance();
        var tmp_15 = fontSize(backgroundColor(padding(height(width(margin(id(Companion_getInstance_2(), 'passwordInput'), VOID, VOID, get_px(20)), get_px(350)), get_px(54)), VOID, get_px(20)), Colors_getInstance().get_White_ij46ow_k$()), get_px(14));
        var tmp_16 = get_px(0);
        // Inline function 'org.jetbrains.compose.web.css.Companion.None' call
        Companion_getInstance_3();
        // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_17 = outline(tmp_15, tmp_16, 'none', Colors_getInstance().get_Transparent_cxh4g9_k$());
        var tmp_18;
        if (LoginScreen$lambda_1($focusedField$delegate) === 'name') {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1365518599);
          var tmp5_group = toModifier(get_LoginInputBase(), $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_18 = tmp5_group;
        } else {
          $composer_0.startReplaceGroup_5hh8aj_k$(-1365517511);
          var tmp6_group = toModifier(get_LoginInputFocus(), $composer_0, 0);
          $composer_0.endReplaceGroup_ek144q_k$();
          tmp_18 = tmp6_group;
        }
        var tmp_19 = tmp_17.then_mmfvo6_k$(tmp_18);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1365516058);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_2 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_20;
        if (false || it_2 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_2 = LoginScreen$lambda$lambda$lambda_2($focusedField$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_2);
          tmp_20 = value_2;
        } else {
          tmp_20 = it_2;
        }
        var tmp_21 = tmp_20;
        var tmp7_group = (tmp_21 == null ? true : !(tmp_21 == null)) ? tmp_21 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_22 = onFocusIn(tmp_19, tmp7_group);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1365514204);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_3 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_23;
        if (false || it_3 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_3 = LoginScreen$lambda$lambda$lambda_3($focusedField$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_3);
          tmp_23 = value_3;
        } else {
          tmp_23 = it_3;
        }
        var tmp_24 = tmp_23;
        var tmp8_group = (tmp_24 == null ? true : !(tmp_24 == null)) ? tmp_24 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        var tmp_25 = onFocusOut(tmp_22, tmp8_group);
        $composer_0.startReplaceGroup_5hh8aj_k$(-1365512452);
        // Inline function 'androidx.compose.runtime.cache' call
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_4 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_26;
        if (false || it_4 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_4 = LoginScreen$lambda$lambda$lambda_4;
          $composer_0.updateRememberedValue_l1wh71_k$(value_4);
          tmp_26 = value_4;
        } else {
          tmp_26 = it_4;
        }
        var tmp_27 = tmp_26;
        var tmp9_group = (tmp_27 == null ? true : !(tmp_27 == null)) ? tmp_27 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Input(tmp_14, toAttrs(tmp_25, tmp9_group), $composer_0, 0);
        var tmp_28 = cursor(fontSize(fontWeight(borderRadius(color(backgroundColor(height(width(margin(Companion_getInstance_2(), VOID, VOID, get_px(24)), get_px(350)), get_px(54)), JsTheme_Primary_getInstance().get_rgb_18ix0c_k$()), Colors_getInstance().get_White_ij46ow_k$()), get_px(4)), Companion_getInstance_4().get_Medium_1fiba6_k$()), get_px(14)), Companion_getInstance_5().get_Pointer_m64vg4_k$());
        $composer_0.startReplaceGroup_5hh8aj_k$(-1365492954);
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = !!($composer_0.changedInstance_s1wkiy_k$($scope) | $composer_0.changedInstance_s1wkiy_k$($context));
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it_5 = $composer_0.rememberedValue_4dg93v_k$();
        var tmp_29;
        if (invalid || it_5 === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value_5 = LoginScreen$lambda$lambda$lambda_5($scope, $context, $errorText$delegate);
          $composer_0.updateRememberedValue_l1wh71_k$(value_5);
          tmp_29 = value_5;
        } else {
          tmp_29 = it_5;
        }
        var tmp_30 = tmp_29;
        var tmp10_group = (tmp_30 == null ? true : !(tmp_30 == null)) ? tmp_30 : THROW_CCE();
        $composer_0.endReplaceGroup_ek144q_k$();
        Button(toAttrs(onClick(tmp_28, tmp10_group)), ComposableSingletons$LoginKt_getInstance().lambda_1_r8sbbp_1, $composer_0, 48, 0);
        var tmp2_modifier = textAlign(color(width(Companion_getInstance_2(), get_px(350)), Colors_getInstance().get_Red_18jks8_k$()), Companion_getInstance_6().get_Center_3arb0i_k$());
        var tmp3_text = LoginScreen$lambda($errorText$delegate);
        SpanText(tmp3_text, tmp2_modifier, null, null, $composer_0, 0, 12);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_9($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LoginScreen$lambda_4($scope, $context, $focusedField$delegate, $errorText$delegate) {
    return function ($this$Box, $composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if (!(($changed & 17) === 16) || !$composer_0.get_skipping_3owdve_k$()) {
        var tmp0_$receiver = Companion_getInstance_2();
        var tmp1_leftRight = get_px(50);
        var tmp2_top = get_px(80);
        var tmp3_bottom = get_px(24);
        var tmp_0 = backgroundColor(padding_0(tmp0_$receiver, tmp2_top, tmp1_leftRight, tmp3_bottom), JsTheme_LightGray_getInstance().get_rgb_18ix0c_k$());
        var tmp_1 = Center_getInstance_0();
        var tmp_2 = CenterHorizontally_getInstance();
        // Inline function 'kotlin.run' call
        // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>' call
        var dispatchReceiver = rememberComposableLambda(1096906385, true, LoginScreen$lambda$lambda($scope, $context, $focusedField$delegate, $errorText$delegate), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        sourceInformationMarkerStart($composer_1, 1157296644, 'CC(remember)P(1):Composables.kt#9igjgp');
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.changed_ga7h3f_k$(dispatchReceiver);
        // Inline function 'kotlin.let' call
        // Inline function 'androidx.compose.runtime.cache.<anonymous>' call
        var it = $composer_1.rememberedValue_4dg93v_k$();
        var tmp_3;
        if (invalid || it === Companion_getInstance_0().get_Empty_i9b85g_k$()) {
          // Inline function 'com.exmaple.blogmultiplatform.pages.admin.LoginScreen.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var value = ComposableLambda$invoke$ref_9(dispatchReceiver);
          $composer_1.updateRememberedValue_l1wh71_k$(value);
          tmp_3 = value;
        } else {
          tmp_3 = it;
        }
        var tmp_4 = tmp_3;
        var tmp0 = (tmp_4 == null ? true : !(tmp_4 == null)) ? tmp_4 : THROW_CCE();
        sourceInformationMarkerEnd($composer_1);
        Column(tmp_0, tmp_1, tmp_2, null, tmp0, $composer_0, 24576, 8);
        tmp = Unit_getInstance();
      } else {
        $composer_0.skipToGroupEnd_lh3zi2_k$();
        tmp = Unit_getInstance();
      }
      return Unit_getInstance();
    };
  }
  function ComposableLambda$invoke$ref_10($boundThis) {
    return function (p0, p1, p2) {
      return $boundThis.invoke_c9vvnb_k$(p0, p1, p2);
    };
  }
  function LoginScreen$lambda_5($$changed) {
    return function ($composer, $force) {
      LoginScreen($composer, updateChangedFlags($$changed | 1));
      return Unit_getInstance();
    };
  }
  function get_inputTransition() {
    _init_properties_LoginStyle_kt__eon42g();
    return inputTransition;
  }
  var inputTransition;
  function get_LoginInputBase() {
    _init_properties_LoginStyle_kt__eon42g();
    return LoginInputBase;
  }
  var LoginInputBase;
  function get_LoginInputFocus() {
    _init_properties_LoginStyle_kt__eon42g();
    return LoginInputFocus;
  }
  var LoginInputFocus;
  function LoginInputBase$lambda($this$base) {
    _init_properties_LoginStyle_kt__eon42g();
    var tmp = margin_0(padding(height(width(Companion_getInstance_2(), get_px(350)), get_px(54)), VOID, get_px(20)), get_px(8));
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_$receiver = transition(border(tmp, tmp_0, 'solid', Colors_getInstance().get_Transparent_cxh4g9_k$()), [get_inputTransition()]);
    var tmp1_color = JsTheme_Primary_getInstance().get_rgb_18ix0c_k$();
    var tmp2_width = get_px(0.5);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return backgroundColor(outline(tmp0_$receiver, tmp2_width, 'solid', tmp1_color), Colors_getInstance().get_White_ij46ow_k$());
  }
  function LoginInputFocus$lambda($this$base) {
    _init_properties_LoginStyle_kt__eon42g();
    var tmp = margin_0(padding(height(width(Companion_getInstance_2(), get_px(350)), get_px(54)), VOID, get_px(20)), get_px(8));
    var tmp_0 = get_px(2);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_$receiver = transition(border(tmp, tmp_0, 'solid', JsTheme_Primary_getInstance().get_rgb_18ix0c_k$()), [get_inputTransition()]);
    var tmp1_color = JsTheme_Primary_getInstance().get_rgb_18ix0c_k$();
    var tmp2_width = get_px(0.5);
    // Inline function 'org.jetbrains.compose.web.css.Companion.Solid' call
    Companion_getInstance_3();
    // Inline function 'org.jetbrains.compose.web.css.LineStyle' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return backgroundColor(outline(tmp0_$receiver, tmp2_width, 'solid', tmp1_color), Colors_getInstance().get_White_ij46ow_k$());
  }
  var properties_initialized_LoginStyle_kt_67itai;
  function _init_properties_LoginStyle_kt__eon42g() {
    if (!properties_initialized_LoginStyle_kt_67itai) {
      properties_initialized_LoginStyle_kt_67itai = true;
      var tmp = Companion_getInstance_7();
      var tmp_0 = get_ms(300);
      // Inline function 'org.jetbrains.compose.web.css.Companion.EaseInOut' call
      Companion_getInstance_8();
      // Inline function 'org.jetbrains.compose.web.css.AnimationTimingFunction' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$3 = 'ease-in-out';
      inputTransition = tmp.of_9dpxvg_k$('border', tmp_0, tmp$ret$3, get_ms(0), Companion_getInstance_9().get_Normal_22avww_k$());
      var tmp_1 = Companion_getInstance_10();
      LoginInputBase = base(tmp_1, VOID, LoginInputBase$lambda);
      var tmp_2 = Companion_getInstance_10();
      LoginInputFocus = base(tmp_2, VOID, LoginInputFocus$lambda);
    }
  }
  function checkUserExistence(user, $completion) {
    var tmp = new $checkUserExistenceCOROUTINE$0(user, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  }
  function $checkUserExistenceCOROUTINE$0(user, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.user_1 = user;
  }
  protoOf($checkUserExistenceCOROUTINE$0).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(3);
            this.set_exceptionState_fex74n_k$(2);
            this.set_state_rjd8d0_k$(1);
            var tmp_0 = get_api(window);
            var tmp0 = Default_getInstance();
            var value = this.user_1;
            var this_0 = tmp0.get_serializersModule_piitvg_k$();
            var this_1 = serializer(this_0, createKType(getKClass(User), arrayOf([]), false));
            suspendResult = tmp_0.tryPost$default_2jrokc_k$('usercheck', VOID, encodeToByteArray(tmp0.encodeToString_k0apqx_k$(isInterface(this_1, KSerializer) ? this_1 : THROW_CCE(), value)), VOID, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = suspendResult;
            var tmp_1 = this;
            var this_2 = tmp0_safe_receiver == null ? null : decodeToString(tmp0_safe_receiver);
            var tmp0_0 = Default_getInstance();
            var string = toString(this_2);
            var this_3 = tmp0_0.get_serializersModule_piitvg_k$();
            var this_4 = serializer(this_3, createKType(getKClass(UserWithoutPassword), arrayOf([]), true));
            tmp_1.TRY_RESULT0__1 = tmp0_0.decodeFromString_jwu9sq_k$(isInterface(this_4, KSerializer) ? this_4 : THROW_CCE(), string);
            this.set_exceptionState_fex74n_k$(3);
            this.set_state_rjd8d0_k$(4);
            continue $sm;
          case 2:
            this.set_exceptionState_fex74n_k$(3);
            var tmp_2 = this.get_exception_x0n6w6_k$();
            if (tmp_2 instanceof Exception) {
              var e = this.get_exception_x0n6w6_k$();
              var tmp_3 = this;
              println('CURRENT_USER');
              println(e.message);
              tmp_3.TRY_RESULT0__1 = null;
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            } else {
              throw this.get_exception_x0n6w6_k$();
            }

          case 3:
            throw this.get_exception_x0n6w6_k$();
          case 4:
            this.set_exceptionState_fex74n_k$(3);
            return this.TRY_RESULT0__1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.get_exceptionState_wflpxn_k$() === 3) {
          throw e_0;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e_0);
        }
      }
     while (true);
  };
  var com_exmaple_blogmultiplatform_util_Res_Image$stable;
  var com_exmaple_blogmultiplatform_util_Res$stable;
  var com_exmaple_blogmultiplatform_util_Id$stable;
  function Image_0() {
    Image_instance = this;
    this.logo_1 = '/logo.svg';
  }
  protoOf(Image_0).get_logo_wopywk_k$ = function () {
    return this.logo_1;
  };
  var Image_instance;
  function Image_getInstance() {
    if (Image_instance == null)
      new Image_0();
    return Image_instance;
  }
  function Res() {
    Res_instance = this;
  }
  var Res_instance;
  function Res_getInstance() {
    if (Res_instance == null)
      new Res();
    return Res_instance;
  }
  function Id() {
    Id_instance = this;
    this.usernameInput_1 = 'usernameInput';
    this.passwordInput_1 = 'passwordInput';
    this.svgParent_1 = 'svgParent';
    this.vectorIcon_1 = 'vectorIcon';
    this.navigationText_1 = 'navigationText';
    this.editor_1 = 'editor';
    this.editorPreview_1 = 'editorPreview';
    this.titleInput_1 = 'titleInput';
    this.subtitleInput_1 = 'subtitleInput';
    this.thumbnailInput_1 = 'thumbnailInput';
    this.linkHrefInput_1 = 'linkHrefInput';
    this.linkTitleInput_1 = 'linkTitleInput';
    this.adminSearchBar_1 = 'adminSearchBar';
    this.emailInput_1 = 'emailInput';
    this.postContent_1 = 'postContent';
  }
  protoOf(Id).get_usernameInput_i6vkh7_k$ = function () {
    return this.usernameInput_1;
  };
  protoOf(Id).get_passwordInput_57y4zq_k$ = function () {
    return this.passwordInput_1;
  };
  protoOf(Id).get_svgParent_vlv2bp_k$ = function () {
    return this.svgParent_1;
  };
  protoOf(Id).get_vectorIcon_jvh2qj_k$ = function () {
    return this.vectorIcon_1;
  };
  protoOf(Id).get_navigationText_yua55i_k$ = function () {
    return this.navigationText_1;
  };
  protoOf(Id).get_editor_cs4v3q_k$ = function () {
    return this.editor_1;
  };
  protoOf(Id).get_editorPreview_kj9y1a_k$ = function () {
    return this.editorPreview_1;
  };
  protoOf(Id).get_titleInput_l6ui1n_k$ = function () {
    return this.titleInput_1;
  };
  protoOf(Id).get_subtitleInput_fwb8tl_k$ = function () {
    return this.subtitleInput_1;
  };
  protoOf(Id).get_thumbnailInput_pfv83d_k$ = function () {
    return this.thumbnailInput_1;
  };
  protoOf(Id).get_linkHrefInput_q6hcgs_k$ = function () {
    return this.linkHrefInput_1;
  };
  protoOf(Id).get_linkTitleInput_c13ldh_k$ = function () {
    return this.linkTitleInput_1;
  };
  protoOf(Id).get_adminSearchBar_tdmj0l_k$ = function () {
    return this.adminSearchBar_1;
  };
  protoOf(Id).get_emailInput_1anwgn_k$ = function () {
    return this.emailInput_1;
  };
  protoOf(Id).get_postContent_wjt29c_k$ = function () {
    return this.postContent_1;
  };
  var Id_instance;
  function Id_getInstance() {
    if (Id_instance == null)
      new Id();
    return Id_instance;
  }
  function com_exmaple_blogmultiplatform_util_Res_Image$stableprop_getter() {
    return com_exmaple_blogmultiplatform_util_Res_Image$stable;
  }
  function com_exmaple_blogmultiplatform_util_Res$stableprop_getter() {
    return com_exmaple_blogmultiplatform_util_Res$stable;
  }
  function com_exmaple_blogmultiplatform_util_Id$stableprop_getter() {
    return com_exmaple_blogmultiplatform_util_Id$stable;
  }
  //region block: post-declaration
  protoOf($serializer).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_0).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  protoOf($serializer_1).typeParametersSerializers_fr94fx_k$ = typeParametersSerializers;
  //endregion
  //region block: init
  com_exmaple_blogmultiplatform_components_SidePanel$stable = 0;
  com_exmaple_blogmultiplatform_models_RandomJoke_$serializer$stable = 8;
  com_exmaple_blogmultiplatform_models_RandomJoke$stable = 0;
  com_exmaple_blogmultiplatform_models_User_$serializer$stable = 8;
  com_exmaple_blogmultiplatform_models_User$stable = 0;
  com_exmaple_blogmultiplatform_models_UserWithoutPassword_$serializer$stable = 8;
  com_exmaple_blogmultiplatform_models_UserWithoutPassword$stable = 0;
  com_exmaple_blogmultiplatform_navigation_Screen_AdminHome$stable = 0;
  com_exmaple_blogmultiplatform_navigation_Screen_AdminLogin$stable = 0;
  com_exmaple_blogmultiplatform_navigation_Screen$stable = 0;
  com_exmaple_blogmultiplatform_util_Res_Image$stable = 0;
  com_exmaple_blogmultiplatform_util_Res$stable = 0;
  com_exmaple_blogmultiplatform_util_Id$stable = 0;
  //endregion
  mainWrapper();
  return _;
}));
